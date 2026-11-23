/**
 * animations.ts
 * Lightweight, 60fps micro-interactions & animations for EVOTE MEMPAWAH
 */

export function setupAnimations(): void {
  if (typeof window === 'undefined') return;

  // 1. Reading Scroll Progress Bar
  const progressBar = document.getElementById('scroll-progress-bar');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  function updateScrollState(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }

    // Toggle Back to Top Button
    if (backToTopBtn) {
      if (scrollTop > 350) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'scale-90');
        backToTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'scale-90');
        backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
      }
    }
  }

  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();

  // Back to Top Click
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 2. Click Ripple Effect on Interactive Elements
  document.addEventListener('click', (e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest(
      'button, .btn-primary, .btn-secondary, .btn-accent, .cat-filter-btn, .pill-nik, .btn-read-news'
    ) as HTMLElement | null;

    if (!target) return;

    if (target.hasAttribute('disabled') || target.getAttribute('aria-disabled') === 'true') {
      return;
    }

    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.5;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'ripple-wave';

    const isLightBg =
      target.classList.contains('btn-secondary') ||
      target.classList.contains('bg-white') ||
      target.classList.contains('cat-filter-btn');
    if (isLightBg) {
      ripple.classList.add('ripple-dark');
    }

    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    target.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });

  // 3. Scroll-Reveal via Native IntersectionObserver
  if ('IntersectionObserver' in window) {
    const revealTargets = document.querySelectorAll(
      '.card-surface, .news-card, section > .container-custom > div:first-child, .timeline-item, .legal-card'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealTargets.forEach((el, index) => {
      el.classList.add('reveal-init');
      const delay = (index % 4) * 60;
      (el as HTMLElement).style.transitionDelay = `${delay}ms`;
      observer.observe(el);
    });
  }

  // 4. Scrollspy & Click-Active Navigation Highlight (Accurate Viewport Matching)
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('a[data-nav-link]');
  let isClickScrolling = false;
  let clickScrollTimer: number | null = null;

  function setActiveLink(targetHref: string): void {
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === targetHref) {
        link.classList.add('nav-link-active');
      } else {
        link.classList.remove('nav-link-active');
      }
    });
  }

  // Handle immediate click transition on all nav links
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        setActiveLink(href);
        isClickScrolling = true;
        if (clickScrollTimer) window.clearTimeout(clickScrollTimer);
        clickScrollTimer = window.setTimeout(() => {
          isClickScrolling = false;
          updateActiveNavOnScroll();
        }, 900);
      }
    });
  });

  // Target IDs in sequential order
  const sectionTargets = [
    '#beranda',
    '#tentang',
    '#dasar-hukum',
    '#perangkat',
    '#tahapan',
    '#keamanan',
    '#berita',
    '#calon',
    '#statistik',
    '#kontak'
  ];

  function updateActiveNavOnScroll(): void {
    if (isClickScrolling) return;

    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Near the very top: always activate #beranda
    if (scrollY < 100) {
      setActiveLink('#beranda');
      return;
    }

    // Near the bottom: always activate #kontak
    if (scrollY + winHeight >= docHeight - 80) {
      setActiveLink('#kontak');
      return;
    }

    // Probe point at 150px from top of viewport (right beneath the sticky header)
    const probeY = 150;
    let matchedId = '';

    for (const selector of sectionTargets) {
      const el = document.querySelector(selector) as HTMLElement | null;
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          matchedId = selector;
          break;
        }
      }
    }

    if (matchedId) {
      setActiveLink(matchedId);
    }
  }

  // Throttle scroll updates with requestAnimationFrame for smooth 60fps performance
  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveNavOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );

  // Initial check on page load (including URL with hash like #perangkat)
  if (window.location.hash && sectionTargets.includes(window.location.hash)) {
    setActiveLink(window.location.hash);
  } else {
    updateActiveNavOnScroll();
  }
}
