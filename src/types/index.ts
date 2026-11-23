/**
 * TypeScript Type Definitions for EVOTE MEMPAWAH
 * Front-Office Portal Informasi E-Voting Pilkades Kabupaten Mempawah 2026
 */

export interface Desa {
  id: string;
  kode: string;
  nama: string;
  kecamatan: string;
  jumlahTps?: number;
  totalDpt?: number;
  statusData?: 'MENUNGGU_DATA_RESMI' | 'TERTETAPKAN';
}

export interface Tps {
  id: string;
  nomor: number;
  desaId: string;
  namaDesa: string;
  kecamatan: string;
  lokasi: string;
  alamatLengkap: string;
  latitude?: number;
  longitude?: number;
  jumlahDpt?: number;
  statusData?: 'MENUNGGU_DATA_RESMI' | 'TERTETAPKAN';
  ketuaKpps?: string;
  kontakPengaduan?: string;
}

export type StatusHakPilih = 'TERDAFTAR' | 'BELUM_TERDAFTAR' | 'TIDAK_MEMENUHI_SYARAT';

export interface Pemilih {
  nikMasked: string; // Misal: 610201******0001 (NIK asli TIDAK pernah disimpan/ditampilkan utuh)
  namaMasked: string; // Misal: A**** S******
  jenisKelamin: 'L' | 'P';
  usia: number;
  desa: string;
  kecamatan: string;
  kabupaten: string;
  rt: string;
  rw: string;
  nomorTps: number;
  namaTps: string;
  lokasiTps: string;
  statusHakPilih: StatusHakPilih;
  isSimulasi: true;
}

export interface Kandidat {
  id: string;
  desaId: string;
  namaDesa: string;
  kecamatan: string;
  nomorUrut: number;
  nama: string;
  gelar?: string;
  fotoUrl?: string;
  visi?: string;
  misi?: string[];
  statusData: 'RESMI' | 'MENUNGGU_DATA_RESMI';
}

export interface JadwalPilkades {
  tahun: number;
  tanggalPelaksanaan?: string; // ISO string jika tanggal resmi telah diumumkan, undefined jika belum
  isTanggalResmi: boolean;
  tahapan: {
    nama: string;
    tanggalMulai: string;
    tanggalSelesai: string;
    status: 'SELESAI' | 'BERLANGSUNG' | 'AKAN_DATANG';
    keterangan?: string;
  }[];
}

export interface StatistikWilayah {
  kecamatan: string;
  desa: string;
  totalDpt?: number;
  suaraMasuk?: number;
  partisipasiPersen?: number;
  tpsTotal?: number;
  tpsSelesai?: number;
  statusData: 'MENUNGGU_DATA_RESMI' | 'SIMULASI_FORMAT' | 'RESMI';
  lastUpdate: string;
}

export interface StatistikOverview {
  totalDpt?: number;
  totalSuaraMasuk?: number;
  persentasePartisipasi?: number;
  totalTps?: number;
  tpsAktif?: number;
  statusDpt: 'MENUNGGU_DATA_RESMI' | 'TERTETAPKAN';
  statusPelaksanaan: 'MENUNGGU_PELAKSANAAN' | 'BERLANGSUNG' | 'SELESAI';
  lastUpdate: string;
  isSimulasi: boolean;
}

export interface PartisipasiWaktu {
  waktu: string; // '07:00', '08:00', dst
  persentase: number;
  suaraMasuk: number;
}

export interface RekapitulasiHasilSuara {
  desaId: string;
  namaDesa: string;
  kecamatan: string;
  isResmi: boolean;
  statusPublikasi: 'MENUNGGU_DATA_RESMI' | 'DRAFT' | 'DIPUBLIKASIKAN';
  totalSuaraSah?: number;
  totalSuaraTidakSah?: number;
  perolehanKandidat?: {
    kandidatId: string;
    nomorUrut: number;
    nama: string;
    suara: number;
    persentase: number;
  }[];
}

export interface PerangkatEvoting {
  id: string;
  nama: string;
  alias?: string;
  kategori: 'Verifikasi' | 'Pemungutan' | 'Pencatatan' | 'Perlengkapan';
  fungsi: string;
  spesifikasi: string;
  deskripsi: string;
  iconName: string;
  /** Path ke gambar perangkat di /public, relatif dari root (misal: /images/perangkat/laptop.png) */
  fotoUrl?: string;
  /**
   * true  → gambar sudah mengandung judul & deskripsi tertanam; sembunyikan nama/alias di kartu
   * false → gambar hanya ilustrasi murni; tampilkan judul normal di kartu
   */
  hasEmbeddedLabel?: boolean;
}

export interface TahapPemungutan {
  nomor: number;
  kode: string;
  judul: string;
  subjudul?: string;
  deskripsi: string;
  poinKunci?: string[];
  catatanKeamanan?: string;
  gambarUrl?: string;
  dasarHukum?: string;
  catatanTeknis?: string;
  captionTeknis?: string;
}

export interface KeamananItem {
  id: string;
  kategori: string;
  judul: string;
  ringkasan: string;
  penjelasanLengkap: string;
  dasarAturan?: string;
}

export type KategoriBerita = 'Sosialisasi' | 'Teknis & Peralatan' | 'Regulasi' | 'Jadwal & Tahapan' | 'Pengumuman';

export type StatusBerita = 'published' | 'draft';

export interface Berita {
  id: string;
  slug: string;
  judul: string;
  kategori: KategoriBerita;
  ringkasan: string;
  konten: string;
  gambarUrl: string;
  penulis: string;
  tanggalPublikasi: string; // ISO date 'YYYY-MM-DD'
  status: StatusBerita;
  dibaca?: number;
  createdAt: string;
  updatedAt: string;
}

export type DataProviderType = 'mock' | 'api';

