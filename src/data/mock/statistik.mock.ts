import type { StatistikOverview, PartisipasiWaktu, StatistikWilayah, RekapitulasiHasilSuara } from '../../types';

/**
 * Data Statistik Pilkades E-Voting Kabupaten Mempawah
 * KEBIJAKAN INTEGRITAS DATA:
 * - Tidak mengarang angka total DPT atau jumlah TPS yang belum ditetapkan secara sah.
 * - Tidak menggunakan angka hasil pemilihan fiktif sebelum pemungutan suara dilaksanakan.
 * - Status default disetel ke 'MENUNGGU_DATA_RESMI' dengan placeholder informatif.
 */
export const mockStatistikOverview: StatistikOverview = {
  totalDpt: undefined,
  totalSuaraMasuk: undefined,
  persentasePartisipasi: undefined,
  totalTps: undefined,
  tpsAktif: undefined,
  statusDpt: 'MENUNGGU_DATA_RESMI',
  statusPelaksanaan: 'MENUNGGU_PELAKSANAAN',
  lastUpdate: 'Tahap Verifikasi DPS (Menunggu Penetapan DPT Resmi)',
  isSimulasi: true
};

export const mockPartisipasiWaktu: PartisipasiWaktu[] = [
  { waktu: '07:00 - 08:00', persentase: 0, suaraMasuk: 0 },
  { waktu: '08:00 - 09:00', persentase: 0, suaraMasuk: 0 },
  { waktu: '09:00 - 10:00', persentase: 0, suaraMasuk: 0 },
  { waktu: '10:00 - 11:00', persentase: 0, suaraMasuk: 0 },
  { waktu: '11:00 - 12:00', persentase: 0, suaraMasuk: 0 },
  { waktu: '12:00 - 13:00', persentase: 0, suaraMasuk: 0 }
];

export const mockStatistikWilayah: StatistikWilayah[] = [
  { kecamatan: 'Mempawah Hilir', desa: 'Desa Pasir Panjang', totalDpt: undefined, suaraMasuk: undefined, partisipasiPersen: undefined, tpsTotal: undefined, tpsSelesai: undefined, statusData: 'MENUNGGU_DATA_RESMI', lastUpdate: 'Menunggu Data Resmi' },
  { kecamatan: 'Mempawah Hilir', desa: 'Desa Penibung', totalDpt: undefined, suaraMasuk: undefined, partisipasiPersen: undefined, tpsTotal: undefined, tpsSelesai: undefined, statusData: 'MENUNGGU_DATA_RESMI', lastUpdate: 'Menunggu Data Resmi' },
  { kecamatan: 'Mempawah Hilir', desa: 'Desa Sengkubang', totalDpt: undefined, suaraMasuk: undefined, partisipasiPersen: undefined, tpsTotal: undefined, tpsSelesai: undefined, statusData: 'MENUNGGU_DATA_RESMI', lastUpdate: 'Menunggu Data Resmi' },
  { kecamatan: 'Mempawah Timur', desa: 'Desa Antibar', totalDpt: undefined, suaraMasuk: undefined, partisipasiPersen: undefined, tpsTotal: undefined, tpsSelesai: undefined, statusData: 'MENUNGGU_DATA_RESMI', lastUpdate: 'Menunggu Data Resmi' },
  { kecamatan: 'Mempawah Timur', desa: 'Desa Pasir Palembang', totalDpt: undefined, suaraMasuk: undefined, partisipasiPersen: undefined, tpsTotal: undefined, tpsSelesai: undefined, statusData: 'MENUNGGU_DATA_RESMI', lastUpdate: 'Menunggu Data Resmi' },
  { kecamatan: 'Sungai Kunyit', desa: 'Desa Sungai Kunyit Laut', totalDpt: undefined, suaraMasuk: undefined, partisipasiPersen: undefined, tpsTotal: undefined, tpsSelesai: undefined, statusData: 'MENUNGGU_DATA_RESMI', lastUpdate: 'Menunggu Data Resmi' },
  { kecamatan: 'Sungai Pinyuh', desa: 'Desa Galang', totalDpt: undefined, suaraMasuk: undefined, partisipasiPersen: undefined, tpsTotal: undefined, tpsSelesai: undefined, statusData: 'MENUNGGU_DATA_RESMI', lastUpdate: 'Menunggu Data Resmi' },
  { kecamatan: 'Sungai Pinyuh', desa: 'Desa Nusapati', totalDpt: undefined, suaraMasuk: undefined, partisipasiPersen: undefined, tpsTotal: undefined, tpsSelesai: undefined, statusData: 'MENUNGGU_DATA_RESMI', lastUpdate: 'Menunggu Data Resmi' },
  { kecamatan: 'Anjongan', desa: 'Desa Anjungan Dalam', totalDpt: undefined, suaraMasuk: undefined, partisipasiPersen: undefined, tpsTotal: undefined, tpsSelesai: undefined, statusData: 'MENUNGGU_DATA_RESMI', lastUpdate: 'Menunggu Data Resmi' },
  { kecamatan: 'Toho', desa: 'Desa Toho Hilir', totalDpt: undefined, suaraMasuk: undefined, partisipasiPersen: undefined, tpsTotal: undefined, tpsSelesai: undefined, statusData: 'MENUNGGU_DATA_RESMI', lastUpdate: 'Menunggu Data Resmi' },
  { kecamatan: 'Segedong', desa: 'Desa Peniti Besar', totalDpt: undefined, suaraMasuk: undefined, partisipasiPersen: undefined, tpsTotal: undefined, tpsSelesai: undefined, statusData: 'MENUNGGU_DATA_RESMI', lastUpdate: 'Menunggu Data Resmi' },
  { kecamatan: 'Jongkat', desa: 'Desa Wajok Hulu', totalDpt: undefined, suaraMasuk: undefined, partisipasiPersen: undefined, tpsTotal: undefined, tpsSelesai: undefined, statusData: 'MENUNGGU_DATA_RESMI', lastUpdate: 'Menunggu Data Resmi' }
];

export const mockRekapitulasiHasilSuara: RekapitulasiHasilSuara = {
  desaId: 'ds-01',
  namaDesa: 'Desa Pasir Panjang',
  kecamatan: 'Mempawah Hilir',
  isResmi: false,
  statusPublikasi: 'MENUNGGU_DATA_RESMI',
  totalSuaraSah: undefined,
  totalSuaraTidakSah: undefined,
  perolehanKandidat: undefined
};

