import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="app-shell container" style={{ paddingTop: 24, paddingBottom: 40 }}>
      <Link href="/" className="text-muted">← На главную</Link>
      <h1>О компании</h1>
      <p className="text-muted">Создаем интеллектуальные системы автоматизации и AI-решения для бизнеса.</p>
      <div style={{ display: "grid", gap: 10 }}>
        <div className="card" style={{ padding: 14 }}><b>Безопасность</b><p className="text-muted">On-prem внедрение и защита конфиденциальной информации.</p></div>
        <div className="card" style={{ padding: 14 }}><b>Эффективность</b><p className="text-muted">Автоматизация рутинных процессов и ускорение принятия решений.</p></div>
        <div className="card" style={{ padding: 14 }}><b>Измеримость</b><p className="text-muted">Фокус на скорости, точности, снижении затрат и рисков.</p></div>
      </div>
    </main>
  );
}
