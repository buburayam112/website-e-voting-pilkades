import type { TahapPemungutan } from '../../types';

export const stepsData: TahapPemungutan[] = [
  {
    nomor: 1,
    kode: 'TAHAP-01',
    judul: 'Kedatangan dan Verifikasi Identitas',
    gambarUrl: '/images/tahapan/revised/tahap-1.png',
    deskripsi: 'Petugas memeriksa surat undangan dan KTP elektronik Anda, lalu mencocokkan data dengan daftar pemilih tetap (DPT).',
    dasarHukum: 'Pasal 46 ayat (1) huruf b-f'
  },
  {
    nomor: 2,
    kode: 'TAHAP-02',
    judul: 'Menerima Kartu Akses (Smartcard)',
    gambarUrl: '/images/tahapan/revised/tahap-2.png',
    deskripsi: 'Setelah terverifikasi, Anda menerima Smartcard dari petugas. Bawa kartu ini ke bilik suara.',
    dasarHukum: 'Pasal 46 ayat (1) huruf g-j'
  },
  {
    nomor: 3,
    kode: 'TAHAP-03',
    judul: 'Memilih Calon di Bilik Suara',
    gambarUrl: '/images/tahapan/revised/tahap-3.png',
    deskripsi: 'Masukkan Smartcard ke alat pembaca kartu. Sentuh gambar calon pilihan Anda, lalu tekan YA untuk memastikan atau TIDAK untuk memilih ulang.',
    dasarHukum: 'Pasal 46 ayat (1) huruf k-q'
  },
  {
    nomor: 4,
    kode: 'TAHAP-04',
    judul: 'Menyerahkan Kartu dan Memasukkan Struk',
    gambarUrl: '/images/tahapan/revised/tahap-4.png',
    deskripsi: 'Bawa lembar struk keluar dari bilik. Serahkan Smartcard kepada petugas, lalu masukkan struk ke kotak suara/audit.',
    dasarHukum: 'Pasal 46 ayat (1) huruf r-s',
    catatanTeknis: 'Penghitungan normal dilakukan melalui perangkat e-Voting tanpa membuka kotak suara/audit. Jika perangkat rusak, struk dapat diperhitungkan sesuai ketentuan. (Pasal 46 ayat 5 dan Pasal 47 ayat 3)'
  },
  {
    nomor: 5,
    kode: 'TAHAP-05',
    judul: 'Mencelupkan Jari dan Keluar TPS',
    gambarUrl: '/images/tahapan/revised/tahap-5.png',
    deskripsi: 'Celupkan satu jari ke tinta sebagai tanda sudah memilih. Setelah itu, keluar melalui pintu yang disediakan.',
    dasarHukum: 'Pasal 46 ayat (1) huruf t-u'
  }
];
