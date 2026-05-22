/* ──────────────────────────────────────────────
   KEYUR PAWAR PORTFOLIO — script.js
────────────────────────────────────────────── */

// ── NAVBAR: scroll shadow + hamburger ────────
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── ACTIVE NAV LINK on scroll ─────────────────
const sections = document.querySelectorAll('section[id]');

function setActiveLink() {
  const scrollY = window.scrollY + 80;
  sections.forEach(sec => {
    const top    = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    const id     = sec.getAttribute('id');
    const link   = navLinks.querySelector(`a[href="#${id}"]`);
    if (link) {
      link.style.color = (scrollY >= top && scrollY < bottom)
        ? 'var(--accent)'
        : '';
    }
  });
}
window.addEventListener('scroll', setActiveLink, { passive: true });

// ── SCROLL REVEAL ─────────────────────────────
const revealTargets = document.querySelectorAll(
  '.project-card, .skill-group, .timeline-item, .achievement-card, ' +
  '.contact-card, .about-grid, .about-edu, .edu-card, .contact-form'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealTargets.forEach(el => observer.observe(el));

// ── CONTACT FORM ──────────────────────────────
const form   = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name    = form.name.value.trim();
  const email   = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    status.textContent = 'Please fill in all fields.';
    status.style.color = '#ef4444';
    return;
  }

  // Build a mailto link (works without a backend)
  const subject  = encodeURIComponent(`Portfolio Inquiry from ${name}`);
  const body     = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const mailto   = `mailto:keyurpawar3@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailto;

  status.textContent = '✓ Your email client should open now. Thank you!';
  status.style.color = 'var(--accent)';
  form.reset();

  setTimeout(() => { status.textContent = ''; }, 5000);
});

// ── SMOOTH SCROLL OFFSET for fixed navbar ────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-h'), 10) || 64;
    window.scrollTo({
      top: target.offsetTop - offset + 1,
      behavior: 'smooth'
    });
  });
});

// ── YEAR in footer (optional) ────────────────
// Automatically kept correct if you add <span id="yr"></span> to footer
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();
