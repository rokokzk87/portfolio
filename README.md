# AI Systems Portfolio Website

Презентационный сайт (портфолио) для AI/Automation-компании на базе материалов из PDF-презентации.

## Что внутри

- Главная страница с позиционированием и CTA
- Страница услуг
- Страница кейсов с примерами и скриншотами из PDF
- Страница технологий и архитектуры
- Страница о компании
- Контактная форма с отправкой в Python backend (FastAPI + SQLite)
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
./
├─ backend/
│  ├─ app.py
│  ├─ requirements.txt
│  └─ leads.db (создается автоматически)
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
npm install
npm run dev
```

Frontend: `http://localhost:3000`

## Production запуск на сервере

```bash
cd /root/.openclaw/workspace
npm install
npm run build
pm2 start npm --name ai-site -- start

python3 -m venv /root/.openclaw/venvs/site-backend
/root/.openclaw/venvs/site-backend/bin/pip install -r backend/requirements.txt
pm2 start /root/.openclaw/venvs/site-backend/bin/python --name ai-site-backend -- -m uvicorn backend.app:app --host 0.0.0.0 --port 8001 --app-dir /root/.openclaw/workspace

pm2 save
```

Полезные команды:

```bash
pm2 status
pm2 logs ai-site
pm2 logs ai-site-backend
pm2 restart ai-site
pm2 restart ai-site-backend
```

## Деплой в GitHub

```bash
git add .
git commit -m "update portfolio"
git push origin main
```

## Backend API

Base URL: `http://<server-ip>:8001`

- `GET /health` — проверка статуса
- `POST /leads` — создать заявку
- `GET /admin/leads` — список заявок (требует заголовок `x-admin-key`)
- `GET /admin/leads.csv` — экспорт CSV (требует `x-admin-key`)

### Переменные окружения backend

- `ADMIN_KEY` — ключ для админ-эндпоинтов
- `TG_BOT_TOKEN` — токен Telegram-бота (опционально)
- `TG_CHAT_ID` — чат для уведомлений о новых лидах (опционально)

## Что важно доделать перед реальным продом

- Настроить доставку заявок из SQLite в CRM/Telegram/email
- Добавить favicon/бренд-ассеты и финальную типографику
- Настроить аналитику (например, Plausible / GA4)
- Добавить legal-страницы: Privacy Policy, Terms
- Подключить домен и HTTPS (Nginx + Let's Encrypt)

## Контентная база

Контент и кейсы собраны и адаптированы из пользовательского PDF (включая визуальные вставки со слайдов).
