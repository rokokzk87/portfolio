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
  "Управление сложными данными без SQL",
  "Массовое подключение поставщиков данных",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <p className="text-lg font-semibold">AI Systems</p>
        <nav className="flex gap-4 text-sm text-slate-300">
          <Link href="/services">Услуги</Link>
          <Link href="/cases">Кейсы</Link>
          <Link href="/tech">Технологии</Link>
          <Link href="/about">О компании</Link>
          <Link href="/contact">Контакты</Link>
        </nav>
      </header>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 inline-block rounded-full border border-sky-400/40 px-3 py-1 text-xs text-sky-300">
            Интеллектуальные системы автоматизации
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            AI-решения для бизнеса: от Computer Vision до LLM-ассистентов
          </h1>
          <p className="mt-5 max-w-xl text-slate-300">
            Проектируем и внедряем масштабируемые системы в защищенном контуре: аналитика,
            документооборот, ассистенты, автоматизация процессов и управленческие дашборды.
          </p>
          <div className="mt-8 flex gap-3">
            <Link className="rounded-lg bg-sky-500 px-4 py-2 font-medium text-slate-950" href="/contact">
              Обсудить проект
            </Link>
            <Link className="rounded-lg border border-slate-700 px-4 py-2" href="/cases">
              Смотреть кейсы
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="mb-4 text-xl font-semibold">Почему мы</h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><strong>Безопасность:</strong> on-premise и закрытые контуры без утечки данных.</li>
            <li><strong>High-load:</strong> опыт обработки больших потоков видео и данных в реальном времени.</li>
            <li><strong>Прозрачность:</strong> сложные AI-системы в понятных интерфейсах для бизнеса.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-8">
        <h2 className="mb-5 text-2xl font-semibold">Услуги</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {services.map((item) => (
            <article key={item} className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
              {item}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <h2 className="mb-5 text-2xl font-semibold">Кейсы</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {cases.map((item) => (
            <article key={item} className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
              {item}
            </article>
          ))}
        </div>
      </section>

      <footer className="mx-auto mt-8 w-full max-w-6xl border-t border-slate-800 px-6 py-6 text-sm text-slate-400">
        © {new Date().getFullYear()} AI Systems · Безопасная автоматизация и AI для бизнеса
      </footer>
    </main>
  );
}
