/* ============================================
   Maroš Lukáč — Portfolio
   i18n (EN/SK), theme toggle, reveal animations
   ============================================ */

(function () {
  'use strict';

  /* ---------- Language (i18n) ---------- */
  const LANG_KEY = 'ml-portfolio-lang';
  const supported = ['en', 'sk'];

  function getLang() {
    const stored = localStorage.getItem(LANG_KEY);
    if (supported.includes(stored)) return stored;
    return 'en'; // English is the default
  }

  function resolveKey(dict, key) {
    return key.split('.').reduce(function (obj, part) {
      return obj && obj[part] !== undefined ? obj[part] : undefined;
    }, dict);
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

    // Page <title> swap
    const titleKey = document.body.getAttribute('data-title-key');
    if (titleKey) {
      const t = resolveKey(dict, titleKey);
      if (t) document.title = t;
    }

    localStorage.setItem(LANG_KEY, lang);
  }

  /* ---------- Theme ---------- */
  const THEME_KEY = 'ml-portfolio-theme';

  function getTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
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

    /* Mobile menu */
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

    /* Reveal on scroll */
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
    if (reduced || !('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function (el) { observer.observe(el); });
    }

    /* Cursor-follow glow on project cards */
    document.querySelectorAll('.project-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
      });
    });

    /* Whole project card is clickable */
    document.querySelectorAll('.project-card[data-href]').forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.closest('a')) return;
        window.location.href = card.getAttribute('data-href');
      });
    });

    /* Footer year */
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();
