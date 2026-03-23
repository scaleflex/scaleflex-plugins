/* ==========================================================================
   Scaleflex Plugins Hub — App
   ========================================================================== */

/* --------------------------------------------------------------------------
   Plugin Data Model
   -------------------------------------------------------------------------- */
const PLUGINS = [
  {
    id: 'scaleflex-asset-picker',
    name: 'Asset Picker',
    npmPackage: '@scaleflex/asset-picker',
    version: '1.0.0',
    tagline: 'Browse and select assets from your DAM',
    description:
      'A drop-in widget that lets users browse, search, and select digital assets from their Scaleflex DAM. Supports filtering, preview, and multi-select with a polished UI.',
    icon: 'icon-asset-picker',
    accentColor: '#2c99ff',
    features: [
      'Asset Browsing',
      'Search & Filter',
      'Multi-select',
      'Preview',
      'Drag & Drop',
      'Responsive',
      'Customizable',
      'Accessibility',
    ],
    links: {
      demo: 'https://scaleflex.github.io/asset-picker/',
      repo: 'https://github.com/scaleflex/asset-picker',
      docs: 'https://scaleflex.github.io/asset-picker/#/docs/getting-started',
    },
  },
  {
    id: 'scaleflex-uploader',
    name: 'Uploader',
    npmPackage: '@scaleflex/uploader',
    version: '1.0.0',
    tagline: 'Upload files directly to your Scaleflex account',
    description:
      'A powerful upload widget with drag & drop, progress tracking, multi-file support, and automatic optimization. Seamlessly connects to your Scaleflex storage.',
    icon: 'icon-uploader',
    accentColor: '#00d4aa',
    features: [
      'Drag & Drop',
      'Multi-file',
      'Progress Tracking',
      'Auto-optimize',
      'Folder Upload',
      'Responsive',
      'Customizable',
      'Accessibility',
    ],
    links: {
      demo: 'https://scaleflex.github.io/uploader/',
      repo: 'https://github.com/scaleflex/uploader',
      docs: 'https://scaleflex.github.io/uploader/#/docs/getting-started',
    },
  },
  {
    id: 'scaleflex-experience-picker',
    name: 'Experience Picker',
    npmPackage: '@scaleflex/experience-picker',
    version: '1.0.0',
    tagline: 'Select and embed rich media experiences',
    description:
      'A widget for browsing and selecting pre-built media experiences — galleries, sliders, and interactive layouts — ready to embed in any page or application.',
    icon: 'icon-experience-picker',
    accentColor: '#6879EB',
    features: [
      'Experience Gallery',
      'Live Preview',
      'Embed Code',
      'Templates',
      'Customization',
      'Responsive',
      'Search & Filter',
      'Accessibility',
    ],
    links: {
      docs: 'https://spotlight.scaleflex.com/docs/experience-picker',
    },
  },
];

/* --------------------------------------------------------------------------
   Plugin Illustrations (inline SVGs)
   -------------------------------------------------------------------------- */
