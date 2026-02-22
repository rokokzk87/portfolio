import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 text-slate-100 sm:px-6 sm:py-12">
      <Link href="/" className="text-sm text-sky-400">← На главную</Link>
      <h1 className="mt-3 text-3xl font-bold">О компании</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Мы создаем интеллектуальные системы автоматизации и AI-решения для бизнеса: от компьютерного зрения до LLM-инструментов и платформ работы с данными.
      </p>

      <section className="mt-6 grid gap-4 sm:grid-cols-3">
        <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
          <h2 className="font-semibold">Безопасность</h2>
          <p className="mt-2 text-sm text-slate-300">On-prem внедрение и защита конфиденциальной информации.</p>
        </article>
        <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
          <h2 className="font-semibold">Эффективность</h2>
          <p className="mt-2 text-sm text-slate-300">Автоматизация рутинных процессов и ускорение принятия решений.</p>
        </article>
        <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
          <h2 className="font-semibold">Измеримость</h2>
          <p className="mt-2 text-sm text-slate-300">Фокус на метриках: скорость, точность, снижение затрат и рисков.</p>
        </article>
      </section>
    </main>
  );
}
