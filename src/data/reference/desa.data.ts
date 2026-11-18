import masterDesaJson from '../../../referensi/master-60-desa-mempawah-dengan-status-gelombang.json';
import type { StatistikWilayah, StatistikOverview, Desa } from '../../types';

export interface MasterDesaItem {
  kode_kemendagri: string;
  kode_tampilan: string;
  nama_desa: string;
  alias_pencarian: string[];
  nama_kecamatan: string;
  status_gelombang: 'gelombang_saat_ini' | 'belum_dijadwalkan' | string;
  gelombang: number | null;
  nama_gelombang: string | null;
  tanggal_pemungutan_suara: string | null;
  jumlah_tps: number | null;
}

export interface MasterDesaSources {
  sumber_kode_utama?: string;
  sumber_kode_pembanding?: string;
  rujukan_pemutakhiran_kemendagri?: string;
  sumber_jadwal?: string;
  [key: string]: string | undefined;
}

export interface MasterDesaPayload {
  kabupaten: string;
  provinsi: string;
  jumlah_desa: number;
  desa_gelombang_saat_ini: number;
  desa_belum_dijadwalkan: number;
  sources: MasterDesaSources;
  desa: MasterDesaItem[];
}

export interface StatistikWilayahMaster extends StatistikWilayah {
  kode: string;
  kodeKemendagri: string;
  aliasPencarian: string[];
  statusGelombang: 'gelombang_saat_ini' | 'belum_dijadwalkan' | string;
  gelombangNomor: number | null;
  namaGelombang: string | null;
  tanggalPemungutan: string | null;
}

// Master raw object
export const masterDesaData: MasterDesaPayload = masterDesaJson as MasterDesaPayload;
export const masterDesa = masterDesaData;

// Master list of 60 desa
export const daftarDesa: MasterDesaItem[] = masterDesaData.desa;

// Unique Kecamatan sorted
export const uniqueKecamatan: string[] = Array.from(
  new Set(masterDesaData.desa.map((d) => d.nama_kecamatan))
).sort((a, b) => a.localeCompare('id'));

// Helper: Filter desa by kecamatan
export function getDesaByKecamatan(kecamatan: string): MasterDesaItem[] {
  if (!kecamatan || kecamatan === 'Semua') return masterDesaData.desa;
  return masterDesaData.desa.filter(
    (d) => d.nama_kecamatan.toLowerCase() === kecamatan.toLowerCase()
  );
}

// Helper: Get desa in current wave
export function getDesaGelombangSaatIni(): MasterDesaItem[] {
  return masterDesaData.desa.filter((d) => d.status_gelombang === 'gelombang_saat_ini');
}

// Helper: Get desa not yet scheduled
export function getDesaBelumDijadwalkan(): MasterDesaItem[] {
  return masterDesaData.desa.filter((d) => d.status_gelombang === 'belum_dijadwalkan');
}

// Summary numbers
export function getRingkasanMaster() {
  const gelombangSaatIni = getDesaGelombangSaatIni();
  const totalTpsTerjadwal = gelombangSaatIni.reduce(
    (acc, curr) => acc + (curr.jumlah_tps || 0),
    0
  );

  return {
    kabupaten: masterDesaData.kabupaten,
    provinsi: masterDesaData.provinsi,
    jumlahDesa: masterDesaData.jumlah_desa,
    desaGelombangSaatIni: masterDesaData.desa_gelombang_saat_ini,
    desaBelumDijadwalkan: masterDesaData.desa_belum_dijadwalkan,
    totalTpsTerjadwal,
    jumlahKecamatan: uniqueKecamatan.length
  };
}

// Mapped StatistikWilayah list for StatisticsSection table
export const masterStatistikWilayah: StatistikWilayahMaster[] = masterDesaData.desa.map((item) => {
  const isTerjadwal = item.status_gelombang === 'gelombang_saat_ini';
  return {
    kecamatan: item.nama_kecamatan,
    desa: item.nama_desa,
    kode: item.kode_tampilan,
    kodeKemendagri: item.kode_kemendagri,
    aliasPencarian: item.alias_pencarian || [],
    statusGelombang: item.status_gelombang,
    gelombangNomor: item.gelombang,
    namaGelombang: item.nama_gelombang,
    tanggalPemungutan: item.tanggal_pemungutan_suara,
    totalDpt: undefined, // Menunggu penetapan DPT resmi PPKD
    suaraMasuk: undefined, // Menunggu pemungutan suara
    partisipasiPersen: undefined,
    tpsTotal: item.jumlah_tps ?? undefined,
    tpsSelesai: isTerjadwal ? 0 : undefined,
    statusData: 'MENUNGGU_DATA_RESMI',
    lastUpdate: isTerjadwal
      ? `Terjadwal ${item.nama_gelombang ?? ''} (${item.jumlah_tps ?? 0} TPS)`
      : 'Belum Dijadwalkan'
  };
});

// Overview statistic object for StatisticsSection cards
export const statistikOverview: StatistikOverview = {
  totalDpt: undefined,
  totalSuaraMasuk: undefined,
  persentasePartisipasi: undefined,
  totalTps: getRingkasanMaster().totalTpsTerjadwal,
  tpsAktif: 0,
  statusDpt: 'MENUNGGU_DATA_RESMI',
  statusPelaksanaan: 'MENUNGGU_PELAKSANAAN',
  lastUpdate: 'Tahap Verifikasi DPS (Menunggu Penetapan DPT Resmi)',
  isSimulasi: true
};

// Convert to standard Desa[] interface if needed
export const daftarDesaModel: Desa[] = masterDesaData.desa.map((d) => ({
  id: d.kode_kemendagri,
  kode: d.kode_tampilan,
  nama: d.nama_desa,
  kecamatan: d.nama_kecamatan,
  jumlahTps: d.jumlah_tps ?? undefined,
  statusData: 'MENUNGGU_DATA_RESMI'
}));

