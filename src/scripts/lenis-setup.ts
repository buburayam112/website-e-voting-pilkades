/**
 * lenis-setup.ts
 * Smooth scroll dengan Lenis — terintegrasi dengan GSAP ScrollTrigger
 */
import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function setupLenis(): Lenis {
  // Hanya inisialisasi sekali
  if (lenisInstance) return lenisInstance;

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
  });

  lenisInstance = lenis;

  // RAF loop
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Expose ke global agar GSAP bisa akses
  (window as typeof window & { lenis: Lenis }).lenis = lenis;

  return lenis;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}