function getPluginIllustration(pluginId) {
  const illustrations = {
    'scaleflex-asset-picker': `
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Asset picker illustration">
        <!-- Browser frame -->
        <rect x="15" y="15" width="170" height="130" rx="8" stroke="url(#grad-asset)" stroke-width="2" opacity="0.3"/>
        <rect x="15" y="15" width="170" height="22" rx="8" fill="url(#grad-asset)" opacity="0.06"/>
        <circle cx="30" cy="26" r="3" fill="url(#grad-asset)" opacity="0.3"/>
        <circle cx="40" cy="26" r="3" fill="url(#grad-asset)" opacity="0.3"/>
        <circle cx="50" cy="26" r="3" fill="url(#grad-asset)" opacity="0.3"/>
        <!-- Search bar -->
        <rect x="65" y="22" width="70" height="8" rx="4" fill="url(#grad-asset)" opacity="0.08" stroke="url(#grad-asset)" stroke-width="0.5" stroke-opacity="0.2"/>
        <!-- Sidebar -->
        <rect x="23" y="45" width="40" height="92" rx="4" fill="url(#grad-asset)" opacity="0.04" stroke="url(#grad-asset)" stroke-width="0.5" stroke-opacity="0.1"/>
        <line x1="30" y1="55" x2="55" y2="55" stroke="url(#grad-asset)" stroke-width="2" opacity="0.2" stroke-linecap="round"/>
        <line x1="30" y1="65" x2="50" y2="65" stroke="url(#grad-asset)" stroke-width="1.5" opacity="0.12" stroke-linecap="round"/>
        <line x1="30" y1="75" x2="52" y2="75" stroke="url(#grad-asset)" stroke-width="1.5" opacity="0.12" stroke-linecap="round"/>
        <line x1="30" y1="85" x2="48" y2="85" stroke="url(#grad-asset)" stroke-width="1.5" opacity="0.12" stroke-linecap="round"/>
        <!-- Asset grid -->
        <rect x="70" y="45" width="48" height="38" rx="4" fill="url(#grad-asset)" opacity="0.08" stroke="url(#grad-asset)" stroke-width="1" stroke-opacity="0.2"/>
        <rect x="124" y="45" width="48" height="38" rx="4" fill="url(#grad-asset)" opacity="0.08" stroke="url(#grad-asset)" stroke-width="1" stroke-opacity="0.2"/>
        <rect x="70" y="90" width="48" height="38" rx="4" fill="url(#grad-asset)" opacity="0.08" stroke="url(#grad-asset)" stroke-width="1" stroke-opacity="0.2"/>
        <rect x="124" y="90" width="48" height="38" rx="4" fill="url(#grad-asset)" opacity="0.08" stroke="url(#grad-asset)" stroke-width="1" stroke-opacity="0.2"/>
        <!-- Image placeholders in grid -->
        <path d="M78 68 L85 58 L92 65 L98 55 L110 72 L78 72 Z" fill="url(#grad-asset)" opacity="0.15"/>
        <circle cx="86" cy="53" r="4" fill="url(#grad-asset)" opacity="0.12"/>
        <path d="M132 68 L140 58 L148 67 L155 56 L164 72 L132 72 Z" fill="url(#grad-asset)" opacity="0.15"/>
        <path d="M78 113 L87 103 L96 112 L104 101 L110 117 L78 117 Z" fill="url(#grad-asset)" opacity="0.15"/>
        <path d="M132 113 L142 104 L150 114 L160 103 L164 117 L132 117 Z" fill="url(#grad-asset)" opacity="0.15"/>
        <!-- Selected indicator on first card -->
        <circle cx="112" cy="50" r="6" fill="url(#grad-asset)" opacity="0.5"/>
        <path d="M109 50 L111 52 L115 48" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
        <!-- Pulse on selected -->
        <circle cx="112" cy="50" r="6" stroke="url(#grad-asset)" stroke-width="1" opacity="0.2">
          <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" repeatCount="indefinite"/>
        </circle>
        <defs><linearGradient id="grad-asset" x1="0" y1="0" x2="200" y2="160"><stop stop-color="#2c99ff"/><stop offset="1" stop-color="#00d4aa"/></linearGradient></defs>
      </svg>`,

    'scaleflex-uploader': `
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="File uploader illustration">
        <!-- Upload zone -->
        <rect x="20" y="20" width="160" height="120" rx="12" stroke="url(#grad-upload)" stroke-width="2" stroke-dasharray="6 4" opacity="0.3"/>
        <rect x="28" y="28" width="144" height="104" rx="8" fill="url(#grad-upload)" opacity="0.03"/>
        <!-- Cloud -->
        <path d="M120 65 A20 20 0 0 0 82 60 A15 15 0 0 0 70 75 A12 12 0 0 0 72 98 L128 98 A16 16 0 0 0 140 82 A18 18 0 0 0 120 65Z" fill="url(#grad-upload)" opacity="0.08" stroke="url(#grad-upload)" stroke-width="1.5" stroke-opacity="0.25"/>
        <!-- Upload arrow -->
        <line x1="100" y1="88" x2="100" y2="70" stroke="url(#grad-upload)" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
        <polyline points="91,77 100,68 109,77" stroke="url(#grad-upload)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
        <!-- Animated pulse on arrow -->
        <line x1="100" y1="88" x2="100" y2="70" stroke="url(#grad-upload)" stroke-width="2.5" stroke-linecap="round" opacity="0.15">
          <animate attributeName="y2" values="70;65;70" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.15;0.3;0.15" dur="2s" repeatCount="indefinite"/>
        </line>
        <!-- Progress bar -->
        <rect x="50" y="108" width="100" height="6" rx="3" fill="url(#grad-upload)" opacity="0.08"/>
        <rect x="50" y="108" width="65" height="6" rx="3" fill="url(#grad-upload)" opacity="0.3"/>
        <!-- File icons -->
        <rect x="38" y="44" width="18" height="22" rx="2" fill="url(#grad-upload)" opacity="0.08" stroke="url(#grad-upload)" stroke-width="1" stroke-opacity="0.2"/>
        <path d="M49 44 L56 51 L56 44 Z" fill="url(#grad-upload)" opacity="0.12"/>
        <rect x="144" y="44" width="18" height="22" rx="2" fill="url(#grad-upload)" opacity="0.08" stroke="url(#grad-upload)" stroke-width="1" stroke-opacity="0.2"/>
        <path d="M155 44 L162 51 L162 44 Z" fill="url(#grad-upload)" opacity="0.12"/>
        <!-- Checkmark on left file -->
        <circle cx="47" cy="55" r="4" fill="url(#grad-upload)" opacity="0.4"/>
        <path d="M45 55 L46.5 56.5 L49.5 53.5" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
        <defs><linearGradient id="grad-upload" x1="0" y1="0" x2="200" y2="160"><stop stop-color="#00d4aa"/><stop offset="1" stop-color="#2c99ff"/></linearGradient></defs>
      </svg>`,

    'scaleflex-experience-picker': `
      <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Experience picker illustration">
        <!-- Main frame -->
        <rect x="15" y="15" width="170" height="130" rx="8" stroke="url(#grad-exp)" stroke-width="2" opacity="0.3"/>
        <!-- Layout grid: different experience cards -->
        <!-- Card 1: Gallery layout -->
        <rect x="25" y="30" width="72" height="50" rx="6" fill="url(#grad-exp)" opacity="0.06" stroke="url(#grad-exp)" stroke-width="1" stroke-opacity="0.2"/>
        <rect x="30" y="35" width="28" height="20" rx="3" fill="url(#grad-exp)" opacity="0.1"/>
        <rect x="62" y="35" width="28" height="9" rx="2" fill="url(#grad-exp)" opacity="0.08"/>
        <rect x="62" y="47" width="28" height="8" rx="2" fill="url(#grad-exp)" opacity="0.08"/>
        <line x1="30" y1="62" x2="55" y2="62" stroke="url(#grad-exp)" stroke-width="1.5" opacity="0.15" stroke-linecap="round"/>
        <line x1="30" y1="68" x2="45" y2="68" stroke="url(#grad-exp)" stroke-width="1.5" opacity="0.1" stroke-linecap="round"/>
        <line x1="30" y1="74" x2="50" y2="74" stroke="url(#grad-exp)" stroke-width="1.5" opacity="0.1" stroke-linecap="round"/>
        <!-- Card 2: Slider layout -->
        <rect x="103" y="30" width="72" height="50" rx="6" fill="url(#grad-exp)" opacity="0.06" stroke="url(#grad-exp)" stroke-width="1" stroke-opacity="0.2"/>
        <rect x="108" y="35" width="62" height="30" rx="3" fill="url(#grad-exp)" opacity="0.1"/>
        <circle cx="120" cy="50" r="4" fill="url(#grad-exp)" opacity="0.2"/>
        <circle cx="132" cy="50" r="4" fill="url(#grad-exp)" opacity="0.2"/>
        <circle cx="144" cy="50" r="4" fill="url(#grad-exp)" opacity="0.2"/>
        <circle cx="156" cy="50" r="4" fill="url(#grad-exp)" opacity="0.2"/>
        <line x1="118" y1="72" x2="152" y2="72" stroke="url(#grad-exp)" stroke-width="1.5" opacity="0.15" stroke-linecap="round"/>
        <!-- Card 3: Interactive layout -->
        <rect x="25" y="88" width="72" height="50" rx="6" fill="url(#grad-exp)" opacity="0.06" stroke="url(#grad-exp)" stroke-width="1" stroke-opacity="0.2"/>
        <rect x="30" y="93" width="62" height="25" rx="3" fill="url(#grad-exp)" opacity="0.08"/>
        <circle cx="61" cy="105" r="8" fill="url(#grad-exp)" opacity="0.12" stroke="url(#grad-exp)" stroke-width="1" stroke-opacity="0.25"/>
        <polygon points="58,102 58,108 64,105" fill="url(#grad-exp)" opacity="0.25"/>
        <line x1="30" y1="124" x2="55" y2="124" stroke="url(#grad-exp)" stroke-width="1.5" opacity="0.15" stroke-linecap="round"/>
        <line x1="30" y1="130" x2="48" y2="130" stroke="url(#grad-exp)" stroke-width="1.5" opacity="0.1" stroke-linecap="round"/>
        <!-- Card 4: Mosaic layout (selected) -->
        <rect x="103" y="88" width="72" height="50" rx="6" fill="url(#grad-exp)" opacity="0.1" stroke="url(#grad-exp)" stroke-width="1.5" stroke-opacity="0.4"/>
        <rect x="108" y="93" width="28" height="18" rx="2" fill="url(#grad-exp)" opacity="0.12"/>
        <rect x="140" y="93" width="28" height="18" rx="2" fill="url(#grad-exp)" opacity="0.12"/>
        <rect x="108" y="114" width="18" height="18" rx="2" fill="url(#grad-exp)" opacity="0.12"/>
        <rect x="130" y="114" width="18" height="18" rx="2" fill="url(#grad-exp)" opacity="0.12"/>
        <rect x="152" y="114" width="16" height="18" rx="2" fill="url(#grad-exp)" opacity="0.12"/>
        <!-- Selected indicator -->
        <circle cx="168" cy="93" r="6" fill="url(#grad-exp)" opacity="0.5"/>
        <path d="M165 93 L167 95 L171 91" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
        <!-- Pulse on selected -->
        <circle cx="168" cy="93" r="6" stroke="url(#grad-exp)" stroke-width="1" opacity="0.2">
          <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" repeatCount="indefinite"/>
        </circle>
        <defs><linearGradient id="grad-exp" x1="0" y1="0" x2="200" y2="160"><stop stop-color="#6879EB"/><stop offset="1" stop-color="#2c99ff"/></linearGradient></defs>
      </svg>`,
  };

  return illustrations[pluginId] || '';
}

