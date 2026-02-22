import Link from "next/link";

export default function TechPage() {
  return (
    <main className="app-shell container" style={{ paddingTop: 24, paddingBottom: 40 }}>
      <Link href="/" className="text-muted">← На главную</Link>
      <h1>Технологии и архитектура</h1>
      <section className="card" style={{ padding: 14, marginBottom: 10 }}>
        <h3>Стек</h3>
        <p className="text-muted">Python, Computer Vision, OCR, Big Data, LLM/RAG, Web Dashboard, Telegram-боты, Excel.</p>
      </section>
      <section className="card" style={{ padding: 14 }}>
        <h3>Подход</h3>
        <p className="text-muted">On-premise, high-load, прозрачные интерфейсы, переход от пилота к промышленной эксплуатации.</p>
      </section>
    </main>
  );
}
