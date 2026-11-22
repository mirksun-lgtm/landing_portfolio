// Slots: fill placeholders with real local photos (Flickr CC BY 2.0, credited in footer)
function hallmarkSlots(slots) {
  if (!slots) return;
  Object.entries(slots).forEach(([name, path]) => {
    document.querySelectorAll(`.placeholder[data-slot="${name}"]`).forEach(el => {
      const img = document.createElement('img');
      img.src = path;
      img.alt = el.getAttribute('data-alt') || '';
      img.loading = name === 'hero' ? 'eager' : 'lazy';
      if (name === 'hero') img.fetchPriority = 'high';
      img.width = 800;
      img.height = 600;
      el.innerHTML = '';
      el.appendChild(img);
      el.classList.add('has-image');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  hallmarkSlots({
    hero: 'images/process-finish.jpg',
    about: 'images/process-result.jpg',
    'process-3': 'images/about.jpg',
    'process-4': 'images/beauty-face.jpg',
    'process-1': 'images/process-consultation.jpg',
  });

  const credits = {
    a: '<a href="https://www.flickr.com/photos/76588981@N02/11179260694" target="_blank" rel="noopener">homejobsbymom.com</a> (CC BY 2.0)',
    b: '<a href="https://www.flickr.com/photos/93609956@N05/9865582355" target="_blank" rel="noopener">Zenspa1</a> (CC BY 2.0)',
    c: '<a href="https://www.flickr.com/photos/22141297@N06/7798556096" target="_blank" rel="noopener">Naomi King</a> (CC BY 2.0)',
    d: '<a href="https://www.flickr.com/photos/47808661@N07/5918124637" target="_blank" rel="noopener">Tara Angkor Hotel</a> (CC BY 2.0)',
    e: '<a href="https://www.flickr.com/photos/58842866@N08/5388130101" target="_blank" rel="noopener">tommerton2010</a> (CC BY 2.0)',
  };
  const creditEl = document.querySelector('[data-credits]');
  if (creditEl) creditEl.innerHTML = 'Photographs: ' + Object.values(credits).join(', ');

  // Tabs (visual only — same content for each specialization)
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    });
  });

  // Telegram form: copy text and open chat (no fake "sent")
  document.querySelector('.contact-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const text = `Здравствуйте! Хочу записаться на консультацию.\nИмя: ${name}\nТелефон: ${phone}`;
    navigator.clipboard.writeText(text).then(() => {
      window.open('https://t.me/username', '_blank');
    });
  });
});
