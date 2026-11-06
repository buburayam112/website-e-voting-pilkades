import type { TahapPemungutan } from '../../types';

export const stepsData: TahapPemungutan[] = [
  {
    nomor: 1,
    kode: 'TAHAP-01',
    judul: 'Kedatangan & Verifikasi Identitas',
    subjudul: 'Pencocokan Identitas Resmi di Meja Pendaftaran KPPS',
    deskripsi: 'Warga hadir di TPS dengan membawa e-KTP atau Identitas Kependudukan Digital (IKD). Petugas KPPS memindai e-KTP menggunakan pemindai biometrik/DPT elektronik pada laptop verifikasi.',
    poinKunci: [
      'Penyerahan e-KTP / IKD asli kepada petugas di Meja 1',
      'Pencocokan otomatis dengan basis data DPT Terkunci',
      'Penguncian status pemilih digital untuk mencegah upaya memilih ganda',
      'Jika e-KTP hilang/rusak, pemilih dapat menggunakan Kartu Keluarga (KK) sah yang terdaftar'
    ],
    catatanKeamanan: 'Sistem langsung menandai status hadir sehingga NIK yang sama tidak dapat diverifikasi ulang di TPS manapun.'
  },
  {
    nomor: 2,
    kode: 'TAHAP-02',
    judul: 'Pengambilan Kunci Digital (Smartcard)',
    subjudul: 'Penerimaan Token Otorisasi Sekali Pakai',
    deskripsi: 'Setelah verifikasi dinyatakan sah, pemilih mengantre dan menerima 1 unit Smartcard E-Voting yang telah diinjeksi token otorisasi acak dari perangkat card reader KPPS.',
    poinKunci: [
      'Smartcard BUKAN penyimpan data pribadi atau NIK warga',
      'Berfungsi murni sebagai kunci digital pembuka bilik suara',
      'Hanya berlaku untuk 1 kali sesi pemilihan',
      'Petugas tidak mengarahkan pilihan apapun kepada pemilih'
    ],
    catatanKeamanan: 'Token digital bersifat acak dan anonim, memutus tautan antara identitas warga dengan pilihan politik di bilik.'
  },
  {
    nomor: 3,
    kode: 'TAHAP-03',
    judul: 'Penentuan Pilihan di Bilik Suara',
    subjudul: 'Cukup 2 Kali Sentuh pada Layar Sentuh E-Voting',
    deskripsi: 'Pemilih memasuki bilik suara tertutup, memasukkan Smartcard ke card reader layar sentuh, memilih calon kepala desa yang diinginkan, dan mengonfirmasi pilihan.',
    poinKunci: [
      'Langkah 1: Masukkan Smartcard ke reader hingga muncul surat suara di layar',
      'Langkah 2: Sentuh foto/nomor calon kepala desa yang dikehendaki',
      'Langkah 3: Muncul layar konfirmasi (Sentuh "YA" untuk setuju, atau "TIDAK" untuk mengoreksi)',
      'Jika calon tunggal, layar menampilkan opsi Calon Tunggal berhadapan dengan Kotak Kosong'
    ],
    catatanKeamanan: 'Layar konfirmasi bertindak sebagai jaring pengaman agar pemilih tidak salah tekan sebelum struk resmi tercetak.'
  },
  {
    nomor: 4,
    kode: 'TAHAP-04',
    judul: 'Pengamanan Jejak Audit Fisik',
    subjudul: 'Pencetakan Struk Kertas & Pengembalian Smartcard',
    deskripsi: 'Sesaat setelah tombol YA disentuh, printer di samping bilik langsung mencetak selembar struk kertas audit (VVPAT). Pemilih mengambil struk, melipatnya, dan memasukkannya ke dalam Kotak Audit terkunci.',
    poinKunci: [
      'Printer menghadap ke depan di luar sekat: transparansi keluarnya struk dapat disaksikan publik tanpa melanggar kerahasiaan',
      'Pemilih melipat dan memasukkan struk ke Kotak Audit transparan terkunci',
      'Pemilih mengembalikan Smartcard kepada petugas untuk di-reset dan dinonaktifkan',
      'Struk kertas di Kotak Audit merupakan bukti hukum mutlak jika terdapat perselisihan hasil'
    ],
    catatanKeamanan: 'Bukti fisik kertas dan data elektronik saling mencocokkan secara independen pada saat rekapitulasi.'
  },
  {
    nomor: 5,
    kode: 'TAHAP-05',
    judul: 'Penanda Akhir & Penyelesaian',
    subjudul: 'Pencelupan Tinta Khusus & Jalur Keluar Satu Arah',
    deskripsi: 'Sebelum meninggalkan TPS, pemilih mencelupkan salah satu jari tangan ke dalam botol tinta khusus pemilu yang telah disediakan di meja pintu keluar sebagai tanda sah telah menggunakan hak pilih.',
    poinKunci: [
      'Pencelupan salah satu jari hingga mengenai kuku ke dalam tinta khusus',
      'Tinta berdaya lekat tinggi tidak mudah hilang dalam 24 jam',
      'Pemilih diarahkan keluar melalui Pintu Keluar khusus satu arah',
      'Tata alur melarang keras pemilih kembali ke area antrean atau bilik suara'
    ],
    catatanKeamanan: 'Kombinasi tanda fisik tinta dan penguncian sistem digital menjamin integritas 100% tanpa celah pemilih ganda.'
  },
  {
    nomor: 6,
    kode: 'TAHAP-06',
    judul: 'Area Pengawasan Mutlak',
    subjudul: 'Saksi Calon & Pengawas TPS Memantau Secara Menyeluruh',
    deskripsi: 'Saksi resmi dari masing-masing Calon Kepala Desa dan Pengawas TPS ditempatkan di area khusus dengan sudut pandang (line of sight) langsung ke seluruh proses operasional TPS.',
    poinKunci: [
      'Garis pandang tak terhalang ke meja verifikasi pendaftaran KPPS',
      'Pemantauan meja smartcard dan pergerakan pemilih menuju bilik suara',
      'Pengawasan langsung pada printer struk audit dan kotak audit terkunci',
      'Area bilik tetap terlindungi privasinya sehingga isi pilihan pemilih tidak terlihat siapapun'
    ],
    catatanKeamanan: 'Menjamin prinsip Luber Jurdil (Langsung, Umum, Bebas, Rahasia, Jujur, dan Adil) terlaksana secara nyata.'
  }
];