/* --------------------------------------------------------------------------
   Card Rendering
   -------------------------------------------------------------------------- */
function createPluginCard(plugin) {
  const card = document.createElement('article');
  card.className = 'plugin-card fade-in-up';
  card.style.setProperty('--plugin-accent', plugin.accentColor);

  const featuresHTML = plugin.features
    .map((f) => `<span class="plugin-card__feature">${f}</span>`)
    .join('');

  card.innerHTML = `
    <div class="plugin-card__preview">
      ${getPluginIllustration(plugin.id)}
    </div>
    <div class="plugin-card__body">
      <div class="plugin-card__header">
        <div class="plugin-card__icon">
          <svg><use href="#${plugin.icon}"></use></svg>
        </div>
        <div class="plugin-card__title-group">
          <h3 class="plugin-card__name">${plugin.name}</h3>
          <span class="plugin-card__version">${plugin.npmPackage}</span>
        </div>
      </div>
      <p class="plugin-card__tagline">${plugin.tagline}</p>
      <p class="plugin-card__desc">${plugin.description}</p>
      <div class="plugin-card__features">${featuresHTML}</div>
      <div class="plugin-card__links">
        ${plugin.links.demo ? `<a href="${plugin.links.demo}" target="_blank" rel="noopener noreferrer"
           class="plugin-card__link plugin-card__link--demo"
           aria-label="Live demo of ${plugin.name}">
          <svg><use href="#icon-external-link"></use></svg>
          Live Demo
        </a>` : ''}
        ${plugin.links.docs ? `<a href="${plugin.links.docs}" target="_blank" rel="noopener noreferrer"
           class="plugin-card__link plugin-card__link--demo"
           aria-label="Documentation for ${plugin.name}">
          <svg><use href="#icon-docs"></use></svg>
          Docs
        </a>` : ''}
        ${plugin.links.repo ? `<a href="${plugin.links.repo}" target="_blank" rel="noopener noreferrer"
           class="plugin-card__link plugin-card__link--outline"
           aria-label="GitHub repository for ${plugin.name}">
          <svg><use href="#icon-github"></use></svg>
          GitHub
        </a>` : ''}
      </div>
    </div>
  `;

  return card;
}

