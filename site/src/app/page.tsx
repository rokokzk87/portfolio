import Link from "next/link";

const services = [
  "Computer Vision и видеоаналитика",
  "OCR и интеллектуальная обработка документов",
  "Корпоративные AI-ассистенты (RAG + LLM)",
  "AI-протоколирование совещаний",
  "Low-Code / No-Code платформы данных",
  "Интеграции: API, Excel, веб-дашборды, боты",
];

const cases = [
  "Детектирование рисков на транспорте",
  "Цифровой контроль городской среды",
  "Корпоративный AI-ассистент по базе знаний",
  "Автоматический секретарь совещаний",
];

export default function Home() {
  return (
    <main className="app-shell">
      <header style={{ borderBottom: "1px solid var(--border)", position: "sticky", top: 0, background: "var(--bg)", zIndex: 20 }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, paddingBottom: 14 }}>
          <b>AI Systems</b>
          <nav style={{ display: "flex", gap: 12, fontSize: 14 }}>
            <Link href="/services">Услуги</Link>
            <Link href="/cases">Кейсы</Link>
            <Link href="/tech">Технологии</Link>
            <Link href="/about">О компании</Link>
            <Link href="/contact">Контакты</Link>
          </nav>
        </div>
      </header>

      <section className="container" style={{ display: "grid", gap: 18, paddingTop: 44, paddingBottom: 34 }}>
        <div className="badge">Интеллектуальные системы автоматизации</div>
        <h1 style={{ fontSize: 40, lineHeight: 1.1, margin: 0 }}>AI-решения для бизнеса: от Computer Vision до LLM-ассистентов</h1>
        <p className="text-muted" style={{ maxWidth: 780 }}>
          Проектируем и внедряем масштабируемые системы в защищенном контуре: аналитика, документооборот, ассистенты,
          автоматизация процессов и управленческие дашборды.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link href="/contact" className="btn btn-primary">Обсудить проект</Link>
          <Link href="/cases" className="btn btn-ghost">Смотреть кейсы</Link>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 20 }}>
        <h2 style={{ marginBottom: 12 }}>Услуги</h2>
        <div style={{ display: "grid", gap: 10 }}>
          {services.map((item) => (
            <div key={item} className="card" style={{ padding: 14 }}>{item}</div>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 42 }}>
        <h2 style={{ marginBottom: 12 }}>Кейсы</h2>
        <div style={{ display: "grid", gap: 10 }}>
          {cases.map((item) => (
            <div key={item} className="card" style={{ padding: 14 }}>{item}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
