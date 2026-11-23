import type { Tps } from '../../types';

/**
 * Data TPS Uji Coba Simulasi Frontend
 * KEPATUHAN INTEGRITAS DATA:
 * - Tidak memuat kontak pribadi, nomor HP sembarang, atau nama warga asli sebagai ketua KPPS.
 * - Jumlah DPT berstatus 'MENUNGGU_DATA_RESMI' sampai Berita Acara Penetapan DPT disahkan.
 */
export const mockTpsList: Tps[] = [
  {
    id: 'tps-01-01',
    nomor: 1,
    desaId: 'ds-01',
    namaDesa: 'Desa Pasir Panjang',
    kecamatan: 'Mempawah Hilir',
    lokasi: 'Gedung SDN 03 Mempawah Hilir',
    alamatLengkap: 'Jl. Raya Pasir Panjang No. 14, Dusun Melati, RT 002/RW 001',
    latitude: 0.3645,
    longitude: 108.9612,
    statusData: 'MENUNGGU_DATA_RESMI',
    ketuaKpps: '(Menunggu Penetapan KPPS)',
    kontakPengaduan: 'Posko Informasi PPKD Desa Pasir Panjang'
  },
  {
    id: 'tps-01-02',
    nomor: 2,
    desaId: 'ds-01',
    namaDesa: 'Desa Pasir Panjang',
    kecamatan: 'Mempawah Hilir',
    lokasi: 'Balai Pertemuan Warga Dusun Mawar',
    alamatLengkap: 'Gg. Swadaya RT 005/RW 002, Pasir Panjang',
    latitude: 0.3688,
    longitude: 108.9634,
    statusData: 'MENUNGGU_DATA_RESMI',
    ketuaKpps: '(Menunggu Penetapan KPPS)',
    kontakPengaduan: 'Posko Informasi PPKD Desa Pasir Panjang'
  },
  {
    id: 'tps-05-01',
    nomor: 1,
    desaId: 'ds-05',
    namaDesa: 'Desa Antibar',
    kecamatan: 'Mempawah Timur',
    lokasi: 'Halaman Kantor Desa Antibar',
    alamatLengkap: 'Jl. Daeng Menambon No. 08, RT 001/RW 001',
    latitude: 0.3752,
    longitude: 108.9745,
    statusData: 'MENUNGGU_DATA_RESMI',
    ketuaKpps: '(Menunggu Penetapan KPPS)',
    kontakPengaduan: 'Posko Informasi PPKD Desa Antibar'
  },
  {
    id: 'tps-10-01',
    nomor: 3,
    desaId: 'ds-10',
    namaDesa: 'Desa Galang',
    kecamatan: 'Sungai Pinyuh',
    lokasi: 'Aula Madrasah Al-Ittihad',
    alamatLengkap: 'Jl. Pendidikan KM 2, Galang, RT 004/RW 002',
    latitude: 0.2811,
    longitude: 109.0815,
    statusData: 'MENUNGGU_DATA_RESMI',
    ketuaKpps: '(Menunggu Penetapan KPPS)',
    kontakPengaduan: 'Posko Informasi PPKD Desa Galang'
  }
];

