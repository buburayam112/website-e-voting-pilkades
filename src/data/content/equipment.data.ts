import type { PerangkatEvoting } from '../../types';

export const equipmentData: PerangkatEvoting[] = [
  {
    id: 'laptop-verifikasi',
    nama: 'Laptop Verifikasi & Generator',
    alias: 'Registration & System Generator',
    kategori: 'Verifikasi',
    fungsi: 'Verifikasi identitas pemilih DPT elektronik dan otorisasi token smartcard.',
    spesifikasi: 'Unit laptop berlabel khusus segel Kominfo, terisolasi tanpa koneksi internet (air-gapped), memuat database DPT terkunci (read-only).',
    deskripsi: 'Digunakan oleh KPPS di Meja 1 untuk memvalidasi NIK warga terhadap DPT terverifikasi dan mengunci status kehadiran agar tidak terjadi pemilih ganda.',
    iconName: 'laptop'
  },
  {
    id: 'card-reader',
    nama: 'Smartcard Reader (Pcs)',
    alias: 'Card Writer/Reader 1 pcs',
    kategori: 'Verifikasi',
    fungsi: 'Menulis token otorisasi ke dalam kartu suara dan membaca status kartu di bilik suara.',
    spesifikasi: 'Smartcard Contactless/Contact reader bersertifikasi keamanan perangkat keras, antarmuka USB tertutup.',
    deskripsi: 'Menghubungkan kartu pintar dengan generator untuk mengaktifkan sesi hak pilih unik 1 pemilih sebelum dibawa ke bilik suara.',
    iconName: 'credit-card'
  },
  {
    id: 'ktp-reader',
    nama: 'KTP Reader (Biometrik)',
    alias: 'Optical & NFC e-KTP Scanner',
    kategori: 'Verifikasi',
    fungsi: 'Membaca chip e-KTP dan memverifikasi sidik jari/keaslian dokumen pemilih.',
    spesifikasi: 'Pemindai biometrik resmi standard Dukcapil dengan sensor sidik jari optik resolusi tinggi.',
    deskripsi: 'Memastikan warga yang hadir adalah pemilik sah e-KTP bersangkutan secara cepat, aman, dan tanpa manipulasi berkas fisik.',
    iconName: 'fingerprint'
  },
  {
    id: 'kartu-suara',
    nama: 'Kartu Suara (Smartcard)',
    alias: 'V-Token Digital Key',
    kategori: 'Pemungutan',
    fungsi: 'Kunci digital sekali pakai untuk membuka akses antarmuka pemilihan di bilik suara.',
    spesifikasi: 'Kartu pintar mikroprosesor ber-chip kriptografi tinggi. BUKAN penyimpan data pribadi pemilih.',
    deskripsi: 'Hanya berisi token enkripsi acak sementara. Setelah pilihan dikonfirmasi, token langsung hangus (inaktif) dan kartu wajib dikembalikan ke panitia.',
    iconName: 'key-round'
  },
  {
    id: 'layar-sentuh',
    nama: 'Layar Sentuh e-Voting',
    alias: 'All-in-One Touchscreen Machine',
    kategori: 'Pemungutan',
    fungsi: 'Menampilkan surat suara digital dan memfasilitasi penentuan pilihan dengan 2 kali sentuh.',
    spesifikasi: 'Perangkat All-in-One Touchscreen responsif, sudut pandang terjaga dalam bilik suara, sistem operasi terkunci (kiosk mode).',
    deskripsi: 'Menampilkan foto dan nomor urut calon kepala desa. Dilengkapi layar konfirmasi "YA/TIDAK" sebelum pilihan dicetak demi mencegah kesalahan sentuh.',
    iconName: 'monitor'
  },
  {
    id: 'printer-evoting',
    nama: 'Printer E-Voting (Audit Fisik)',
    alias: 'Direct Thermal Audit Printer',
    kategori: 'Pencatatan',
    fungsi: 'Mencetak struk audit fisik secara instan sesaat setelah pemilih menekan konfirmasi pilihan.',
    spesifikasi: 'Printer termal industri berkecepatan tinggi, tanpa tinta basah, diletakkan menghadap ke depan di luar sekat bilik.',
    deskripsi: 'Menjamin transparansi publik karena keluarnya struk dapat dilihat saksi/pengawas tanpa memperlihatkan identitas pemilih atau nama calon yang dipilih.',
    iconName: 'printer'
  },
  {
    id: 'kertas-termal',
    nama: 'Kertas Termal Audit',
    alias: 'Certified Thermal Paper Trail',
    kategori: 'Perlengkapan',
    fungsi: 'Media cetak struk suara resmi yang dimasukkan pemilih ke dalam Kotak Audit terkunci.',
    spesifikasi: 'Kertas termal bersertifikasi tahan pudar hingga bertahun-tahun, watermarked, memiliki barcode/QR verifikasi keabsahan.',
    deskripsi: 'Menjadi dokumen fisik resmi pembuktian hukum (VVPAT - Voter Verified Paper Audit Trail) jika terjadi sengketa hasil pemilihan.',
    iconName: 'file-text'
  }
];

