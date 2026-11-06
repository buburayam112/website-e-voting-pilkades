import { siteConfig } from '../config/site';
import {
  mockStatistikOverview,
  mockPartisipasiWaktu,
  mockStatistikWilayah,
  mockRekapitulasiHasilSuara
} from '../data/mock/statistik.mock';
import type {
  StatistikOverview,
  PartisipasiWaktu,
  StatistikWilayah,
  RekapitulasiHasilSuara
} from '../types';

export class StatistikService {
  public static async getOverview(): Promise<StatistikOverview> {
    if (siteConfig.dataProvider === 'mock') {
      return Promise.resolve(mockStatistikOverview);
    }
    throw new Error('API Back-Office belum terhubung.');
  }

  public static async getPartisipasiWaktu(): Promise<PartisipasiWaktu[]> {
    if (siteConfig.dataProvider === 'mock') {
      return Promise.resolve(mockPartisipasiWaktu);
    }
    throw new Error('API Back-Office belum terhubung.');
  }

  public static async getStatistikWilayah(kecamatan?: string, desa?: string): Promise<StatistikWilayah[]> {
    if (siteConfig.dataProvider === 'mock') {
      let list = mockStatistikWilayah;
      if (kecamatan && kecamatan !== 'Semua') {
        list = list.filter((w) => w.kecamatan.toLowerCase() === kecamatan.toLowerCase());
      }
      if (desa && desa !== 'Semua') {
        list = list.filter((w) => w.desa.toLowerCase() === desa.toLowerCase());
      }
      return Promise.resolve(list);
    }
    throw new Error('API Back-Office belum terhubung.');
  }

  public static async getRekapitulasiHasil(desaId?: string): Promise<RekapitulasiHasilSuara> {
    if (siteConfig.dataProvider === 'mock') {
      return Promise.resolve(mockRekapitulasiHasilSuara);
    }
    throw new Error('API Back-Office belum terhubung.');
  }
}

