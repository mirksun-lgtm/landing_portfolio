# Landing Page Project 1

## Stack
- HTML5 + CSS3 (one stylesheet max) + vanilla JS
- No frameworks, no build tools, no WordPress
- Git + GitHub Pages for deployment

## Commands
- `git status` — check repo state
- `git add . && git commit -m "лендинг: описание"` — stage changes
- `npm run dev` — (not used, static only)
- `npx vercel deploy` — not used, GitHub Pages only

## Structure
- `index.html` — main page
- `styles.css` — single stylesheet with Hallmark tokens
- `script.js` — tiny interactions (Telegram form, slot swapping)
- `images/` — folder for project images (captured or library photos)
- `.hallmark/` — hallmark log/stamp (optional, for design checks)

## Blocks (from brief, order)
1. Первый экран: имя, короткое обещание, кнопка «Записаться» → Telegram
2. Обо мне: цель, философия, подход, сертификаты
3. Услуги: 3–6 карточек с ценами (пример-заглушки)
4. Фото процесса: 3–4 фото (стоковые, бесплатные)
5. Отзывы: 2–3 отзыва-заглушки с пометкой примера
6. Контакты + форма: имя, телефон/телеграм, кнопка → Telegram
7. Футер: копирайт, ссылки

## SEO basics (must have)
- `<title>` filled
- `<meta name="description">` filled
- One `<H1>` on page
- `alt` on all images

## Adaptive breakpoints
- Desktop: 1024px+
- Tablet: 768px
- Phone: 480px

## Git convention
- Conventional commits: `лендинг: ...` (in Russian)

## Deployment
- GitHub Pages: `user.github.io/repo`
- Push to main → site updates automatically