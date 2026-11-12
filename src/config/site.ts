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

  // Dasar Hukum Resmi
  dasarHukum: {
    judul: 'Peraturan Bupati Mempawah Nomor 28 Tahun 2026',
    nomor: '28 Tahun 2026',
    tentang: 'Pedoman Pelaksanaan Pemilihan Kepala Desa Menggunakan Sistem Pemungutan Suara Secara Elektronik (E-Voting) di Kabupaten Mempawah',
    ringkasan: 'Mengatur landasan hukum, standar teknis, peran Tim Teknis (Diskominfo, Dukcapil, Pemdes), serta mekanisme audit fisik berkeabsahan hukum di seluruh TPS Kabupaten Mempawah.',
    linkDokumen: '#' // Placeholder dokumen resmi
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
    { label: 'Calon Kades', href: '#calon' },
    { label: 'Statistik', href: '#statistik' },
    { label: 'Kontak', href: '#kontak' }
  ]
};

