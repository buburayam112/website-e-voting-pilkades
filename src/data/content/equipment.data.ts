import type { PerangkatEvoting } from '../../types';

export const equipmentData: PerangkatEvoting[] = [
  {
    id: 'laptop-verifikasi',
    nama: 'Laptop',
    alias: 'Laptop Verifikasi & Generator Sistem',
    kategori: 'Verifikasi',
    fungsi: 'Verifikasi identitas pemilih DPT elektronik dan otorisasi token smartcard.',
    spesifikasi: 'Unit laptop berlabel khusus segel Kominfo, terisolasi tanpa koneksi internet (air-gapped), memuat database DPT terkunci (read-only).',
    deskripsi: 'Digunakan oleh KPPS di Meja 1 untuk memvalidasi NIK warga terhadap DPT terverifikasi dan mengunci status kehadiran agar tidak terjadi pemilih ganda.',
    iconName: 'laptop',
    fotoUrl: '/images/perangkat/laptop.png',
    hasEmbeddedLabel: false // gambar tidak mengandung label nama
  },
  {
    id: 'card-reader',
    nama: 'Card Reader (1 pcs)',
    alias: 'Alat Pembaca dan Penulis Kartu Pintar',
    kategori: 'Verifikasi',
    fungsi: 'Menulis token otorisasi ke dalam kartu suara dan membaca status kartu di bilik suara.',
    spesifikasi: 'Smartcard Contactless/Contact reader bersertifikasi keamanan perangkat keras, antarmuka USB tertutup.',
    deskripsi: 'Menghubungkan kartu pintar dengan generator untuk mengaktifkan sesi hak pilih unik 1 pemilih sebelum dibawa ke bilik suara.',
    iconName: 'credit-card',
    fotoUrl: '/images/perangkat/card-reader-1-pcs.png',
    hasEmbeddedLabel: true // gambar sudah mengandung "Card Reader (1 pcs)"
  },
  {
    id: 'ktp-reader',
    nama: 'KTP Reader',
    alias: 'Pemindai e-KTP Optik dan NFC',
    kategori: 'Verifikasi',
    fungsi: 'Membaca chip e-KTP dan memverifikasi sidik jari/keaslian dokumen pemilih.',
    spesifikasi: 'Pemindai biometrik resmi standard Dukcapil dengan sensor sidik jari optik resolusi tinggi.',
    deskripsi: 'Memastikan warga yang hadir adalah pemilik sah e-KTP bersangkutan secara cepat, aman, dan tanpa manipulasi berkas fisik.',
    iconName: 'fingerprint',
    fotoUrl: '/images/perangkat/ktp-reader.png',
    hasEmbeddedLabel: true // gambar sudah mengandung "KTP Reader"
  },
  {
    id: 'kartu-suara',
    nama: 'Kartu Suara',
    alias: 'Kunci Digital Token Pemilih (Smartcard)',
    kategori: 'Pemungutan',
    fungsi: 'Kunci digital sekali pakai untuk membuka akses antarmuka pemilihan di bilik suara.',
    spesifikasi: 'Kartu pintar mikroprosesor ber-chip kriptografi tinggi. BUKAN penyimpan data pribadi pemilih.',
    deskripsi: 'Hanya berisi token enkripsi acak sementara. Setelah pilihan dikonfirmasi, token langsung hangus (inaktif) dan kartu wajib dikembalikan ke panitia.',
    iconName: 'key-round',
    fotoUrl: '/images/perangkat/kartu-suara.png',
    hasEmbeddedLabel: true // gambar sudah mengandung "Kartu Suara"
  },
  {
    id: 'layar-sentuh',
    nama: 'Layar Sentuh e-Voting',
    alias: 'Mesin Layar Sentuh Terpadu',
    kategori: 'Pemungutan',
    fungsi: 'Menampilkan surat suara digital dan memfasilitasi penentuan pilihan dengan 2 kali sentuh.',
    spesifikasi: 'Perangkat All-in-One Touchscreen responsif, sudut pandang terjaga dalam bilik suara, sistem operasi terkunci (kiosk mode).',
    deskripsi: 'Menampilkan foto dan nomor urut calon kepala desa. Dilengkapi layar konfirmasi "YA/TIDAK" sebelum pilihan dicetak demi mencegah kesalahan sentuh.',
    iconName: 'monitor',
    fotoUrl: '/images/perangkat/layar-sentuh-e-voting.png',
    hasEmbeddedLabel: true // gambar sudah mengandung nama + deskripsi lengkap
  },
  {
    id: 'printer-evoting',
    nama: 'Printer E-Voting (Pencetak Struk)',
    alias: 'Pencetak Lembar Struk Audit',
    kategori: 'Pencatatan',
    fungsi: 'Mencetak lembar struk fisik secara otomatis sesaat setelah pemilih mengonfirmasi pilihan pada layar monitor sesuai Pasal 46 Perbup Mempawah No. 14/2023.',
    spesifikasi: 'Printer termal industri berkecepatan tinggi, tanpa tinta basah, diletakkan menghadap ke depan di luar sekat bilik.',
    deskripsi: 'Menjamin transparansi publik karena proses keluarnya lembar struk dapat dilihat saksi/pengawas tanpa memperlihatkan pilihan pemilih.',
    iconName: 'printer',
    fotoUrl: '/images/perangkat/printer-e-voting.png',
    hasEmbeddedLabel: true // gambar sudah mengandung "Printer E-Voting" + deskripsi
  },
  {
    id: 'kertas-termal',
    nama: 'Kertas Termal Lembar Struk',
    alias: 'Kertas Lembar Struk Kotak Suara/Audit',
    kategori: 'Perlengkapan',
    fungsi: 'Media cetak lembar struk suara yang dimasukkan pemilih ke dalam kotak suara/audit.',
    spesifikasi: 'Kertas termal bersertifikasi tahan pudar, watermarked, memiliki kode verifikasi keabsahan.',
    deskripsi: 'Menjadi dokumen fisik bukti audit untuk penghitungan suara apabila terjadi kerusakan perangkat sesuai Pasal 46 ayat (5) Perbup Mempawah No. 14/2023.',
    iconName: 'file-text',
    fotoUrl: '/images/perangkat/kertas-termal.png',
    hasEmbeddedLabel: true // gambar sudah mengandung "Kertas Termal" + deskripsi
  }
];

