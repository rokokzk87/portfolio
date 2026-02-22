import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <Link href="/" className="text-sm text-sky-600">← На главную</Link>
      <h1 className="mt-3 text-3xl font-bold">Услуги</h1>
      <p className="mt-4 text-slate-600">Computer Vision, OCR, RAG-ассистенты, AI-протоколирование, Low-Code/No-Code и интеграции.</p>
    </main>
  );
}
