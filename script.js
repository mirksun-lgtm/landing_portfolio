// HallmarkSlots script — swaps slot placeholders with real photos.
// Photos: Flickr, CC BY 2.0 (commercial use allowed, attribution required).
// Credits are set in the footer below. Never use Unsplash/Pexels/Pixabay URLs directly.

function hallmarkSlots(slots) {
  if (!slots) return;
  Object.entries(slots).forEach(([name, path]) => {
    const el = document.querySelector(`.placeholder[data-slot="${name}"]`);
    if (!el) return;
    const img = document.createElement('img');
    img.src = path;
    img.alt = el.getAttribute('data-alt') || '';
    img.loading = name === 'hero' ? 'eager' : 'lazy';
    if (name === 'hero') img.fetchPriority = 'high';
    img.width = el.getBoundingClientRect().width || 800;
    img.height = el.getBoundingClientRect().height || 600;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.borderRadius = getComputedStyle(el).borderRadius;
    el.innerHTML = '';
    el.appendChild(img);
    el.classList.add('has-image');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Real local photos, matched to each section's subject
  hallmarkSlots({
    hero: 'images/process-consultation.jpg',      // white face mask, applied with brush
    about: 'images/about.jpg',                    // client with mirror, result
    'process-1': 'images/process-mask.jpg',       // therapist at work
    'process-2': 'images/process-finish.jpg',     // spa salon atmosphere
    'process-3': 'images/process-result.jpg',     // care oils
    'process-4': 'images/process-consultation.jpg', // finishing mask
  });

  // Photo credits — CC BY 2.0 requires attribution (Hallmark gate 76)
  const credits = {
    hero: '<a href="https://www.flickr.com/photos/93609956@N05/9865582355" target="_blank" rel="noopener">Zenspa1</a> (CC BY 2.0)',
    about: '<a href="https://www.flickr.com/photos/76588981@N02/11179260694" target="_blank" rel="noopener">homejobsbymom.com</a> (CC BY 2.0)',
    'process-1': '<a href="https://www.flickr.com/photos/145748390@N03/30273731091" target="_blank" rel="noopener">Scubaspa Maldives</a> (CC BY 2.0)',
    'process-2': '<a href="https://www.flickr.com/photos/47808661@N07/5918124637" target="_blank" rel="noopener">Tara Angkor Hotel</a> (CC BY 2.0)',
    'process-3': '<a href="https://www.flickr.com/photos/22141297@N06/7798556096" target="_blank" rel="noopener">Naomi King</a> (CC BY 2.0)',
  };
  const creditEl = document.querySelector('[data-credits]');
  if (creditEl) {
    creditEl.innerHTML = 'Photographs: ' + Object.values(credits).join(', ');
  }
});

// Telegram send — copies text and opens the chat (no fake "sent" state)
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]').value;
  const phone = this.querySelector('input[type="tel"]').value;
  const text = `Здравствуйте! Хочу записаться на консультацию.\nИмя: ${name}\nТелефон: ${phone}`;
  navigator.clipboard.writeText(text).then(() => {
    window.open('https://t.me/username', '_blank');
  });
});
