import Link from "next/link";

const principles = [
  {
    title: "Бизнес-ориентированность",
    text: "Начинаем не с «какую модель взять», а с конкретной бизнес-проблемы, метрик эффекта и сроков окупаемости.",
  },
  {
    title: "Инженерная зрелость",
    text: "Делаем решения, которые можно поддерживать: документация, мониторинг, контроль версий и понятный lifecycle.",
  },
  {
    title: "Безопасность по умолчанию",
    text: "Поддерживаем on-prem и закрытые контуры, разграничение прав и аудит действий для чувствительных данных.",
  },
  {
    title: "Измеримый результат",
    text: "Каждое внедрение привязываем к KPI: скорость обработки, точность, снижение ошибок, экономия ресурсов.",
  },
];

const workFormat = [
  "Аудит процесса и формирование карты автоматизации",
  "MVP/пилот с быстрыми результатами и прозрачными метриками",
  "Доработка под production: интеграции, надежность, безопасность",
  "Передача в эксплуатацию и поддержка команды заказчика",
];

export default function AboutPage() {
  return (
    <main className="app-shell container" style={{ paddingTop: 24, paddingBottom: 40 }}>
      <Link href="/" className="text-muted">← На главную</Link>
      <h1>О компании</h1>

      <section className="card" style={{ padding: 14, marginBottom: 12 }}>
        <p className="text-muted" style={{ marginTop: 0 }}>
          Мы создаём AI-решения и системы автоматизации для команд, где важны скорость, точность и контроль.
          Наша зона фокуса — computer vision, интеллектуальный документооборот и корпоративные AI-ассистенты.
        </p>
        <p className="text-muted" style={{ marginBottom: 0 }}>
          Работаем от идеи и пилота до промышленной эксплуатации: с интеграциями, мониторингом и чёткими критериями успеха.
        </p>
      </section>

      <section style={{ display: "grid", gap: 10, marginBottom: 12 }}>
        {principles.map((item) => (
          <article key={item.title} className="card" style={{ padding: 14 }}>
            <b>{item.title}</b>
            <p className="text-muted" style={{ marginBottom: 0 }}>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="card" style={{ padding: 14 }}>
        <h3 style={{ marginTop: 0 }}>Как мы работаем</h3>
        <ol style={{ marginTop: 0, paddingLeft: 20 }}>
          {workFormat.map((step) => (
            <li key={step} className="text-muted">{step}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
