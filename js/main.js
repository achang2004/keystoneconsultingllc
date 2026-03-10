/* ═══════════════════════════════════════════════════════════
   Keystone Consulting LLC — Main JS
   Handles: nav/footer injection, language toggle, scroll
   reveal, hamburger menu, FAQ accordion, form submission.
   China-safe: zero external dependencies.
   ═══════════════════════════════════════════════════════════ */

/* ── PATH DETECTION ───────────────────────────────────────── */
// Determine relative base path: root vs /pages/ depth
const _depth = window.location.pathname.split('/').filter(Boolean).length;
const BASE = _depth >= 2 ? '../' : './';

/* ── NAV HTML ─────────────────────────────────────────────── */
function buildNav() {
  return `
<nav id="main-nav">
  <div class="container nav-inner">
    <a href="${BASE}index.html" class="nav-logo"><img src="${BASE}assets/logos/keystone.svg" alt="Keystone Consulting LLC" class="nav-logo-img"></a>
    <ul class="nav-links" role="list">
      <li><a href="${BASE}index.html"                           data-i18n="nav.home">Home</a></li>
      <li><a href="${BASE}pages/services.html"                  data-i18n="nav.services">Services</a></li>
      <li><a href="${BASE}pages/about.html"                     data-i18n="nav.about">About</a></li>
      <li><a href="${BASE}pages/success-stories.html"           data-i18n="nav.success">Success Stories</a></li>
      <li><a href="${BASE}pages/contact.html"                   data-i18n="nav.contact">Contact</a></li>
    </ul>
    <div class="nav-cta">
      <button class="lang-toggle" id="langToggle" aria-label="Toggle language">
        <span class="lang-label" data-i18n="nav.lang_switch">中文</span>
      </button>
      <a href="${BASE}pages/contact.html" class="btn btn-primary btn-sm" data-i18n="nav.cta">Free Consultation</a>
    </div>
    <button class="hamburger" id="hamburgerBtn" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
  <ul>
    <li><a href="${BASE}index.html"                        data-i18n="nav.home">Home</a></li>
    <li><a href="${BASE}pages/services.html"               data-i18n="nav.services">Services</a></li>
    <li><a href="${BASE}pages/about.html"                  data-i18n="nav.about">About</a></li>
    <li><a href="${BASE}pages/success-stories.html"        data-i18n="nav.success">Success Stories</a></li>
    <li><a href="${BASE}pages/contact.html"                data-i18n="nav.contact">Contact</a></li>
  </ul>
  <div class="mobile-menu-footer">
    <button class="lang-toggle lang-toggle--large" id="langToggleMobile" aria-label="Toggle language">
      <span class="lang-label" data-i18n="nav.lang_switch_long">切换到中文</span>
    </button>
    <a href="${BASE}pages/contact.html" class="btn btn-primary" data-i18n="nav.cta">Free Consultation</a>
  </div>
</div>`;
}

/* ── FOOTER HTML ──────────────────────────────────────────── */
function buildFooter() {
  return `
<footer>
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="${BASE}index.html" class="nav-logo"><img src="${BASE}assets/logos/keystone.svg" alt="Keystone Consulting LLC" class="nav-logo-img"></a>
        <p data-i18n="footer.tagline">Helping students from China and around the world gain admission to their dream U.S. universities since 2008. 100% success rate. Bilingual support.</p>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer.services_heading">Services</h4>
        <ul>
          <li><a href="${BASE}pages/services.html" data-i18n="footer.s1">University Planning</a></li>
          <li><a href="${BASE}pages/services.html" data-i18n="footer.s2">Application Strategy</a></li>
          <li><a href="${BASE}pages/services.html" data-i18n="footer.s3">Essay Coaching</a></li>
          <li><a href="${BASE}pages/services.html" data-i18n="footer.s4">Interview Prep</a></li>
          <li><a href="${BASE}pages/services.html" data-i18n="footer.s5">Summer Programs</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4 data-i18n="footer.contact_heading">Contact</h4>
        <ul>
          <li><a href="mailto:janewula@gmail.com">janewula@gmail.com</a></li>
          <li><a href="${BASE}pages/contact.html">WeChat: janewu2237</a></li>
          <li><a href="${BASE}pages/contact.html" data-i18n="nav.cta">Free Consultation</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span data-i18n="footer.copyright">© 2025 Keystone Consulting LLC. All rights reserved.</span>
      <span data-i18n="footer.location">Based in Los Angeles, CA · Serving Families Worldwide</span>
    </div>
  </div>
</footer>`;
}

/* ── LANGUAGE SYSTEM ──────────────────────────────────────── */
let currentLang = localStorage.getItem('ks_lang') || 'en';

function getVal(obj, keyPath) {
  return keyPath.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}

