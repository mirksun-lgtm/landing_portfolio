# Лендинг-визитка косметолога

Первый проект портфолио: одностраничный сайт для мастера услуг.

## Что показывает

Клиенту: «сделаю сайт под ключ без твоего макета — от текста до кнопки в Telegram».

## Стек

- HTML5 + CSS3 + vanilla JS
- Нет фреймворков и сборщиков
- Дизайн: Montclair (пудрово-розовая палитра, скруглённые секции, Cormorant Garamond + Jost)

## Блоки

1. Первый экран: обещание результата, кнопка «Записаться» → Telegram
2. Полоса преимуществ: безоперационные процедуры, диагностика, сертификаты, комфорт
3. Обо мне: цель, философия, подход, сертификаты
4. Услуги: 3 вкладки (лицо / тело / здоровье кожи), по 3 карточки, настоящие табы с переключением
5. Отзывы: 3 отзыва-заглушки с пометкой «пример»
6. Контакты + форма: имя, телефон → копирование текста и переход в Telegram
7. Футер: копирайт, кредиты фото

## Фото

Фотографии с лицензией **CC BY 2.0** (Flickr) и **CC0** (StockSnap, Rawpixel). Авторы CC BY указаны в футере страницы в блоке `data-credits`; CC0 не требует указания авторства.

Файлы: `images/hero-spa.jpg`, `images/about.jpg`, `images/process-consultation.jpg`, `images/process-result.jpg`, `images/beauty-face.jpg` (CC BY), `images/body-massage.jpg`, `images/body-care.jpg`, `images/body-relax.jpg` (CC0, Rawpixel: 5913670, 5949647, 5944979), `images/skin-serum.jpg`, `images/skin-cream.jpg`, `images/skin-smile.jpg` (CC0, StockSnap).

## Деплой

GitHub Pages: https://mirksun-lgtm.github.io/landing_portfolio/

Источник: ветка `main`, папка `/ (root)`. Файл `.nojekyll` отключает обработку Jekyll.

## Локальный запуск

Открыть `index.html` в браузере или запустить любой статический сервер из корня папки.

## Скриншоты

- `screenshots/desktop.png` — десктопная версия
- `screenshots/mobile.png` — мобильная версия (390px)

## Проверки

- Адаптив: 1024 / 768 / 480px, горизонтального скролла нет
- SEO: title, description, один H1, alt у всех фото
- W3C Nu Validator: 0 ошибок
- Lighthouse: Performance 100, SEO 100, Best Practices 100
