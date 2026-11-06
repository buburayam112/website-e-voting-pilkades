import type { StatistikOverview, PartisipasiWaktu, StatistikWilayah, RekapitulasiHasilSuara } from '../../types';

export const mockStatistikOverview: StatistikOverview = {
  totalDpt: 54935,
  totalSuaraMasuk: 42850,
  persentasePartisipasi: 78.0,
  totalTps: 128,
  tpsAktif: 128,
  lastUpdate: '6 November 2026, 13:00 WIB',
  isSimulasi: true
};

export const mockPartisipasiWaktu: PartisipasiWaktu[] = [
  { waktu: '07:00 - 08:00', persentase: 14.5, suaraMasuk: 7965 },
  { waktu: '08:00 - 09:00', persentase: 31.2, suaraMasuk: 17140 },
  { waktu: '09:00 - 10:00', persentase: 52.8, suaraMasuk: 29005 },
  { waktu: '10:00 - 11:00', persentase: 66.4, suaraMasuk: 36476 },
  { waktu: '11:00 - 12:00', persentase: 73.1, suaraMasuk: 40157 },
  { waktu: '12:00 - 13:00', persentase: 78.0, suaraMasuk: 42850 }
];

export const mockStatistikWilayah: StatistikWilayah[] = [
  { kecamatan: 'Mempawah Hilir', desa: 'Desa Pasir Panjang', totalDpt: 3420, suaraMasuk: 2702, partisipasiPersen: 79.0, tpsTotal: 8, tpsSelesai: 8, lastUpdate: '13:00 WIB' },
  { kecamatan: 'Mempawah Hilir', desa: 'Desa Penibung', totalDpt: 2680, suaraMasuk: 2064, partisipasiPersen: 77.0, tpsTotal: 6, tpsSelesai: 6, lastUpdate: '13:00 WIB' },
  { kecamatan: 'Mempawah Hilir', desa: 'Desa Sengkubang', totalDpt: 3105, suaraMasuk: 2453, partisipasiPersen: 79.0, tpsTotal: 7, tpsSelesai: 7, lastUpdate: '13:00 WIB' },
  { kecamatan: 'Mempawah Timur', desa: 'Desa Antibar', totalDpt: 4120, suaraMasuk: 3296, partisipasiPersen: 80.0, tpsTotal: 9, tpsSelesai: 9, lastUpdate: '13:00 WIB' },
  { kecamatan: 'Mempawah Timur', desa: 'Desa Pasir Palembang', totalDpt: 2540, suaraMasuk: 1956, partisipasiPersen: 77.0, tpsTotal: 6, tpsSelesai: 6, lastUpdate: '13:00 WIB' },
  { kecamatan: 'Sungai Kunyit', desa: 'Desa Sungai Kunyit Laut', totalDpt: 3580, suaraMasuk: 2756, partisipasiPersen: 77.0, tpsTotal: 8, tpsSelesai: 8, lastUpdate: '13:00 WIB' },
  { kecamatan: 'Sungai Pinyuh', desa: 'Desa Galang', totalDpt: 5120, suaraMasuk: 4045, partisipasiPersen: 79.0, tpsTotal: 11, tpsSelesai: 11, lastUpdate: '13:00 WIB' },
  { kecamatan: 'Sungai Pinyuh', desa: 'Desa Nusapati', totalDpt: 3240, suaraMasuk: 2495, partisipasiPersen: 77.0, tpsTotal: 7, tpsSelesai: 7, lastUpdate: '13:00 WIB' },
  { kecamatan: 'Anjongan', desa: 'Desa Anjungan Dalam', totalDpt: 2840, suaraMasuk: 2215, partisipasiPersen: 78.0, tpsTotal: 6, tpsSelesai: 6, lastUpdate: '13:00 WIB' },
  { kecamatan: 'Toho', desa: 'Desa Toho Hilir', totalDpt: 2590, suaraMasuk: 1994, partisipasiPersen: 77.0, tpsTotal: 6, tpsSelesai: 6, lastUpdate: '13:00 WIB' },
  { kecamatan: 'Segedong', desa: 'Desa Peniti Besar', totalDpt: 3810, suaraMasuk: 2972, partisipasiPersen: 78.0, tpsTotal: 8, tpsSelesai: 8, lastUpdate: '13:00 WIB' },
  { kecamatan: 'Jongkat', desa: 'Desa Wajok Hulu', totalDpt: 5890, suaraMasuk: 4594, partisipasiPersen: 78.0, tpsTotal: 12, tpsSelesai: 12, lastUpdate: '13:00 WIB' }
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

