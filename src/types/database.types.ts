// src/types/database.types.ts

export interface Kontak {
  id: number;
  organisasi: string;
  telepon?: string | null;
  email?: string | null;
  alamat?: string | null;
  jam_layanan?: string | null;
  website?: string | null;
  urutan?: number | null;
  is_active?: boolean | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface PeralatanSpesifikasi {
  alias?: string;
  kategori?: string;
  keterangan?: string;
  deskripsi?: string;
  [key: string]: unknown;
}

export interface Peralatan {
  id: number;
  slug: string;
  nama: string;
  fungsi: string;
  spesifikasi?: PeralatanSpesifikasi | Record<string, unknown> | null;
  foto_url?: string | null;
  alt_foto?: string | null;
  urutan?: number | null;
  is_active?: boolean | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface KontenKeamananTransparansi {
  id: number;
  slug: string;
  kategori: 'keamanan' | 'audit' | 'prosedur';
  judul: string;
  ringkasan?: string | null;
  isi: string;
  referensi?: string | null;
  urutan?: number | null;
  is_published?: boolean | null;
  created_at?: string | null;
  updated_at?: string | null;
}
