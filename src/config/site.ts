import type { DataProviderType, JadwalPilkades } from '../types';

export const siteConfig = {
  name: 'E-Voting Kabupaten Mempawah',
  fullName: 'Portal Informasi E-Voting Pilkades Kabupaten Mempawah 2026',
  tagline: 'Pemilihan Kepala Desa Berbasis Elektronik yang Cepat, Aman, dan Transparan',
  domain: 'https://evote.mempawahkab.go.id',
  backOfficeDomain: 'https://pilkades.mempawahkab.go.id',
  
  // Data Provider Config (API-ready architecture)
  dataProvider: 'mock' as DataProviderType,
  apiBaseUrl: '', // Belum tersedia dari internal Diskominfo

  // Dasar Hukum Resmi (Peninjauan Rujukan JDIHN)
  dasarHukum: {
    judul: 'Perbup Mempawah No. 14 Tahun 2023 & Landasan Yuridis E-Voting',
    nomor: 'Perbup Mempawah No. 14/2023 & Putusan MK No. 147/PUU-VII/2009',
    tentang: 'Petunjuk Teknis Pelaksanaan Pemilihan Kepala Desa secara E-Voting di Kabupaten Mempawah',
    ringkasan: 'Rujukan teknis utama berpedoman pada Perbup Mempawah No. 14 Tahun 2023 (Pasal 2 ayat (1) pelaksanaan dengan e-Voting, Pasal 42 ayat (4) pemberian suara dengan alat elektronik, Pasal 46 mekanisme pemberian suara elektronik, Pasal 46 ayat (5) penanganan kerusakan peralatan, serta Pasal 47 penghitungan suara). Didukung Putusan MK No. 147/PUU-VII/2009 atas pengujian Pasal 88 UU No. 32/2004 dengan syarat kumulatif asas Luber Jurdil dan kesiapan daerah.',
    linkDokumen: '#' // Rujukan JDIH Kabupaten Mempawah
  },

  // Konfigurasi Jadwal Pelaksanaan Pilkades
  // Aturan prompt: Jika tanggal resmi belum ditetapkan, jangan membuat tanggal perkiraan/countdown palsu.
  jadwal: {
    tahun: 2026,
    tanggalPelaksanaan: undefined, // Belum ditetapkan secara resmi
    isTanggalResmi: false,
    pesanJadwal: 'Jadwal pelaksanaan pemungutan suara resmi akan diumumkan oleh Pemerintah Kabupaten Mempawah.',
    tahapan: [
      {
        nama: 'Penyusunan DP4 Dukcapil',
        tanggalMulai: 'Januari 2026',
        tanggalSelesai: 'Februari 2026',
        status: 'SELESAI',
        keterangan: 'Penyerahan data kependudukan awal dari Dukcapil ke sistem Pilkades'
      },
      {
        nama: 'Pemutakhiran & Verifikasi DPS oleh PPKD',
        tanggalMulai: 'Maret 2026',
        tanggalSelesai: 'April 2026',
        status: 'SELESAI',
        keterangan: 'Pencocokan data lapangan dan penentuan TPS oleh PPKD desa'
      },
      {
        nama: 'Penetapan DPT Terkunci (Read-Only)',
        tanggalMulai: 'Mei 2026',
        tanggalSelesai: 'Juni 2026',
        status: 'BERLANGSUNG',
        keterangan: 'Validasi final Dukcapil dan penguncian basis data DPT permanen'
      },
      {
        nama: 'Sosialisasi & Simulasi E-Voting',
        tanggalMulai: 'Juli 2026',
        tanggalSelesai: 'Agustus 2026',
        status: 'AKAN_DATANG',
        keterangan: 'Edukasi penggunaan layar sentuh dan smartcard di setiap desa'
      },
      {
        nama: 'Hari Pemungutan Suara E-Voting',
        tanggalMulai: 'Menunggu Penetapan',
        tanggalSelesai: 'Menunggu Penetapan',
        status: 'AKAN_DATANG',
        keterangan: 'Pelaksanaan serentak di TPS terpilih se-Kabupaten Mempawah'
      }
    ]
  } as JadwalPilkades,

  // Instansi & Kontak Resmi
  kontak: {
    instansi: 'Pemerintah Kabupaten Mempawah',
    timTeknis: 'Dinas Komunikasi dan Informatika (Diskominfo) Kab. Mempawah',
    dukcapil: 'Dinas Kependudukan dan Pencatatan Sipil Kab. Mempawah',
    pemdes: 'Dinas Pemberdayaan Masyarakat dan Pemerintahan Desa Kab. Mempawah',
    alamat: 'Jl. Raden Kusno No. 1, Tengah, Kec. Mempawah Hilir, Kabupaten Mempawah, Kalimantan Barat 78912',
    email: 'diskominfo@mempawahkab.go.id',
    telepon: '(0561) 691012 (Sekretariat Daerah)',
    callCenterPilkades: 'Posko Bantuan PPKD / Diskominfo (Akan Diumumkan Panitia)',
    jamLayanan: 'Senin - Jumat, 08:00 - 15:30 WIB'
  },

  // Navigasi Section
  navItems: [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang E-Voting', href: '#tentang' },
    { label: 'Dasar Hukum', href: '#dasar-hukum' },
    { label: 'Perangkat', href: '#perangkat' },
    { label: 'Tahapan', href: '#tahapan' },
    { label: 'Cek Hak Pilih', href: '#cek-hak-pilih' },
    { label: 'Keamanan', href: '#keamanan' },
    { label: 'Berita', href: '#berita' },
    { label: 'Calon Kades', href: '#calon' },
    { label: 'Statistik', href: '#statistik' },
    { label: 'Kontak', href: '#kontak' }
  ]
};

