import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <Link href="/" className="text-sm text-sky-600">← На главную</Link>
      <h1 className="mt-3 text-3xl font-bold">Контакты</h1>
      <p className="mt-4 text-slate-600">Оставьте заявку: имя, компания, задача, объем данных и сроки. Мы подготовим пилот.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Имя" />
        <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Компания" />
        <textarea className="rounded-lg border border-slate-300 px-3 py-2 sm:col-span-2" rows={4} placeholder="Кратко опишите задачу" />
        <button className="rounded-lg bg-slate-900 px-4 py-2 text-white sm:col-span-2">Отправить заявку</button>
      </div>
    </main>
  );
}
