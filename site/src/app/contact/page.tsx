import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="app-shell container" style={{ paddingTop: 24, paddingBottom: 40 }}>
      <Link href="/" className="text-muted">← На главную</Link>
      <h1>Контакты</h1>
      <p className="text-muted">Оставьте заявку на пилот: оценим задачу и предложим план внедрения.</p>
      <form className="card" style={{ padding: 14, display: "grid", gap: 10 }}>
        <input className="input" placeholder="Имя" />
        <input className="input" placeholder="Компания" />
        <input className="input" placeholder="Email / Telegram" />
        <textarea className="textarea" rows={5} placeholder="Опишите задачу" />
        <button className="btn btn-primary" type="button">Отправить заявку</button>
      </form>
    </main>
  );
}
