import type { Pemilih } from '../../types';

/**
 * Data Simulasi Pemilih untuk Pengujian Frontend Lokal
 * PERHATIAN:
 * - Data di bawah ini murni fiktif (DUMMY) untuk keperluan simulasi antarmuka.
 * - Bukan data pemilih riil dan tidak terhubung ke API produksi/kependudukan.
 * - Nama dan NIK disamarkan sesuai prinsip privasi.
 */
export const mockPemilihList: Pemilih[] = [
  {
    nikMasked: '610201******0001',
    namaMasked: 'Pemilih Simulasi 01 (Contoh Sistem)',
    jenisKelamin: 'L',
    usia: 34,
    desa: 'Desa Pasir Panjang',
    kecamatan: 'Mempawah Hilir',
    kabupaten: 'Kabupaten Mempawah',
    rt: '002',
    rw: '001',
    nomorTps: 1,
    namaTps: 'TPS 01 Pasir Panjang',
    lokasiTps: 'Gedung SDN 03 Mempawah Hilir, Jl. Raya Pasir Panjang No. 14',
    statusHakPilih: 'TERDAFTAR',
    isSimulasi: true
  },
  {
    nikMasked: '610201******0002',
    namaMasked: 'Pemilih Simulasi 02 (Contoh Sistem)',
    jenisKelamin: 'P',
    usia: 29,
    desa: 'Desa Pasir Panjang',
    kecamatan: 'Mempawah Hilir',
    kabupaten: 'Kabupaten Mempawah',
    rt: '005',
    rw: '002',
    nomorTps: 2,
    namaTps: 'TPS 02 Pasir Panjang',
    lokasiTps: 'Balai Pertemuan Warga Dusun Mawar, Gg. Swadaya',
    statusHakPilih: 'TERDAFTAR',
    isSimulasi: true
  },
  {
    nikMasked: '610202******0003',
    namaMasked: 'Pemilih Simulasi 03 (Contoh Sistem)',
    jenisKelamin: 'L',
    usia: 42,
    desa: 'Desa Antibar',
    kecamatan: 'Mempawah Timur',
    kabupaten: 'Kabupaten Mempawah',
    rt: '001',
    rw: '001',
    nomorTps: 1,
    namaTps: 'TPS 01 Antibar',
    lokasiTps: 'Halaman Kantor Desa Antibar, Jl. Daeng Menambon No. 08',
    statusHakPilih: 'TERDAFTAR',
    isSimulasi: true
  },
  {
    nikMasked: '610204******0004',
    namaMasked: 'Pemilih Simulasi 04 (Contoh Sistem)',
    jenisKelamin: 'P',
    usia: 25,
    desa: 'Desa Galang',
    kecamatan: 'Sungai Pinyuh',
    kabupaten: 'Kabupaten Mempawah',
    rt: '004',
    rw: '002',
    nomorTps: 3,
    namaTps: 'TPS 03 Galang',
    lokasiTps: 'Aula Madrasah Al-Ittihad, Jl. Pendidikan KM 2',
    statusHakPilih: 'TERDAFTAR',
    isSimulasi: true
  }
];

// Helper untuk simulasi pencarian lokal
export function cariPemilihSimulasi(nikInput: string): Pemilih | null {
  const clean = nikInput.trim();
  // Cocokkan digit awal atau akhir pada mock
  if (clean.length !== 16) return null;

  // Jika cocok dengan salah satu digit pola dummy
  if (clean.endsWith('0001')) return mockPemilihList[0];
  if (clean.endsWith('0002')) return mockPemilihList[1];
  if (clean.endsWith('0003')) return mockPemilihList[2];
  if (clean.endsWith('0004')) return mockPemilihList[3];

  // Generator simulasi acak aman untuk sembarang 16 digit dummy
  const lastDigit = parseInt(clean.slice(-1), 10) || 1;
  const tpsNo = (lastDigit % 5) + 1;
  return {
    nikMasked: `${clean.slice(0, 6)}******${clean.slice(-4)}`,
    namaMasked: 'Warga Terdaftar (Data Simulasi)',
    jenisKelamin: lastDigit % 2 === 0 ? 'P' : 'L',
    usia: 20 + (lastDigit * 4),
    desa: 'Desa Pasir Panjang',
    kecamatan: 'Mempawah Hilir',
    kabupaten: 'Kabupaten Mempawah',
    rt: `00${(lastDigit % 4) + 1}`,
    rw: '001',
    nomorTps: tpsNo,
    namaTps: `TPS 0${tpsNo} Pasir Panjang`,
    lokasiTps: 'Kantor / Balai Desa Pasir Panjang',
    statusHakPilih: 'TERDAFTAR',
    isSimulasi: true
  };
}

