// HallmarkSlots script — swaps slot placeholders with user's images
// Single instance — called from HTML before </body>
function hallmarkSlots(slots) {
  // Simple implementation: each slot name → find .placeholder[data-slot="name"] and swap
  if (!slots) return;
  Object.entries(slots).forEach(([name, path]) => {
    const el = document.querySelector(` .placeholder[data-slot="${name}"]`);
    if (!el) return;
    const img = document.createElement('img');
    img.src = path;
    img.alt = el.getAttribute('data-alt') || '';
    img.loading = 'lazy';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.borderRadius = getComputedStyle(el).borderRadius;
    el.innerHTML = ''; // clear placeholder
    el.appendChild(img);
  });
}

// Demo: when DOM is ready, slot in the user's images
document.addEventListener('DOMContentLoaded', () => {
  // Slot names and their future image paths (replace with real paths later)
  hallmarkSlots({
    hero: 'images/screens/hero-desktop.png',     // hero photograph
    // about: 'images/about.jpg',                // optional
    // process-1: 'images/process/1.jpg',       // etc.
    // process-2: 'images/process/2.jpg',
    // process-3: 'images/process/3.jpg',
    // process-4: 'images/process/4.jpg',
  });
});

// Telegram send — just copies text and opens Telegram
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const form = this;
  const name = form.querySelector('input[type="text"]').value;
  const phone = form.querySelector('input[type="tel"]').value;
  const text = `👋 Привет! Хочу записаться на консультацию.\nИмя: ${name}\nТелефон: ${phone}`;
  // Copy to clipboard and open Telegram
  navigator.clipboard.writeText(text).then(() => {
    const telegramUrl = `https://t.me/username?start=book`;
    window.open(telegramUrl, '_blank');
  });
});