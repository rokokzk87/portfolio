import Link from "next/link";

const stack = [
  {
    title: "AI / ML ядро",
    items: ["Computer Vision (детекция, классификация, трекинг)", "OCR + постобработка документов", "LLM/RAG для корпоративных знаний", "Оценка качества: precision/recall, latency, drift"],
  },
  {
    title: "Backend и интеграции",
    items: ["Python (FastAPI) для API и бизнес-логики", "Интеграции с Telegram, email, CRM/ERP", "Импорт/экспорт Excel/CSV и ETL-пайплайны", "Webhook и событийная модель для уведомлений"],
  },
  {
    title: "Данные и хранение",
    items: ["PostgreSQL/SQLite для операционных данных", "Объектное хранилище для файлов/медиа", "Версионирование датасетов и артефактов", "Логирование, аудит и трассировка действий"],
  },
  {
    title: "Frontend и UX",
    items: ["Vue.js + TypeScript", "Дашборды под роли (оператор, менеджер, админ)", "Адаптивный интерфейс для desktop/mobile", "Приоритет скорости и понятности интерфейсов"],
  },
];

const architecture = [
  "Диагностика процесса и формализация KPI",
  "MVP/пилот на реальных данных (2–6 недель)",
  "Интеграция в контур заказчика и обучение команды",
  "Промышленная эксплуатация с мониторингом и SLA",
];

export default function TechPage() {
  return (
    <main className="app-shell container" style={{ paddingTop: 24, paddingBottom: 40 }}>
      <Link href="/" className="text-muted">← На главную</Link>
      <h1>Технологии и архитектура</h1>
      <p className="text-muted" style={{ marginTop: -6, marginBottom: 14 }}>
        Проектируем решения так, чтобы они были не «демо ради демо», а рабочей частью бизнес-процесса.
      </p>

      <section className="card" style={{ padding: 14, marginBottom: 12 }}>
        <h3 style={{ marginTop: 0 }}>Технологический стек</h3>
        <div style={{ display: "grid", gap: 10 }}>
          {stack.map((group) => (
            <div key={group.title}>
              <p style={{ marginBottom: 6 }}><b>{group.title}</b></p>
              <ul style={{ marginTop: 0, paddingLeft: 20 }}>
                {group.items.map((item) => (
                  <li key={item} className="text-muted">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ padding: 14, marginBottom: 12 }}>
        <h3 style={{ marginTop: 0 }}>Архитектурные принципы</h3>
        <ul style={{ marginTop: 0, paddingLeft: 20 }}>
          <li className="text-muted">Модульность: каждый блок можно развивать без «переписывания всего».</li>
          <li className="text-muted">Наблюдаемость: метрики, логи и health-check по всем ключевым сервисам.</li>
          <li className="text-muted">Безопасность: изоляция контуров, управление доступом, аудит действий.</li>
          <li className="text-muted">Масштабируемость: от пилота до high-load сценариев.</li>
        </ul>
      </section>

      <section className="card" style={{ padding: 14 }}>
        <h3 style={{ marginTop: 0 }}>Как внедряем</h3>
        <ol style={{ marginTop: 0, paddingLeft: 20 }}>
          {architecture.map((step) => (
            <li key={step} className="text-muted">{step}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