function applyTranslations() {
  if (typeof TRANSLATIONS === 'undefined') return;
  const t = TRANSLATIONS[currentLang];
  if (!t) return;

  document.documentElement.lang = currentLang;

  // Text content translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getVal(t, el.getAttribute('data-i18n'));
    if (val !== undefined) el.textContent = val;
  });

  // innerHTML translations (for markup like <em>, <span class="gold">)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = getVal(t, el.getAttribute('data-i18n-html'));
    if (val !== undefined) el.innerHTML = val;
  });

  // Placeholder translations
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = getVal(t, el.getAttribute('data-i18n-placeholder'));
    if (val !== undefined) el.placeholder = val;
  });
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  localStorage.setItem('ks_lang', currentLang);
  applyTranslations();
}

/* ── SCROLL REVEAL ────────────────────────────────────────── */
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(r => observer.observe(r));
}

/* ── FAQ ACCORDION ────────────────────────────────────────── */
function initFaq() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ── ACTIVE NAV LINK ──────────────────────────────────────── */
function initActiveLink() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    // Normalize: strip BASE prefix and leading slash for comparison
    const hrefNorm = href.replace(/^\.\.\//, '').replace(/^\.\//, '');
    const pathNorm = path.replace(/^\//, '');
    if (hrefNorm && pathNorm.endsWith(hrefNorm)) {
      a.classList.add('active');
    }
    // Special case: home page
    if ((pathNorm === '' || pathNorm === 'index.html') && hrefNorm === 'index.html') {
      a.classList.add('active');
    }
  });
}

/* ── FORM SUBMISSION ──────────────────────────────────────── */
function initForms() {
  document.querySelectorAll('form.contact-form-el').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = document.getElementById('formSuccess');
      if (success) {
        success.style.display = 'block';
        setTimeout(() => { success.style.display = 'none'; }, 5000);
      }
    });
  });

  // Also handle button-triggered form (no <form> element)
  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const success = document.getElementById('formSuccess');
      if (success) {
        success.style.display = 'block';
        setTimeout(() => { success.style.display = 'none'; }, 5000);
      }
    });
  }
}

/* ── SUCCESS STORY FILTER ─────────────────────────────────── */
function initStoryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const storyCards = document.querySelectorAll('.story-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      storyCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ── COPY ID BUTTONS ─────────────────────────────────────── */
function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }
  // Fallback for HTTP / older browsers
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  return Promise.resolve();
}

function initCopyButtons() {
  document.querySelectorAll('.copy-id-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.dataset.copy;
      copyText(text).then(() => {
        const orig = btn.textContent;
        btn.textContent = currentLang === 'zh' ? '已复制!' : 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = orig;
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });
}

/* ── MARQUEE (JS-driven, mobile-safe, reusable) ──────────── */
function startMarquee(track, speed) {
  // Duplicate children so the track is always wider than the viewport
  const originals = Array.from(track.children);
  originals.forEach(el => {
    const clone = el.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });

  let offset = 0;
  let paused = false;

  track.addEventListener('mouseenter', () => { paused = true; });
  track.addEventListener('mouseleave', () => { paused = false; });

  function step() {
    if (!paused) {
      offset += speed;
      const first = track.firstElementChild;
      const firstWidth = first.offsetWidth +
        parseFloat(getComputedStyle(first).marginRight);
      if (offset >= firstWidth) {
        offset -= firstWidth;
        track.appendChild(first);
      }
      track.style.transform = 'translateX(' + (-offset) + 'px)';
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function initMarquee() {
  document.querySelectorAll('.marquee-track').forEach(track => {
    const speed = parseFloat(track.dataset.speed) || 0.5;
    startMarquee(track, speed);
  });
}

/* ── INIT ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  // 1. Inject nav
  const navRoot = document.getElementById('nav-root');
  if (navRoot) {
    navRoot.innerHTML = buildNav();
  }

  // 2. Inject footer
  const footRoot = document.getElementById('footer-root');
  if (footRoot) {
    footRoot.innerHTML = buildFooter();
  }

  // 3. Wire hamburger (after nav injection)
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu   = document.getElementById('mobileMenu');
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('open', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    });
    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburgerBtn.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 4. Wire lang toggles (after nav injection)
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', toggleLang);
  });

  // 5. Nav scroll shadow
  const mainNav = document.getElementById('main-nav');
  if (mainNav) {
    window.addEventListener('scroll', () => {
      mainNav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // 6. Apply translations (runs after nav/footer injected so their elements get translated too)
  applyTranslations();

  // 7. Active link
  initActiveLink();

  // 8. Scroll reveal
  initReveal();

  // 9. FAQ accordion
  initFaq();

  // 10. Forms
  initForms();

  // 11. Story filter (success-stories page)
  initStoryFilter();

  // 12. Marquee (JS-driven for mobile compatibility)
  initMarquee();

  // 13. Copy ID buttons (contact page)
  initCopyButtons();

});
