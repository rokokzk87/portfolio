from __future__ import annotations

import csv
import os
import sqlite3
from datetime import datetime, timezone
from io import StringIO
from pathlib import Path
from urllib import parse, request

from fastapi import FastAPI, Header, HTTPException, Response
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "leads.db"

ADMIN_KEY = os.getenv("ADMIN_KEY", "")
TG_BOT_TOKEN = os.getenv("TG_BOT_TOKEN", "")
TG_CHAT_ID = os.getenv("TG_CHAT_ID", "")

app = FastAPI(title="Portfolio Backend", version="1.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class LeadIn(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    company: str = Field(min_length=2, max_length=160)
    contact: str = Field(min_length=3, max_length=180)
    task: str = Field(min_length=10, max_length=4000)


class LeadOut(BaseModel):
    id: int
    created_at: str


def get_conn() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db() -> None:
    with get_conn() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS leads (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                company TEXT NOT NULL,
                contact TEXT NOT NULL,
                task TEXT NOT NULL,
                created_at TEXT NOT NULL
            )
            """
        )
        conn.commit()


def require_admin(x_admin_key: str | None) -> None:
    if not ADMIN_KEY:
        raise HTTPException(status_code=503, detail="ADMIN_KEY not configured")
    if not x_admin_key or x_admin_key != ADMIN_KEY:
        raise HTTPException(status_code=401, detail="Unauthorized")


def notify_telegram(lead_id: int, payload: LeadIn, created_at: str) -> None:
    if not TG_BOT_TOKEN or not TG_CHAT_ID:
        return

    text = (
        "🆕 Новая заявка с сайта\n"
        f"ID: {lead_id}\n"
        f"Имя: {payload.name}\n"
        f"Компания: {payload.company}\n"
        f"Контакт: {payload.contact}\n"
        f"Задача: {payload.task}\n"
        f"Время: {created_at}"
    )

    data = parse.urlencode({"chat_id": TG_CHAT_ID, "text": text}).encode()
    url = f"https://api.telegram.org/bot{TG_BOT_TOKEN}/sendMessage"
    req = request.Request(url, data=data, method="POST")

    try:
        with request.urlopen(req, timeout=8):
            pass
    except Exception:
        # Silent fail: lead is already saved in DB
        pass


@app.on_event("startup")
def on_startup() -> None:
    init_db()


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/leads", response_model=LeadOut)
def create_lead(payload: LeadIn) -> LeadOut:
    created_at = datetime.now(timezone.utc).isoformat()
    with get_conn() as conn:
        cur = conn.execute(
            "INSERT INTO leads (name, company, contact, task, created_at) VALUES (?, ?, ?, ?, ?)",
            (payload.name.strip(), payload.company.strip(), payload.contact.strip(), payload.task.strip(), created_at),
        )
        conn.commit()
        lead_id = cur.lastrowid

    if not lead_id:
        raise HTTPException(status_code=500, detail="Failed to save lead")

    notify_telegram(int(lead_id), payload, created_at)

    return LeadOut(id=int(lead_id), created_at=created_at)


@app.get("/admin/leads")
def list_leads(x_admin_key: str | None = Header(default=None)) -> dict[str, list[dict[str, str | int]]]:
    require_admin(x_admin_key)

    with get_conn() as conn:
        rows = conn.execute(
            "SELECT id, name, company, contact, task, created_at FROM leads ORDER BY id DESC LIMIT 500"
        ).fetchall()

    return {
        "items": [
            {
                "id": int(r["id"]),
                "name": str(r["name"]),
                "company": str(r["company"]),
                "contact": str(r["contact"]),
                "task": str(r["task"]),
                "created_at": str(r["created_at"]),
            }
            for r in rows
        ]
    }


@app.get("/admin/leads.csv")
def export_leads_csv(x_admin_key: str | None = Header(default=None)) -> Response:
    require_admin(x_admin_key)

    with get_conn() as conn:
        rows = conn.execute(
            "SELECT id, name, company, contact, task, created_at FROM leads ORDER BY id DESC"
        ).fetchall()

    out = StringIO()
    writer = csv.writer(out)
    writer.writerow(["id", "name", "company", "contact", "task", "created_at"])
    for r in rows:
        writer.writerow([r["id"], r["name"], r["company"], r["contact"], r["task"], r["created_at"]])

    return Response(
        content=out.getvalue(),
        media_type="text/csv; charset=utf-8",
        headers={"Content-Disposition": "attachment; filename=leads.csv"},
    )
