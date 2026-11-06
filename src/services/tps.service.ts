import { siteConfig } from '../config/site';
import { mockTpsList } from '../data/mock/tps.mock';
import type { Tps } from '../types';

export class TpsService {
  public static async getTpsList(): Promise<Tps[]> {
    if (siteConfig.dataProvider === 'mock') {
      return Promise.resolve(mockTpsList);
    }
    throw new Error('API Back-Office belum terhubung.');
  }

  public static async getTpsByDesa(desaId: string): Promise<Tps[]> {
    const list = await this.getTpsList();
    return list.filter((t) => t.desaId === desaId);
  }

  public static async getTpsByNomor(desaId: string, nomor: number): Promise<Tps | undefined> {
    const list = await this.getTpsByDesa(desaId);
    return list.find((t) => t.nomor === nomor);
  }
}

