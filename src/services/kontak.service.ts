// src/services/kontak.service.ts
import { supabase, isSupabaseConfigured } from '../lib/supabase/client';
import type { Kontak } from '../types/database.types';

/**
 * Retrieves all active contacts from the 'kontak' table.
 * Enforced by Supabase RLS (is_active = true, anon select-only).
 * Falls back to empty array if Supabase is offline or unconfigured.
 */
export async function getActiveKontak(): Promise<Kontak[]> {
  if (!isSupabaseConfigured || !supabase) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('kontak')
      .select('id, organisasi, telepon, email, alamat, jam_layanan, website, urutan, is_active')
      .eq('is_active', true)
      .order('urutan', { ascending: true });

    if (error) {
      console.warn('[Supabase Kontak] Gagal mengambil data:', error.message);
      return [];
    }

    return (data as Kontak[]) ?? [];
  } catch (err) {
    console.warn('[Supabase Kontak] Kendala koneksi:', err);
    return [];
  }
}
