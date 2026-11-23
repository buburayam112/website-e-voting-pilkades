/**
 * gsap-animations.ts
 * GSAP + ScrollTrigger:
 *  - Word-split heading reveal saat scroll
 *  - Section entrance animations
 *  - Parallax subtle pada hero
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────
// TIPE HELPER
// ─────────────────────────────────────────────
interface LenisLike {
  on: (event: string, cb: (...args: unknown[]) => void) => void;
}

// ─────────────────────────────────────────────
// WORD SPLIT HELPER
// ─────────────────────────────────────────────
function splitIntoWordSpans(el: HTMLElement): HTMLElement[] {
  const original = el.textContent ?? '';
  const words = original.trim().split(/\s+/);
  el.innerHTML = words
    .map(
      (w) =>
        `<span class="gsap-word-wrap" style="display:inline-block;overflow:hidden;vertical-align:top;"><span class="gsap-word" style="display:inline-block;">${w}</span></span>`
    )
    .join(' ');
  return Array.from(el.querySelectorAll<HTMLElement>('.gsap-word'));
}

// ─────────────────────────────────────────────
// 1. HEADING WORD-REVEAL
// ─────────────────────────────────────────────
function setupHeadingWordReveal() {
  // Target: h1, h2, h3 yang ada data-gsap-title OR berada di dalam section
  const headings = document.querySelectorAll<HTMLElement>(
    '[data-gsap-title], section h1, section h2, section h3.text-2xl, section h3.text-3xl'
  );

  headings.forEach((heading) => {
    // Jangan split yang sudah diproses atau yang terlalu pendek
    const text = heading.textContent?.trim() ?? '';
    if (!text || text.length < 3) return;
    // Skip jika sudah ada child element kompleks (icon dll)
    if (heading.querySelector('svg, img, button, a')) return;

    const wordEls = splitIntoWordSpans(heading);
    if (wordEls.length === 0) return;

    gsap.from(wordEls, {
      y: 50,
      opacity: 0,
      stagger: 0.07,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: heading,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });
}

// ─────────────────────────────────────────────
// 2. SECTION BADGE / SUBTITLE SLIDE-UP
// ─────────────────────────────────────────────
function setupSectionBadges() {
  const badges = document.querySelectorAll<HTMLElement>(
    '.badge-simulation, .badge-official, [data-gsap-badge]'
  );

  badges.forEach((badge) => {
    gsap.from(badge, {
      y: 16,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: badge,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });
  });
}

// ─────────────────────────────────────────────
// 3. STAT COUNTER ANIMATE (angka)
// ─────────────────────────────────────────────
function setupCounters() {
  const counters = document.querySelectorAll<HTMLElement>('[data-gsap-counter]');
  counters.forEach((el) => {
    const target = parseFloat(el.dataset.gsapCounter ?? '0');
    const isInt = Number.isInteger(target);
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 1.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onUpdate() {
        el.textContent = isInt
          ? Math.round(obj.val).toLocaleString('id-ID')
          : obj.val.toFixed(1);
      },
    });
  });
}

// ─────────────────────────────────────────────
// 4. PARALLAX SUBTLE PADA HERO ILLUSTRATION
// ─────────────────────────────────────────────
function setupHeroParallax() {
  const heroImg = document.querySelector<HTMLElement>(
    '.animate-soft-float, [data-gsap-parallax]'
  );
  if (!heroImg) return;

  gsap.to(heroImg, {
    yPercent: -15,
    ease: 'none',
    scrollTrigger: {
      trigger: heroImg.closest('section') ?? heroImg,
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    },
  });
}

// ─────────────────────────────────────────────
// 5. LENIS INTEGRATION
// ─────────────────────────────────────────────
function integrateLenis() {
  // Integrasikan Lenis dengan ScrollTrigger jika tersedia
  const win = window as typeof window & { lenis?: LenisLike };
  if (win.lenis) {
    win.lenis.on('scroll', () => ScrollTrigger.update());
    gsap.ticker.lagSmoothing(0);
  }
}

// ─────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────
export function setupGsapAnimations(): void {
  if (typeof window === 'undefined') return;

  // Integrasikan Lenis (jalankan setelah lenis init)
  integrateLenis();

  setupHeadingWordReveal();
  setupSectionBadges();
  setupCounters();
  setupHeroParallax();

  // Refresh ScrollTrigger setelah semua image/font load
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
}
