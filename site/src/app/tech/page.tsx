import Link from "next/link";

const stack = [
  "Python",
  "Computer Vision",
  "OCR",
  "Big Data",
  "LLM / RAG",
  "Web Dashboards",
  "Telegram-боты",
  "Excel-интеграции",
];

export default function TechPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 text-slate-100 sm:px-6 sm:py-12">
      <Link href="/" className="text-sm text-sky-400">← На главную</Link>
      <h1 className="mt-3 text-3xl font-bold">Технологии и архитектура</h1>

      <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
        <h2 className="text-lg font-semibold">Технологический стек</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-200">{item}</span>
          ))}
        </div>
      </section>

      <section className="mt-4 rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
        <h2 className="text-lg font-semibold">Архитектурный подход</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
          <li><strong>Security first:</strong> запуск в закрытом контуре (on-premise), данные не уходят в публичные облака.</li>
          <li><strong>High-load:</strong> обработка больших объемов видео и данных в реальном времени.</li>
          <li><strong>Прозрачность:</strong> сложная AI-логика упакована в понятные интерфейсы для бизнеса.</li>
          <li><strong>Масштабирование:</strong> от пилота к промышленной эксплуатации с измеримыми KPI.</li>
        </ul>
      </section>
    </main>
  );
}
