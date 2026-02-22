"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "ok" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      company: String(form.get("company") || ""),
      contact: String(form.get("contact") || ""),
      task: String(form.get("task") || ""),
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("request_failed");

      const data = (await res.json()) as { id?: number };
      setStatus("ok");
      setMessage(`✅ Заявка отправлена успешно${data?.id ? ` (ID: ${data.id})` : ""}. Мы скоро свяжемся с вами.`);
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("❌ Не удалось отправить заявку. Проверьте интернет и попробуйте ещё раз.");
    }
  };

  const statusStyle =
    status === "ok"
      ? { border: "1px solid #14532d", background: "#052e16", color: "#bbf7d0" }
      : status === "error"
        ? { border: "1px solid #7f1d1d", background: "#450a0a", color: "#fecaca" }
        : { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--muted)" };

  return (
    <main className="app-shell container" style={{ paddingTop: 24, paddingBottom: 40 }}>
      <Link href="/" className="text-muted">← На главную</Link>
      <h1>Контакты</h1>
      <p className="text-muted">Оставьте заявку на пилот: оценим задачу и предложим план внедрения.</p>

      <form className="card" style={{ padding: 14, display: "grid", gap: 10 }} onSubmit={onSubmit}>
        <input className="input" name="name" placeholder="Имя" required minLength={2} />
        <input className="input" name="company" placeholder="Компания" required minLength={2} />
        <input className="input" name="contact" placeholder="Email / Telegram" required minLength={3} />
        <textarea className="textarea" name="task" rows={5} placeholder="Опишите задачу" required minLength={10} />
        <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Отправка..." : "Отправить заявку"}
        </button>
      </form>

      {message ? (
        <div style={{ marginTop: 12, borderRadius: 10, padding: "10px 12px", fontSize: 14, ...statusStyle }}>{message}</div>
      ) : null}
    </main>
  );
}
