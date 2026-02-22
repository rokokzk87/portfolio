import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 text-slate-100 sm:px-6 sm:py-12">
      <Link href="/" className="text-sm text-sky-400">← На главную</Link>
      <h1 className="mt-3 text-3xl font-bold">Контакты</h1>
      <p className="mt-4 text-slate-300">
        Оставьте заявку на пилот: мы оценим задачу, данные и предложим план внедрения.
      </p>

      <form className="mt-6 grid gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm sm:grid-cols-2">
        <input className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2" placeholder="Имя" />
        <input className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2" placeholder="Компания" />
        <input className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 sm:col-span-2" placeholder="Email / Telegram" />
        <textarea
          className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 sm:col-span-2"
          rows={5}
          placeholder="Опишите задачу: процесс, тип данных, желаемый результат и сроки"
        />
        <button className="rounded-lg bg-slate-900 px-4 py-2 text-white sm:col-span-2">Отправить заявку</button>
      </form>
    </main>
  );
}
