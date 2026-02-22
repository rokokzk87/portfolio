import Link from "next/link";

const services = [
  {
    title: "Computer Vision и видеоаналитика",
    text: "Детектирование событий и рисков на транспорте, контроль процессов в реальном времени, фильтрация ложных срабатываний.",
  },
  {
    title: "OCR и документооборот",
    text: "Распознавание документов и фотоотчетов, извлечение структурированных данных, автоматическая валидация перед загрузкой в целевые системы.",
  },
  {
    title: "Корпоративные AI-ассистенты (RAG)",
    text: "Поиск по внутренней базе знаний на естественном языке с ответами и ссылками на источники в защищенном контуре.",
  },
  {
    title: "AI-протоколирование встреч",
    text: "Транскрибация, диаризация и автоматическое саммари совещаний: от аудио/видео к структурированному протоколу.",
  },
  {
    title: "Low-Code / No-Code платформы",
    text: "Управление сущностями и связями без SQL, ускорение проверки гипотез и снижение нагрузки на разработку/поддержку.",
  },
  {
    title: "Интеграции в бизнес-интерфейсы",
    text: "Веб-дашборды, Telegram-боты, Excel-отчеты, API-интеграции и запуск в on-prem инфраструктуре заказчика.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <Link href="/" className="text-sm text-sky-600">← На главную</Link>
      <h1 className="mt-3 text-3xl font-bold">Услуги</h1>
      <p className="mt-3 max-w-3xl text-slate-600">
        Комплексные AI-решения: от компьютерного зрения и OCR до LLM-систем и архитектуры high-load в защищенном контуре.
      </p>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        {services.map((s) => (
          <article key={s.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{s.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
