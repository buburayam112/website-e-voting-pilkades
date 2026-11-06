import { siteConfig } from '../config/site';
import { cariPemilihSimulasi } from '../data/mock/pemilih.mock';
import type { Pemilih } from '../types';

export class PemilihService {
  /**
   * Cek status hak pilih simulasi lokal.
   * Catatan keamanan penting:
   * - NIK input tidak disimpan di storage apapun (no localStorage / no session / no cookies).
   * - NIK lengkap tidak pernah di-log ke console.
   * - Seluruh hasil diberi penanda simulasi.
   */
  public static async cekHakPilih(nik: string): Promise<{
    success: boolean;
    data?: Pemilih;
    message?: string;
  }> {
    if (siteConfig.dataProvider === 'mock') {
      const sanitized = nik.trim();

      if (!/^\d{16}$/.test(sanitized)) {
        return {
          success: false,
          message: 'Format NIK harus tepat 16 digit angka.'
        };
      }

      const hasil = cariPemilihSimulasi(sanitized);
      if (hasil) {
        return {
          success: true,
          data: hasil
        };
      }

      return {
        success: false,
        message: 'Data pemilih tidak ditemukan pada data simulasi. Pastikan 16 digit angka telah dimasukkan dengan benar.'
      };
    }

    throw new Error('API Back-Office belum terhubung.');
  }
}

