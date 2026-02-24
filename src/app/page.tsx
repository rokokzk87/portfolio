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

const nav = [
  { href: "/services", label: "Услуги" },
  { href: "/cases", label: "Кейсы" },
  { href: "/tech", label: "Технологии" },
  { href: "/about", label: "О компании" },
  { href: "/contact", label: "Контакты" },
];

export default function Home() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="container topbar-row">
          <b>Ганза_AI</b>
          <nav className="topbar-nav-desktop">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="container topbar-nav-mobile">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-chip">
              {item.label}
            </Link>
          ))}
        </div>
      </header>

      <section className="container" style={{ display: "grid", gap: 16, paddingTop: 28, paddingBottom: 24 }}>
        <div className="badge">Интеллектуальные системы автоматизации</div>
        <h1 className="hero-title">AI-решения для бизнеса: от Computer Vision до LLM-ассистентов</h1>
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
        <h2 style={{ marginBottom: 12 }}>Видео</h2>
        <div className="card" style={{ overflow: "hidden" }}>
          <video
            className="showreel-video"
            src="/media/ganza-showreel.mp4"
            poster="/media/ganza-showreel-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
          />
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