function renderPlugins() {
  const grid = document.getElementById('plugins-grid');
  if (!grid) return;

  PLUGINS.forEach((plugin) => {
    grid.appendChild(createPluginCard(plugin));
  });
}

/* --------------------------------------------------------------------------
   Navigation Scroll Effect
   -------------------------------------------------------------------------- */
function initNavScroll() {
  const nav = document.querySelector('.nav');
  const hero = document.querySelector('.hero');
  if (!nav || !hero) return;

  const sentinel = document.createElement('div');
  sentinel.setAttribute('aria-hidden', 'true');
  hero.prepend(sentinel);

  const observer = new IntersectionObserver(
    ([entry]) => {
      nav.classList.toggle('nav--scrolled', !entry.isIntersecting);
    },
    { threshold: 0 }
  );

  observer.observe(sentinel);
}

/* --------------------------------------------------------------------------
   Scroll Reveal Animations
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.fade-in-up').forEach((el) => {
      el.classList.add('fade-in-up--visible');
    });
    return;
  }

  // Group elements by their parent section for per-group stagger
  const sections = new Map();
  document.querySelectorAll('.fade-in-up').forEach((el) => {
    const parent = el.closest('section, footer') || document.body;
    if (!sections.has(parent)) sections.set(parent, []);
    sections.get(parent).push(el);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  sections.forEach((elements) => {
    elements.forEach((el, i) => {
      el.style.transitionDelay = `${i * 150}ms`;
      observer.observe(el);
    });
  });
}

/* --------------------------------------------------------------------------
   Hero Scroll Indicator Click
   -------------------------------------------------------------------------- */
