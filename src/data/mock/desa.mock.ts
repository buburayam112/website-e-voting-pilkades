import type { Desa } from '../../types';

/**
 * Daftar Desa di Kabupaten Mempawah
 * Berdasarkan wilayah administratif resmi Kabupaten Mempawah.
 * Data DPT dan jumlah TPS definitif berstatus 'MENUNGGU_DATA_RESMI'
 * sampai Berita Acara Penetapan DPT diterbitkan oleh Diskominfo / PPKD.
 */
export const mockDesaList: Desa[] = [
  { id: 'ds-01', kode: '61.02.01.2001', nama: 'Desa Pasir Panjang', kecamatan: 'Mempawah Hilir', statusData: 'MENUNGGU_DATA_RESMI' },
  { id: 'ds-02', kode: '61.02.01.2002', nama: 'Desa Penibung', kecamatan: 'Mempawah Hilir', statusData: 'MENUNGGU_DATA_RESMI' },
  { id: 'ds-03', kode: '61.02.01.2003', nama: 'Desa Sengkubang', kecamatan: 'Mempawah Hilir', statusData: 'MENUNGGU_DATA_RESMI' },
  { id: 'ds-04', kode: '61.02.01.2004', nama: 'Desa Kuala Secapah', kecamatan: 'Mempawah Hilir', statusData: 'MENUNGGU_DATA_RESMI' },
  { id: 'ds-05', kode: '61.02.02.2001', nama: 'Desa Antibar', kecamatan: 'Mempawah Timur', statusData: 'MENUNGGU_DATA_RESMI' },
  { id: 'ds-06', kode: '61.02.02.2002', nama: 'Desa Pasir Palembang', kecamatan: 'Mempawah Timur', statusData: 'MENUNGGU_DATA_RESMI' },
  { id: 'ds-07', kode: '61.02.02.2003', nama: 'Desa Sejegi', kecamatan: 'Mempawah Timur', statusData: 'MENUNGGU_DATA_RESMI' },
  { id: 'ds-08', kode: '61.02.03.2001', nama: 'Desa Sungai Kunyit Laut', kecamatan: 'Sungai Kunyit', statusData: 'MENUNGGU_DATA_RESMI' },
  { id: 'ds-09', kode: '61.02.03.2002', nama: 'Desa Bukit Batu', kecamatan: 'Sungai Kunyit', statusData: 'MENUNGGU_DATA_RESMI' },
  { id: 'ds-10', kode: '61.02.04.2001', nama: 'Desa Galang', kecamatan: 'Sungai Pinyuh', statusData: 'MENUNGGU_DATA_RESMI' },
  { id: 'ds-11', kode: '61.02.04.2002', nama: 'Desa Nusapati', kecamatan: 'Sungai Pinyuh', statusData: 'MENUNGGU_DATA_RESMI' },
  { id: 'ds-12', kode: '61.02.04.2003', nama: 'Desa Peniraman', kecamatan: 'Sungai Pinyuh', statusData: 'MENUNGGU_DATA_RESMI' },
  { id: 'ds-13', kode: '61.02.05.2001', nama: 'Desa Anjungan Dalam', kecamatan: 'Anjongan', statusData: 'MENUNGGU_DATA_RESMI' },
  { id: 'ds-14', kode: '61.02.05.2002', nama: 'Desa Pak Bulu', kecamatan: 'Anjongan', statusData: 'MENUNGGU_DATA_RESMI' },
  { id: 'ds-15', kode: '61.02.06.2001', nama: 'Desa Toho Hilir', kecamatan: 'Toho', statusData: 'MENUNGGU_DATA_RESMI' },
  { id: 'ds-16', kode: '61.02.07.2001', nama: 'Desa Pentek', kecamatan: 'Sadaniang', statusData: 'MENUNGGU_DATA_RESMI' },
  { id: 'ds-17', kode: '61.02.08.2001', nama: 'Desa Peniti Besar', kecamatan: 'Segedong', statusData: 'MENUNGGU_DATA_RESMI' },
  { id: 'ds-18', kode: '61.02.09.2001', nama: 'Desa Peniti Luar', kecamatan: 'Jongkat', statusData: 'MENUNGGU_DATA_RESMI' },
  { id: 'ds-19', kode: '61.02.09.2002', nama: 'Desa Wajok Hulu', kecamatan: 'Jongkat', statusData: 'MENUNGGU_DATA_RESMI' }
];

