// src/services/peralatan.service.ts
import { supabase, isSupabaseConfigured } from '../lib/supabase/client';
import type { Peralatan } from '../types/database.types';

/**
 * Retrieves all active equipment records from the 'peralatan' table.
 * Enforced by Supabase RLS (is_active = true, anon select-only).
 * Falls back to empty array if Supabase is offline or unconfigured.
 */
export async function getActivePeralatan(): Promise<Peralatan[]> {
  if (!isSupabaseConfigured || !supabase) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('peralatan')
      .select('id, slug, nama, fungsi, spesifikasi, foto_url, alt_foto, urutan, is_active')
      .eq('is_active', true)
      .order('urutan', { ascending: true });

    if (error) {
      console.warn('[Supabase Peralatan] Gagal mengambil data:', error.message);
      return [];
    }

    return (data as Peralatan[]) ?? [];
  } catch (err) {
    console.warn('[Supabase Peralatan] Kendala koneksi:', err);
    return [];
  }
}
