import Link from "next/link";

const services = [
  ["Computer Vision и видеоаналитика", "Детектирование событий и рисков, контроль процессов в реальном времени."],
  ["OCR и документооборот", "Распознавание документов и фотоотчетов, извлечение структурированных данных."],
  ["Корпоративные AI-ассистенты (RAG)", "Поиск по базе знаний на естественном языке со ссылками на источники."],
  ["AI-протоколирование встреч", "Транскрибация, диаризация и автоматическое саммари встреч."],
];

export default function ServicesPage() {
  return (
    <main className="app-shell container" style={{ paddingTop: 24, paddingBottom: 40 }}>
      <Link href="/" className="text-muted">← На главную</Link>
      <h1>Услуги</h1>
      <div style={{ display: "grid", gap: 12 }}>
        {services.map(([title, text]) => (
          <article key={title} className="card" style={{ padding: 14 }}>
            <h3 style={{ marginTop: 0 }}>{title}</h3>
            <p className="text-muted">{text}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
