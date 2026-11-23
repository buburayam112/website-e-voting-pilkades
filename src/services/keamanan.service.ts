// src/services/keamanan.service.ts
import { supabase, isSupabaseConfigured } from '../lib/supabase/client';
import type { KontenKeamananTransparansi } from '../types/database.types';

/**
 * Retrieves all published security & transparency items from 'konten_keamanan_transparansi'.
 * Enforced by Supabase RLS (is_published = true, anon select-only).
 * Falls back to empty array if Supabase is offline or unconfigured.
 */
export async function getPublishedKeamanan(): Promise<KontenKeamananTransparansi[]> {
  if (!isSupabaseConfigured || !supabase) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('konten_keamanan_transparansi')
      .select('id, slug, kategori, judul, ringkasan, isi, referensi, urutan, is_published')
      .eq('is_published', true)
      .order('urutan', { ascending: true });

    if (error) {
      console.warn('[Supabase Keamanan] Gagal mengambil data:', error.message);
      return [];
    }

    return (data as KontenKeamananTransparansi[]) ?? [];
  } catch (err) {
    console.warn('[Supabase Keamanan] Kendala koneksi:', err);
    return [];
  }
}
