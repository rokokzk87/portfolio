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

const nav = [
  { href: "/services", label: "Услуги" },
  { href: "/cases", label: "Кейсы" },
  { href: "/tech", label: "Технологии" },
  { href: "/about", label: "О компании" },
  { href: "/contact", label: "Контакты" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-slate-800/90 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <p className="text-base font-semibold sm:text-lg">AI Systems</p>
          <nav className="hidden gap-4 text-sm text-slate-300 md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-4 pb-3 md:hidden [&::-webkit-scrollbar]:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </header>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-2 md:py-20">
        <div>
          <p className="mb-3 inline-block rounded-full border border-sky-400/40 px-3 py-1 text-xs text-sky-300">
            Интеллектуальные системы автоматизации
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            AI-решения для бизнеса: от Computer Vision до LLM-ассистентов
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
            Проектируем и внедряем масштабируемые системы в защищенном контуре: аналитика,
            документооборот, ассистенты, автоматизация процессов и управленческие дашборды.
          </p>
          <div className="mt-6 grid gap-3 sm:flex">
            <Link
              className="rounded-lg bg-sky-500 px-4 py-3 text-center text-sm font-semibold text-slate-950"
              href="/contact"
            >
              Обсудить проект
            </Link>
            <Link
              className="rounded-lg border border-slate-700 px-4 py-3 text-center text-sm"
              href="/cases"
            >
              Смотреть кейсы
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
          <h2 className="mb-4 text-lg font-semibold sm:text-xl">Почему мы</h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>
              <strong>Безопасность:</strong> on-premise и закрытые контуры без утечки данных.
            </li>
            <li>
              <strong>High-load:</strong> опыт обработки больших потоков видео и данных в реальном времени.
            </li>
            <li>
              <strong>Прозрачность:</strong> сложные AI-системы в понятных интерфейсах для бизнеса.
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <h2 className="mb-4 text-xl font-semibold sm:mb-5 sm:text-2xl">Услуги</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((item) => (
            <article key={item} className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
              {item}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <h2 className="mb-4 text-xl font-semibold sm:mb-5 sm:text-2xl">Кейсы</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {cases.map((item) => (
            <article key={item} className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
              {item}
            </article>
          ))}
        </div>
      </section>

      <footer className="mx-auto mt-6 w-full max-w-6xl border-t border-slate-800 px-4 py-6 text-xs text-slate-400 sm:px-6 sm:text-sm">
        © {new Date().getFullYear()} AI Systems · Безопасная автоматизация и AI для бизнеса
      </footer>
    </main>
  );
}
