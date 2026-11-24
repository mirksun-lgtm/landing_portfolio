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
      el.innerHTML = '';
      el.appendChild(img);
      el.classList.add('has-image');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  hallmarkSlots({
    hero: 'images/hero-spa.jpg',
    about: 'images/process-result.jpg',
    'process-3': 'images/about.jpg',
    'process-4': 'images/beauty-face.jpg',
    'process-1': 'images/process-consultation.jpg',
    'body-1': 'images/body-massage.jpg',
    'body-2': 'images/body-care.jpg',
    'body-3': 'images/body-relax.jpg',
    'health-1': 'images/skin-serum.jpg',
    'health-2': 'images/skin-cream.jpg',
    'health-3': 'images/skin-smile.jpg',
  });

  const credits = {
    a: '<a href="https://www.flickr.com/photos/76588981@N02/11179260694" target="_blank" rel="noopener">homejobsbymom.com</a> (CC BY 2.0)',
    b: '<a href="https://www.flickr.com/photos/93609956@N05/9865582355" target="_blank" rel="noopener">Zenspa1</a> (CC BY 2.0)',
    c: '<a href="https://www.flickr.com/photos/22141297@N06/7798556096" target="_blank" rel="noopener">Naomi King</a> (CC BY 2.0)',
    d: '<a href="https://stocksnap.io/photo/smiling-woman-3WMJWQPS9L" target="_blank" rel="noopener">Authentic Stock</a> (CC0)',
    e: '<a href="https://www.flickr.com/photos/58842866@N08/5388130101" target="_blank" rel="noopener">tommerton2010</a> (CC BY 2.0)',
  };
  const creditEl = document.querySelector('[data-credits]');
  if (creditEl) creditEl.innerHTML = 'Photographs: ' + Object.values(credits).join(', ');

  // Tabs: real tablist — arrow keys move focus, click/Enter activates panel
  const tabs = [...document.querySelectorAll('.tab')];
  const activateTab = btn => {
    tabs.forEach(t => {
      const on = t === btn;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      panel.hidden = !on;
      // lazy-картинки в скрытой панели не стартуют сами — форсируем при показе
      if (on) panel.querySelectorAll('img[loading="lazy"]').forEach(i => { i.loading = 'eager'; });
    });
  };
  tabs.forEach((btn, i) => {
    btn.addEventListener('click', () => activateTab(btn));
    btn.addEventListener('keydown', e => {
      const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      const next = tabs[(i + dir + tabs.length) % tabs.length];
      activateTab(next);
      next.focus();
    });
  });

  // Telegram form: copy text and open chat (no fake "sent")
  document.querySelector('.contact-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const text = `Здравствуйте! Хочу записаться на консультацию.\nИмя: ${name}\nТелефон: ${phone}`;
    navigator.clipboard.writeText(text).catch(() => {}).then(() => {
      window.open('https://t.me/username', '_blank');
    });
  });
});
