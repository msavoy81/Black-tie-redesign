const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Pricing tabs
const priceTabs = document.querySelectorAll('.p-tab');
const pricePanes = document.querySelectorAll('.price-pane');
priceTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    priceTabs.forEach(t => t.classList.remove('active'));
    pricePanes.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

// Contact form — Formspree AJAX
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = contactForm.dataset.formspree;
    if (!id || id === 'YOUR_FORM_ID') {
      alert('Contact form not yet configured. Please call (781) 871-4772.');
      return;
    }
    const btn = contactForm.querySelector('.form-submit');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    try {
      const res = await fetch('https://formspree.io/f/' + id, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        document.getElementById('formSuccess').style.display = 'block';
        contactForm.reset();
        btn.style.display = 'none';
      } else {
        btn.textContent = 'Try Again';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Try Again';
      btn.disabled = false;
    }
  });
}

const mailForm = document.getElementById('mailForm');
if (mailForm) {
  mailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.open('https://app.e2ma.net/app2/audience/signup/1950540/1936276/', '_blank');
  });
}
