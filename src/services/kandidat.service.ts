import { siteConfig } from '../config/site';
import { mockKandidatList } from '../data/mock/kandidat.mock';
import type { Kandidat } from '../types';

export class KandidatService {
  public static async getKandidatList(desaId?: string): Promise<Kandidat[]> {
    if (siteConfig.dataProvider === 'mock') {
      if (!desaId) return mockKandidatList;
      return mockKandidatList.filter((k) => k.desaId === desaId);
    }
    throw new Error('API Back-Office belum terhubung.');
  }
}

