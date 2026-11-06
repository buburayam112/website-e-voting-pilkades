/**
 * Utility Formatting Functions
 */

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('id-ID').format(num);
}

export function formatPercent(num: number): string {
  return `${num.toFixed(1).replace('.', ',')}%`;
}

export function maskNik(nik: string): string {
  if (!nik || nik.length < 10) return '****************';
  const first6 = nik.slice(0, 6);
  const last4 = nik.slice(-4);
  return `${first6}******${last4}`;
}

export function maskName(name: string): string {
  if (!name) return '***';
  const parts = name.split(' ');
  return parts
    .map((p) => {
      if (p.length <= 2) return p;
      return p[0] + '*'.repeat(Math.max(1, p.length - 1));
    })
    .join(' ');
}

