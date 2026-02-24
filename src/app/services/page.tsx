import Link from "next/link";

type Service = {
  title: string;
  summary: string;
  includes: string[];
  outcome: string;
};

const services: Service[] = [
  {
    title: "Computer Vision и видеоаналитика",
    summary: "Автоматическое выявление нарушений, рисков и отклонений по видеопотокам в реальном времени.",
    includes: [
      "Детекция/трекинг объектов и событий",
      "Настройка зон, правил и триггеров алертов",
      "Интеграция с Telegram/почтой/API заказчика",
      "Пилот с метриками точности и времени реакции",
    ],
    outcome: "Снижение ручного контроля и более быстрые управленческие реакции.",
  },
  {
    title: "OCR и интеллектуальный документооборот",
    summary: "Распознавание документов и фотоотчетов с извлечением структурированных полей для бизнес-процессов.",
    includes: [
      "OCR для сканов, фото и PDF",
      "Извлечение реквизитов, таблиц и сущностей",
      "Валидация данных и контроль качества",
      "Экспорт в Excel/CRM/ERP",
    ],
    outcome: "Кратное ускорение обработки документов и снижение ошибок ручного ввода.",
  },
  {
    title: "Корпоративные AI-ассистенты (RAG)",
    summary: "Внутренний ассистент по регламентам и базе знаний с ответами на естественном языке и ссылками на источники.",
    includes: [
      "Индексация базы знаний (docs, wiki, PDF)",
      "Ролевой доступ и разграничение контента",
      "Ответы со ссылками на исходные документы",
      "Логи качества и контроль галлюцинаций",
    ],
    outcome: "Сокращение времени поиска информации и ускорение адаптации сотрудников.",
  },
  {
    title: "AI-протоколирование встреч",
    summary: "Автоматическая транскрибация и саммари звонков/встреч с фиксацией задач, дедлайнов и ответственных.",
    includes: [
      "Транскрибация и диаризация участников",
      "Структурированный саммари по шаблону",
      "Выделение action items и решений",
      "Экспорт в Notion/Google Docs/CRM",
    ],
    outcome: "Единый стандарт протоколов и меньше потерь важных договоренностей.",
  },
];

export default function ServicesPage() {
  return (
    <main className="app-shell container" style={{ paddingTop: 24, paddingBottom: 40 }}>
      <Link href="/" className="text-muted">← На главную</Link>
      <h1>Услуги</h1>
      <p className="text-muted" style={{ marginTop: -6, marginBottom: 14 }}>
        Работаем от диагностики до пилота и промышленного внедрения. Ниже — основные направления.
      </p>

      <div style={{ display: "grid", gap: 12 }}>
        {services.map((service) => (
          <article key={service.title} className="card" style={{ padding: 14 }}>
            <h3 style={{ marginTop: 0, marginBottom: 8 }}>{service.title}</h3>
            <p className="text-muted" style={{ marginTop: 0 }}>{service.summary}</p>

            <p style={{ marginBottom: 6 }}><b>Что входит:</b></p>
            <ul style={{ marginTop: 0, paddingLeft: 20 }}>
              {service.includes.map((item) => (
                <li key={item} className="text-muted">{item}</li>
              ))}
            </ul>

            <p className="text-muted" style={{ marginBottom: 0 }}>
              <b>Результат:</b> {service.outcome}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
