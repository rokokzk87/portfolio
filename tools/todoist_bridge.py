#!/usr/bin/env python3
import argparse
import json
import os
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

API_BASE = "https://api.todoist.com/api/v1"
DEFAULT_TOKEN_PATH = Path("/root/.openclaw/credentials/todoist.token")
DEFAULT_STATE_PATH = Path("/root/.openclaw/workspace/.openclaw/todoist_state.json")


def load_token(token_file: Path | None = None) -> str:
    token = os.getenv("TODOIST_TOKEN", "").strip()
    if token:
        return token
    path = token_file or DEFAULT_TOKEN_PATH
    if path.exists():
        return path.read_text(encoding="utf-8").strip()
    raise RuntimeError("Todoist token not found (env TODOIST_TOKEN or token file)")


def request_json(method: str, path: str, token: str, payload: dict | None = None):
    data = None
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
    }
    if payload is not None:
        data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(f"{API_BASE}{path}", data=data, method=method, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            raw = resp.read().decode("utf-8")
            return json.loads(raw) if raw else None
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="ignore")
        raise RuntimeError(f"Todoist API error {e.code}: {body}") from e


def unwrap_results(data):
    if isinstance(data, dict) and "results" in data:
        return data.get("results") or []
    return data


def normalize_task(task: dict) -> dict:
    due = task.get("due") or {}
    return {
        "id": str(task.get("id")),
        "content": task.get("content", ""),
        "description": task.get("description", ""),
        "priority": task.get("priority"),
        "project_id": task.get("project_id"),
        "section_id": task.get("section_id"),
        "labels": sorted(task.get("labels") or []),
        "due": {
            "date": due.get("date"),
            "datetime": due.get("datetime"),
            "string": due.get("string"),
        },
    }


def load_state(path: Path) -> dict:
    if path.exists():
        return json.loads(path.read_text(encoding="utf-8"))
    return {"tasks": {}, "last_sync": None}


def save_state(path: Path, state: dict):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(state, ensure_ascii=False, indent=2), encoding="utf-8")


def cmd_add(args):
    token = load_token(Path(args.token_file) if args.token_file else None)
    payload = {"content": args.content}
    if args.description:
        payload["description"] = args.description
    if args.project_id:
        payload["project_id"] = args.project_id
    if args.priority:
        payload["priority"] = args.priority
    if args.due_string:
        payload["due_string"] = args.due_string
    if args.due_date:
        payload["due_date"] = args.due_date
    if args.labels:
        payload["labels"] = args.labels
    task = request_json("POST", "/tasks", token, payload)
    print(json.dumps(task, ensure_ascii=False))


def cmd_close(args):
    token = load_token(Path(args.token_file) if args.token_file else None)
    request_json("POST", f"/tasks/{args.task_id}/close", token, {})
    print(f"closed:{args.task_id}")


def cmd_list(args):
    token = load_token(Path(args.token_file) if args.token_file else None)
    tasks = unwrap_results(request_json("GET", "/tasks", token))
    if args.json:
        print(json.dumps(tasks, ensure_ascii=False))
        return
    for t in tasks:
        due = (t.get("due") or {}).get("string") or (t.get("due") or {}).get("date") or "—"
        print(f"{t['id']} | p{t.get('priority',1)} | {due} | {t.get('content','')}")


def cmd_sync(args):
    token = load_token(Path(args.token_file) if args.token_file else None)
    state_path = Path(args.state_file) if args.state_file else DEFAULT_STATE_PATH

    tasks_raw = unwrap_results(request_json("GET", "/tasks", token))
    now = datetime.now(timezone.utc).isoformat()

    current_map = {str(t["id"]): normalize_task(t) for t in tasks_raw}
    prev = load_state(state_path)
    prev_map = prev.get("tasks", {})

    new_ids = sorted(set(current_map) - set(prev_map))
    removed_ids = sorted(set(prev_map) - set(current_map))

    changed = []
    for tid in sorted(set(current_map) & set(prev_map)):
        if current_map[tid] != prev_map[tid]:
            changed.append((tid, prev_map[tid], current_map[tid]))

    state = {"tasks": current_map, "last_sync": now}
    save_state(state_path, state)

    if args.init_only:
        print("initialized")
        return

    if not new_ids and not removed_ids and not changed:
        print("NO_CHANGES")
        return

    lines = ["Todoist updates:"]
    for tid in new_ids:
        t = current_map[tid]
        due = t["due"].get("string") or t["due"].get("date") or "без срока"
        lines.append(f"🆕 {t['content']} (id:{tid}, {due})")
    for tid in removed_ids:
        t = prev_map[tid]
        lines.append(f"✅/🗑️ Убрано: {t['content']} (id:{tid})")
    for tid, old, new in changed:
        fields = []
        if old.get("content") != new.get("content"):
            fields.append("название")
        if old.get("due") != new.get("due"):
            fields.append("дата")
        if old.get("priority") != new.get("priority"):
            fields.append("приоритет")
        if old.get("description") != new.get("description"):
            fields.append("описание")
        if not fields:
            fields.append("поля")
        lines.append(f"✏️ Обновлено: {new['content']} (id:{tid}, {', '.join(fields)})")

    print("\n".join(lines))


def build_parser():
    p = argparse.ArgumentParser(description="Todoist bridge")
    sub = p.add_subparsers(dest="command", required=True)

    common = argparse.ArgumentParser(add_help=False)
    common.add_argument("--token-file", default=str(DEFAULT_TOKEN_PATH))

    p_add = sub.add_parser("add", parents=[common])
    p_add.add_argument("content")
    p_add.add_argument("--description")
    p_add.add_argument("--project-id")
    p_add.add_argument("--priority", type=int, choices=[1, 2, 3, 4])
    p_add.add_argument("--due-string")
    p_add.add_argument("--due-date")
    p_add.add_argument("--labels", nargs="*")
    p_add.set_defaults(func=cmd_add)

    p_close = sub.add_parser("close", parents=[common])
    p_close.add_argument("task_id")
    p_close.set_defaults(func=cmd_close)

    p_list = sub.add_parser("list", parents=[common])
    p_list.add_argument("--json", action="store_true")
    p_list.set_defaults(func=cmd_list)

    p_sync = sub.add_parser("sync", parents=[common])
    p_sync.add_argument("--state-file", default=str(DEFAULT_STATE_PATH))
    p_sync.add_argument("--init-only", action="store_true")
    p_sync.set_defaults(func=cmd_sync)

    return p


def main():
    parser = build_parser()
    args = parser.parse_args()
    try:
        args.func(args)
    except Exception as e:
        print(f"ERROR: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
