import type { Berita, KategoriBerita, StatusBerita } from '../types';
import { initialBeritaMock } from '../data/mock/berita.mock';

const STORAGE_KEY = 'evote_mempawah_berita_v1';

/**
 * Helper to check if code is running in a browser environment
 */
function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

/**
 * Service to manage News (Berita) for citizens and admin dashboard.
 * Supports persistent browser localStorage with automatic fallback to initial mock data.
 */
export class BeritaService {
  /**
   * Reads all articles from storage (or mock)
   */
  public static getAllRaw(): Berita[] {
    if (!isBrowser()) {
      return [...initialBeritaMock];
    }

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        // Initialize localStorage with initial data
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialBeritaMock));
        return [...initialBeritaMock];
      }
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed as Berita[];
      }
      return [...initialBeritaMock];
    } catch (e) {
      console.warn('[BeritaService] Failed to read localStorage, falling back to mock:', e);
      return [...initialBeritaMock];
    }
  }

  /**
   * Persists news list to browser storage
   */
  private static saveAll(list: Berita[]): void {
    if (!isBrowser()) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      // Dispatch a custom event so other components on the page can re-render reactively
      window.dispatchEvent(new CustomEvent('evote:berita-updated', { detail: { count: list.length } }));
    } catch (e) {
      console.error('[BeritaService] Failed to save to localStorage:', e);
    }
  }

  /**
   * Get filtered news list (by kategori, status, or search query)
   */
  public static getBeritaList(params?: {
    kategori?: string;
    status?: string;
    search?: string;
  }): Berita[] {
    let items = this.getAllRaw();

    if (!params) return items;

    // Filter by status (e.g. 'published' or 'draft' or 'all')
    if (params.status && params.status !== 'all') {
      items = items.filter((b) => b.status === params.status);
    }

    // Filter by kategori
    if (params.kategori && params.kategori !== 'all' && params.kategori !== 'Semua') {
      items = items.filter((b) => b.kategori === params.kategori);
    }

    // Filter by search keyword
    if (params.search && params.search.trim() !== '') {
      const q = params.search.trim().toLowerCase();
      items = items.filter(
        (b) =>
          b.judul.toLowerCase().includes(q) ||
          b.ringkasan.toLowerCase().includes(q) ||
          b.konten.toLowerCase().includes(q) ||
          b.kategori.toLowerCase().includes(q) ||
          b.penulis.toLowerCase().includes(q)
      );
    }

    // Sort descending by tanggalPublikasi
    items.sort((a, b) => new Date(b.tanggalPublikasi).getTime() - new Date(a.tanggalPublikasi).getTime());

    return items;
  }

  /**
   * Get single article by ID
   */
  public static getBeritaById(id: string): Berita | undefined {
    const list = this.getAllRaw();
    return list.find((b) => b.id === id);
  }

  /**
   * Get single article by Slug
   */
  public static getBeritaBySlug(slug: string): Berita | undefined {
    const list = this.getAllRaw();
    return list.find((b) => b.slug === slug);
  }

  /**
   * Generate slug from title
   */
  public static generateSlug(judul: string): string {
    return judul
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  /**
   * Create a new news article (Admin action)
   */
  public static createBerita(payload: {
    judul: string;
    slug?: string;
    kategori: KategoriBerita;
    ringkasan: string;
    konten: string;
    gambarUrl?: string;
    penulis?: string;
    tanggalPublikasi?: string;
    status?: StatusBerita;
  }): Berita {
    const list = this.getAllRaw();
    const now = new Date().toISOString();
    const dateToday = now.split('T')[0];

    const slug = payload.slug && payload.slug.trim() !== ''
      ? this.generateSlug(payload.slug)
      : this.generateSlug(payload.judul);

    const newBerita: Berita = {
      id: `berita-${Date.now()}`,
      slug: slug || `berita-${Date.now()}`,
      judul: payload.judul.trim(),
      kategori: payload.kategori,
      ringkasan: payload.ringkasan.trim(),
      konten: payload.konten.trim(),
      gambarUrl: payload.gambarUrl?.trim() || '/images/tahapan/revised/tahap-3.png',
      penulis: payload.penulis?.trim() || 'Tim Humas Diskominfo Kab. Mempawah',
      tanggalPublikasi: payload.tanggalPublikasi || dateToday,
      status: payload.status || 'published',
      dibaca: 1,
      createdAt: now,
      updatedAt: now
    };

    list.unshift(newBerita);
    this.saveAll(list);
    return newBerita;
  }

  /**
   * Update an existing article (Admin action)
   */
  public static updateBerita(id: string, payload: Partial<Berita>): Berita | null {
    const list = this.getAllRaw();
    const index = list.findIndex((b) => b.id === id);
    if (index === -1) return null;

    const existing = list[index];
    const updated: Berita = {
      ...existing,
      ...payload,
      updatedAt: new Date().toISOString()
    };

    if (payload.judul && !payload.slug) {
      updated.slug = this.generateSlug(payload.judul);
    }

    list[index] = updated;
    this.saveAll(list);
    return updated;
  }

  /**
   * Delete an article by ID (Admin action)
   */
  public static deleteBerita(id: string): boolean {
    const list = this.getAllRaw();
    const filtered = list.filter((b) => b.id !== id);
    if (filtered.length === list.length) {
      return false;
    }
    this.saveAll(filtered);
    return true;
  }

  /**
   * Reset data to default mock (Admin utility)
   */
  public static resetDefaultBerita(): Berita[] {
    this.saveAll([...initialBeritaMock]);
    return [...initialBeritaMock];
  }
}
