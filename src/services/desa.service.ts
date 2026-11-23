import { siteConfig } from '../config/site';
import { mockDesaList } from '../data/mock/desa.mock';
import type { Desa } from '../types';

export class DesaService {
  public static async getDesaList(): Promise<Desa[]> {
    if (siteConfig.dataProvider === 'mock') {
      return Promise.resolve(mockDesaList);
    }
    // Siap untuk integrasi API Back-Office di masa mendatang
    throw new Error('API Back-Office belum terhubung.');
  }

  public static async getDesaByKecamatan(kecamatan: string): Promise<Desa[]> {
    const all = await this.getDesaList();
    if (!kecamatan || kecamatan === 'Semua Kecamatan') {
      return all;
    }
    return all.filter((d) => d.kecamatan.toLowerCase() === kecamatan.toLowerCase());
  }

  public static async getKecamatanList(): Promise<string[]> {
    const all = await this.getDesaList();
    const unique = Array.from(new Set(all.map((d) => d.kecamatan)));
    return unique.sort();
  }
}

