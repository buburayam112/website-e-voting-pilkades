/**
 * motion-animations.ts
 * Motion (web animations library) untuk:
 *  - Card entrance saat masuk viewport
 *  - Hover animations halus pada card
 *  - Button press feedback
 */
import { animate, stagger, inView, hover } from 'motion';

// ─────────────────────────────────────────────
// 1. CARD ENTRANCE (InView + stagger)
// ─────────────────────────────────────────────
function setupCardEntrance() {
  const cardGroups = document.querySelectorAll<HTMLElement>(
    '.card-surface, .news-card, .legal-card, .timeline-item, [data-motion-card]'
  );

  if (cardGroups.length === 0) return;

  // Sembunyikan awal
  cardGroups.forEach((card) => {
    (card as HTMLElement).style.opacity = '0';
    (card as HTMLElement).style.transform = 'translateY(28px)';
  });

  // Group berdasarkan parent untuk stagger yang natural
  const groups = new Map<Element, HTMLElement[]>();
  cardGroups.forEach((card) => {
    const parent = card.parentElement ?? document.body;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent)!.push(card as HTMLElement);
  });

  groups.forEach((cards) => {
    // Trigger ketika group parent masuk viewport
    const triggerEl = cards[0].parentElement ?? cards[0];
    inView(
      triggerEl,
      () => {
        animate(
          cards,
          { opacity: [0, 1], y: [28, 0] },
          {
            delay: stagger(0.08),
            duration: 0.55,
            easing: [0.16, 1, 0.3, 1],
          }
        );
        // Return undefined agar tidak looping
        return undefined;
      },
      { margin: '0px 0px -60px 0px', amount: 0.1 }
    );
  });
}

// ─────────────────────────────────────────────
// 2. CARD HOVER LIFT (Motion hover)
// ─────────────────────────────────────────────
function setupCardHover() {
  const cards = document.querySelectorAll<HTMLElement>(
    '.card-surface, .news-card, [data-motion-hover]'
  );

  cards.forEach((card) => {
    hover(card, () => {
      animate(
        card,
        {
          y: -6,
          scale: 1.015,
          boxShadow: '0 12px 32px rgba(27, 81, 163, 0.14)',
        },
        { duration: 0.25, easing: [0.16, 1, 0.3, 1] }
      );

      return () => {
        // Saat mouse keluar
        animate(
          card,
          {
            y: 0,
            scale: 1,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
          },
          { duration: 0.3, easing: [0.16, 1, 0.3, 1] }
        );
      };
    });
  });
}

// ─────────────────────────────────────────────
// 3. NAV BUTTON PRESS MICRO-FEEDBACK
// ─────────────────────────────────────────────
function setupButtonPress() {
  const buttons = document.querySelectorAll<HTMLElement>(
    '.btn-primary, .btn-secondary, .btn-accent, [data-motion-btn]'
  );

  buttons.forEach((btn) => {
    btn.addEventListener('pointerdown', () => {
      animate(btn, { scale: 0.95 }, { duration: 0.1, easing: 'ease-out' });
    });
    btn.addEventListener('pointerup', () => {
      animate(btn, { scale: 1 }, { duration: 0.2, easing: [0.16, 1, 0.3, 1] });
    });
    btn.addEventListener('pointerleave', () => {
      animate(btn, { scale: 1 }, { duration: 0.2, easing: [0.16, 1, 0.3, 1] });
    });
  });
}

// ─────────────────────────────────────────────
// 4. NAVBAR ENTRANCE DARI ATAS
// ─────────────────────────────────────────────
function setupNavbarEntrance() {
  const navbar = document.querySelector<HTMLElement>('header, nav[role="navigation"]');
  if (!navbar) return;

  animate(
    navbar,
    { y: [-12, 0], opacity: [0, 1] },
    { duration: 0.5, easing: [0.16, 1, 0.3, 1] }
  );
}

// ─────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────
export function setupMotionAnimations(): void {
  if (typeof window === 'undefined') return;

  setupNavbarEntrance();
  setupCardEntrance();
  setupCardHover();
  setupButtonPress();
}
