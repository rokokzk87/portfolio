import Image from "next/image";
import Link from "next/link";

const cases = [
  {
    title: "Кейс №1: Детектирование рисков на транспорте",
    problem: "Ручной контроль тысяч камер невозможен.",
    solution: "Computer Vision: детекция, трекинг простоя, фильтрация ложных срабатываний.",
    result: ["25 кадр/сек", "85%+ точность", "<1 мин уведомление"],
    image: "/cases/case-03.jpg",
  },
  {
    title: "Кейс №2: Цифровой контроль городской среды",
    problem: "Разбор фотоотчетов занимал до 2.5 дней.",
    solution: "YOLO + OCR для классификации нарушений и оцифровки документов.",
    result: ["Ускорение в 60 раз", "1 час вместо 2.5 дней", "Снижение человеческого фактора"],
    image: "/cases/case-04.jpg",
  },
  {
    title: "Кейс №3: Корпоративный AI-ассистент (RAG)",
    problem: "Много времени уходило на поиск регламентов и инструкций.",
    solution: "LLM-ассистент по внутренней базе знаний со ссылками на источники.",
    result: ["Защищенный контур", "Поиск с ~30% до <1%", "Ответы с источниками"],
    image: "/cases/case-05.jpg",
  },
  {
    title: "Кейс №5: AI-протоколирование совещаний",
    problem: "Итоги встреч терялись, а подготовка протоколов занимала много времени.",
    solution: "Транскрибация, диаризация и AI-саммари аудио/видео встреч.",
    result: ["Быстрый структурированный протокол", "Единый формат фиксации решений"],
    image: "/cases/case-06.jpg",
  },
  {
    title: "Кейс №6: Low-Code / No-Code для сложных данных",
    problem: "Неконтролируемые связи, непрозрачная логика и рост нагрузки на аналитиков.",
    solution: "Платформа управления сущностями и связями без SQL.",
    result: ["Сокращение времени анализа", "Снижение ошибок и инцидентов", "Быстрее внедрение изменений"],
    image: "/cases/case-07.jpg",
  },
  {
    title: "Кейс №7: Массовое подключение поставщиков данных",
    problem: "Нужно было быстро подключить много поставщиков без сложной интеграции.",
    solution: "Загрузка через Excel + Receiver с автоматической проверкой схем.",
    result: ["Быстрый онбординг поставщиков", "Ошибки по строкам", "Соблюдение правил целевой системы"],
    image: "/cases/case-08.jpg",
  },
];

export default function CasesPage() {
  return (
    <main className="app-shell container" style={{ paddingTop: 24, paddingBottom: 40 }}>
      <Link href="/" className="text-muted">← На главную</Link>
      <h1>Кейсы</h1>
      <div style={{ display: "grid", gap: 12 }}>
        {cases.map((c) => (
          <article key={c.title} className="card" style={{ overflow: "hidden" }}>
            <div className="case-image">
              <Image src={c.image} alt={c.title} fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ padding: 14 }}>
              <h3 style={{ marginTop: 0 }}>{c.title}</h3>
              <p className="text-muted"><b>Проблема:</b> {c.problem}</p>
              <p className="text-muted"><b>Решение:</b> {c.solution}</p>
              <ul>
                {c.result.map((r) => (
                  <li key={r} className="text-muted">{r}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
