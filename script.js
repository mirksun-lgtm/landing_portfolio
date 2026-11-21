// HallmarkSlots script — swaps slot placeholders with user's images
// Single instance — called from HTML before </body>
// Hallmark rule: never use Unsplash/Pexels/Pixabay URLs directly.
// Use Wikimedia Commons (CC0/CC BY-SA) or user-supplied photos.
// See: references/imagery.md § 2 and § 5 for photo credit requirements.

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

// Update photo credits in footer after images load
function updatePhotoCredits(slots) {
  // Hallmark: credits go in footer .footer-photo-credits
  // Each slot[data-slot="name"] should have its credit set via data-credit attribute or
  // the script that generated the photo (theme.mjs photos) prints them.
  // For now, leave as-is — credits will be filled when photos are properly loaded.
  // Never invent author names or URLs from memory (Hallmark gate 76).
}

// Demo: when DOM is ready, slot in the user's images
document.addEventListener('DOMContentLoaded', () => {
  // Slot names and their future image paths (replace with real paths later)
  // !!! Important: do not use Unsplash/Pexels/Pixabay direct links — Hallmark gates will FAIL.
  // Use either:
  // 1. Paths to your own images: 'images/hero.jpg', 'images/about.jpg', etc.
  // 2. Run: node <skill-dir>/scripts/theme.mjs photos "subject" --theme studio --n 3
  //    and use the printed srcset/sizes with credits.
  hallmarkSlots({
    hero: 'images/screens/hero-desktop.png',     // hero photograph — replace with your own or Hallmark library
    // about: 'images/about.jpg',                // optional — replace with your photo or omit
    // process-1: 'images/process/1.jpg',       // etc. — replace with process photos
    // process-2: 'images/process/2.jpg',
    // process-3: 'images/process/3.jpg',
    // process-4: 'images/process/4.jpg',
  });

  // Update credits placeholders — Hallmark will fill these automatically when photos load
  // or you can manually set data-credit attributes on the .placeholder elements
  const creditElements = {
    hero: document.querySelector('span[data-credit-hero]'),
    about: document.querySelector('span[data-credit-about]'),
    process: document.querySelector('span[data-credit-process]'),
  };
  // Currently just show placeholder text — replace with real credits when photos are set
  Object.values(creditElements).forEach(el => {
    if (el) el.textContent = 'фото будет добавлено позже';
  });
}

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