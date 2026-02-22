# AI Systems Portfolio Website

Презентационный сайт (портфолио) для AI/Automation-компании на базе материалов из PDF-презентации.

## Что внутри

- Главная страница с позиционированием и CTA
- Страница услуг
- Страница кейсов с примерами и скриншотами из PDF
- Страница технологий и архитектуры
- Страница о компании
- Контактная форма (frontend-версия)
- Переключение светлой/тёмной темы
- Мобильная адаптация (mobile-first)

## Техстек

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS + кастомная минималистичная дизайн-система (CSS variables)
- **Runtime:** Node.js
- **Process manager (prod):** PM2

## Структура проекта

```bash
site/
├─ public/
│  └─ cases/                 # скриншоты кейсов из PDF
├─ src/
│  ├─ app/
│  │  ├─ page.tsx            # главная
│  │  ├─ services/page.tsx
│  │  ├─ cases/page.tsx
│  │  ├─ tech/page.tsx
│  │  ├─ about/page.tsx
│  │  ├─ contact/page.tsx
│  │  ├─ layout.tsx
│  │  └─ globals.css
│  └─ components/
│     └─ theme-toggle.tsx
├─ package.json
└─ README.md
```

## Локальный запуск

```bash
cd site
npm install
npm run dev
```

Открыть: `http://localhost:3000`

## Production запуск на сервере

```bash
cd /root/.openclaw/workspace/site
npm install
npm run build
pm2 start npm --name ai-site -- start
pm2 save
```

Полезные команды:

```bash
pm2 status
pm2 logs ai-site
pm2 restart ai-site
```

## Деплой в GitHub

```bash
git add .
git commit -m "update portfolio"
git push origin main
```

## Что важно доделать перед реальным продом

- Подключить backend для контактной формы (email/CRM/Telegram webhook)
- Добавить favicon/бренд-ассеты и финальную типографику
- Настроить аналитику (например, Plausible / GA4)
- Добавить legal-страницы: Privacy Policy, Terms
- Подключить домен и HTTPS (Nginx + Let's Encrypt)

## Контентная база

Контент и кейсы собраны и адаптированы из пользовательского PDF (включая визуальные вставки со слайдов).
