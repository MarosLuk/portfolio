/* ============================================
   Maroš Lukáč — Portfolio
   i18n (EN/SK), theme toggle, nav, reveal animations
   ============================================ */

(function () {
  'use strict';

  /* ---------- Language (i18n) ---------- */
  const LANG_KEY = 'ml-portfolio-lang';
  const supported = ['en', 'sk'];

  function getLang() {
    try {
      const stored = localStorage.getItem(LANG_KEY);
      if (supported.includes(stored)) return stored;
    } catch (e) {}
    return 'en'; // English is the default
  }

  function resolveKey(dict, key) {
    return key.split('.').reduce(function (obj, part) {
      return obj && obj[part] !== undefined ? obj[part] : undefined;
    }, dict);
  }

  // The hero title rises in word by word, but only on the first paint;
  // a language switch just swaps the words.
  let titleAnimated = false;
  function splitHeroTitle() {
    const el = document.querySelector('.hero__title');
    if (!el) return;
    const words = el.textContent.trim().split(/\s+/);
    el.textContent = '';
    words.forEach(function (word, i) {
      const outer = document.createElement('span');
      outer.className = 'w';
      const inner = document.createElement('span');
      inner.style.setProperty('--i', i);
      inner.textContent = word;
      outer.appendChild(inner);
      el.appendChild(outer);
      if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
    });
    el.classList.toggle('is-anim', !titleAnimated);
    titleAnimated = true;
  }

  function applyLang(lang) {
    if (typeof I18N === 'undefined') return;
    const dict = I18N[lang] || I18N.en;

    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const value = resolveKey(dict, el.getAttribute('data-i18n'));
      if (value !== undefined) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-list]').forEach(function (el) {
      const value = resolveKey(dict, el.getAttribute('data-i18n-list'));
      if (Array.isArray(value)) {
        el.innerHTML = value.map(function (item) { return '<li>' + item + '</li>'; }).join('');
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      // format: "attr:key;attr2:key2"
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        const idx = pair.indexOf(':');
        const attr = pair.slice(0, idx).trim();
        const value = resolveKey(dict, pair.slice(idx + 1).trim());
        if (attr && value !== undefined) el.setAttribute(attr, value);
      });
    });

    document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    splitHeroTitle();

    // Page <title> swap
    const titleKey = document.body.getAttribute('data-title-key');
    if (titleKey) {
      const t = resolveKey(dict, titleKey);
      if (t) document.title = t;
    }

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  /* ---------- Theme ---------- */
  const THEME_KEY = 'ml-portfolio-theme';

  function getTheme() {
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === 'light' || stored === 'dark') return stored;
    } catch (e) {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  /* ---------- Init on DOM ready ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(getTheme());
    applyLang(getLang());

    document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });

    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    /* Nav: mobile menu, glass bar once scrolled, hides on the way down */
    const nav = document.querySelector('.nav');
    const burger = document.querySelector('.nav__burger');
    if (nav && burger) {
      burger.addEventListener('click', function (e) {
        e.stopPropagation();
        nav.classList.toggle('menu-open');
      });
      document.addEventListener('click', function () {
        nav.classList.remove('menu-open');
      });
      nav.querySelectorAll('.nav__links a').forEach(function (link) {
        link.addEventListener('click', function () {
          nav.classList.remove('menu-open');
        });
      });
    }
    if (nav) {
      let lastY = window.scrollY;
      const onScroll = function () {
        const y = window.scrollY;
        nav.classList.toggle('is-scrolled', y > 40);
        const delta = y - lastY;
        if (y < 80 || delta < -6) nav.classList.remove('is-hidden');
        else if (delta > 6) nav.classList.add('is-hidden');
        lastY = y;
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* Reveal on scroll */
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Observe single elements and every child of a stagger group separately.
    // Watching a whole tall grid with a ratio threshold kept its first cards
    // hidden (or hidden for good on phones) while they were already on screen.
    const revealEls = document.querySelectorAll('.reveal, .reveal-stagger > *');
    if (reduced || !('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      const observer = new IntersectionObserver(function (entries) {
        let batch = 0;
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          // Children that enter together fade in one after another.
          if (el.parentElement && el.parentElement.classList.contains('reveal-stagger')) {
            const delay = Math.min(batch, 5) * 70;
            batch += 1;
            if (delay) {
              el.style.transitionDelay = delay + 'ms';
              // Drop the delay afterwards so hover effects stay instant.
              setTimeout(function () { el.style.transitionDelay = ''; }, delay + 750);
            }
          }
          el.classList.add('is-visible');
          observer.unobserve(el);
        });
      }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function (el) { observer.observe(el); });
    }

    /* Footer year */
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();