function initHeroScrollClick() {
  const scrollIndicator = document.querySelector('.hero__scroll');
  const nextSection = document.querySelector('.hero + .section-divider + section') ||
                      document.querySelector('.hero + section');
  if (!scrollIndicator || !nextSection) return;

  scrollIndicator.addEventListener('click', () => {
    nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* --------------------------------------------------------------------------
   Smooth Scroll for Anchor Links
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* --------------------------------------------------------------------------
   Hero Mouse-Follow Gradient
   -------------------------------------------------------------------------- */
function initHeroMouseGradient() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const hero = document.querySelector('.hero');
  const overlay = document.querySelector('.hero__mouse-gradient');
  if (!hero || !overlay) return;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    overlay.style.background = `radial-gradient(circle 400px at ${x}% ${y}%, rgba(44, 153, 255, 0.08), transparent 70%)`;
    overlay.classList.add('hero__mouse-gradient--active');
  });

  hero.addEventListener('mouseleave', () => {
    overlay.classList.remove('hero__mouse-gradient--active');
  });
}

/* --------------------------------------------------------------------------
   Button Ripple Position Tracking
   -------------------------------------------------------------------------- */
function initButtonRipple() {
  document.querySelectorAll('.btn--primary').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      btn.style.setProperty('--ripple-x', `${x}%`);
      btn.style.setProperty('--ripple-y', `${y}%`);
    });
  });
}

/* --------------------------------------------------------------------------
   Init
   -------------------------------------------------------------------------- */
function init() {
  renderPlugins();
  initNavScroll();
  initHeroScrollClick();
  initSmoothScroll();
  initHeroMouseGradient();
  initButtonRipple();

  // Delay scroll animations slightly so cards are in the DOM
  requestAnimationFrame(() => {
    initScrollAnimations();
  });
}

document.addEventListener('DOMContentLoaded', init);
