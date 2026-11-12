-- =============================================================
-- SEED DATA — EVOTE MEMPAWAH
-- Idempotent: ON CONFLICT DO NOTHING
-- Sumber: equipment.data.ts, security.data.ts, site.ts
-- =============================================================

-- -------------------------
-- KONTAK (3 Instansi Tim Teknis)
-- -------------------------
INSERT INTO public.kontak (organisasi, telepon, email, alamat, jam_layanan, website, urutan, is_active)
VALUES
  (
    'Dinas Komunikasi dan Informatika Kabupaten Mempawah',
    '(0561) 691012',
    'diskominfo@mempawahkab.go.id',
    'Jl. Raden Kusno No. 1, Tengah, Kec. Mempawah Hilir, Kabupaten Mempawah, Kalimantan Barat 78912',
    'Senin - Jumat, 08:00 - 15:30 WIB',
    NULL,
    1,
    true
  ),
  (
    'Dinas Kependudukan dan Pencatatan Sipil Kabupaten Mempawah',
    NULL,
    NULL,
    'Jl. Raden Kusno No. 1, Tengah, Kec. Mempawah Hilir, Kabupaten Mempawah, Kalimantan Barat 78912',
    'Senin - Jumat, 08:00 - 15:30 WIB',
    NULL,
    2,
    true
  ),
  (
    'Dinas Pemberdayaan Masyarakat dan Pemerintahan Desa Kabupaten Mempawah',
    NULL,
    NULL,
    'Jl. Raden Kusno No. 1, Tengah, Kec. Mempawah Hilir, Kabupaten Mempawah, Kalimantan Barat 78912',
    'Senin - Jumat, 08:00 - 15:30 WIB',
    NULL,
    3,
    true
  )
ON CONFLICT (organisasi) DO NOTHING;

-- -------------------------
-- PERALATAN (7 Perangkat E-Voting)
-- -------------------------
INSERT INTO public.peralatan (slug, nama, fungsi, spesifikasi, foto_url, alt_foto, urutan, is_active)
VALUES
  (
    'laptop-verifikasi',
    'Laptop Verifikasi & Generator',
    'Verifikasi identitas pemilih DPT elektronik dan otorisasi token smartcard.',
    '{"alias": "Registrasi dan Generator Sistem", "kategori": "Verifikasi", "keterangan": "Unit laptop berlabel khusus segel Kominfo, terisolasi tanpa koneksi internet (air-gapped), memuat database DPT terkunci (read-only).", "deskripsi": "Digunakan oleh KPPS di Meja 1 untuk memvalidasi NIK warga terhadap DPT terverifikasi dan mengunci status kehadiran agar tidak terjadi pemilih ganda."}',
    NULL,
    'Ilustrasi Laptop Verifikasi E-Voting',
    1,
    true
  ),
  (
    'card-reader',
    'Smartcard Reader (Pcs)',
    'Menulis token otorisasi ke dalam kartu suara dan membaca status kartu di bilik suara.',
    '{"alias": "Alat Pembaca dan Penulis Kartu Pintar (1 Unit)", "kategori": "Verifikasi", "keterangan": "Smartcard Contactless/Contact reader bersertifikasi keamanan perangkat keras, antarmuka USB tertutup.", "deskripsi": "Menghubungkan kartu pintar dengan generator untuk mengaktifkan sesi hak pilih unik 1 pemilih sebelum dibawa ke bilik suara."}',
    NULL,
    'Ilustrasi Smartcard Reader E-Voting',
    2,
    true
  ),
  (
    'ktp-reader',
    'KTP Reader (Biometrik)',
    'Membaca chip e-KTP dan memverifikasi sidik jari/keaslian dokumen pemilih.',
    '{"alias": "Pemindai e-KTP Optik dan NFC", "kategori": "Verifikasi", "keterangan": "Pemindai biometrik resmi standard Dukcapil dengan sensor sidik jari optik resolusi tinggi.", "deskripsi": "Memastikan warga yang hadir adalah pemilik sah e-KTP bersangkutan secara cepat, aman, dan tanpa manipulasi berkas fisik."}',
    NULL,
    'Ilustrasi KTP Reader Biometrik E-Voting',
    3,
    true
  ),
  (
    'kartu-suara',
    'Kartu Suara (Smartcard)',
    'Kunci digital sekali pakai untuk membuka akses antarmuka pemilihan di bilik suara.',
    '{"alias": "Kunci Digital Token Pemilih", "kategori": "Pemungutan", "keterangan": "Kartu pintar mikroprosesor ber-chip kriptografi tinggi. BUKAN penyimpan data pribadi pemilih.", "deskripsi": "Hanya berisi token enkripsi acak sementara. Setelah pilihan dikonfirmasi, token langsung hangus (inaktif) dan kartu wajib dikembalikan ke panitia."}',
    NULL,
    'Ilustrasi Kartu Suara Smartcard E-Voting',
    4,
    true
  ),
  (
    'layar-sentuh',
    'Layar Sentuh e-Voting',
    'Menampilkan surat suara digital dan memfasilitasi penentuan pilihan dengan 2 kali sentuh.',
    '{"alias": "Mesin Layar Sentuh Terpadu", "kategori": "Pemungutan", "keterangan": "Perangkat All-in-One Touchscreen responsif, sudut pandang terjaga dalam bilik suara, sistem operasi terkunci (kiosk mode).", "deskripsi": "Menampilkan foto dan nomor urut calon kepala desa. Dilengkapi layar konfirmasi YA/TIDAK sebelum pilihan dicetak demi mencegah kesalahan sentuh."}',
    NULL,
    'Ilustrasi Layar Sentuh E-Voting',
    5,
    true
  ),
  (
    'printer-evoting',
    'Printer E-Voting (Audit Fisik)',
    'Mencetak struk audit fisik secara instan sesaat setelah pemilih menekan konfirmasi pilihan.',
    '{"alias": "Pencetak Termal Struk Audit Fisik", "kategori": "Pencatatan", "keterangan": "Printer termal industri berkecepatan tinggi, tanpa tinta basah, diletakkan menghadap ke depan di luar sekat bilik.", "deskripsi": "Menjamin transparansi publik karena keluarnya struk dapat dilihat saksi/pengawas tanpa memperlihatkan identitas pemilih atau nama calon yang dipilih."}',
    NULL,
    'Ilustrasi Printer Termal Audit E-Voting',
    6,
    true
  ),
  (
    'kertas-termal',
    'Kertas Termal Audit',
    'Media cetak struk suara resmi yang dimasukkan pemilih ke dalam Kotak Audit terkunci.',
    '{"alias": "Kertas Termal untuk Jejak Audit Fisik", "kategori": "Perlengkapan", "keterangan": "Kertas termal bersertifikasi tahan pudar hingga bertahun-tahun, watermarked, memiliki barcode/QR verifikasi keabsahan.", "deskripsi": "Menjadi dokumen fisik resmi pembuktian hukum (VVPAT - Voter Verified Paper Audit Trail) jika terjadi sengketa hasil pemilihan."}',
    NULL,
    'Ilustrasi Kertas Termal VVPAT E-Voting',
    7,
    true
  )
ON CONFLICT (slug) DO NOTHING;

-- -------------------------
-- KONTEN KEAMANAN (6 Item, is_published=true karena sesuai panduan resmi)
-- -------------------------
INSERT INTO public.konten_keamanan_transparansi (slug, kategori, judul, ringkasan, isi, referensi, urutan, is_published)
VALUES
  (
    'sirkuit-tertutup',
    'keamanan',
    'Sirkuit Tertutup (Air-Gapped & Offline)',
    'Seluruh mesin e-voting dan laptop verifikasi beroperasi di jaringan lokal mandiri tanpa terhubung ke internet publik.',
    'Perangkat di setiap TPS beroperasi secara terisolasi (air-gapped). Tidak ada transmisi suara melalui internet selama pemungutan suara berlangsung. Hal ini membuat sistem kebal terhadap ancaman serangan siber jarak jauh, intrusi jaringan luar, maupun sabotase daring.',
    'Perbup No. 28/2026 Bab IV Standar Pengamanan Perangkat',
    1,
    true
  ),
  (
    'anonimitas-token',
    'keamanan',
    'Anonimitas Kunci Digital (Smartcard)',
    'Smartcard hanyalah token otorisasi acak sekali pakai dan sama sekali TIDAK menyimpan identitas pribadi pemilih.',
    'Identitas pemilih diverifikasi di Meja 1 hanya untuk mencocokkan hak pilih pada DPT terkunci. Saat kartu suara diberikan, sistem menginjeksikan token acak yang tidak dapat dihubungkan kembali dengan NIK pemilih. Pilihan di bilik suara sepenuhnya anonim dan rahasia.',
    'Panduan Teknis E-Voting Bab II Pasal 5',
    2,
    true
  ),
  (
    'vvpat-audit',
    'audit',
    'Jejak Audit Fisik Mandiri (VVPAT)',
    'Setiap suara digital menghasilkan struk kertas fisik yang dimasukkan pemilih ke dalam Kotak Audit terkunci.',
    'Sistem e-voting Kabupaten Mempawah menganut prinsip dual-record (elektronik dan fisik). Struk kertas yang jatuh ke kotak audit tersegel menjadi bukti hukum utama (Voter Verified Paper Audit Trail). Jika muncul sanggahan hasil, penghitungan fisik struk kertas di kotak audit menjadi acuan pembuktian akhir yang sah menurut hukum.',
    'Perbup No. 28/2026 Bab V Penyelesaian Sengketa Hasil',
    3,
    true
  ),
  (
    'anti-pemilih-ganda',
    'keamanan',
    'Pencegahan Pemilih Ganda & Penguncian Real-time',
    'Verifikasi e-KTP berbasis biometrik langsung mengunci status pemilih begitu berkas divalidasi.',
    'Ketika e-KTP dipindai di Meja 1, status kehadiran pemilih langsung terkunci menjadi TELAH DIGUNAKAN. NIK bersangkutan tidak dapat dipakai kembali di TPS yang sama maupun TPS lain. Ditambah dengan celup tinta kuku saat keluar, pintu kecurangan pemilih ganda tertutup rapat.',
    'Panduan Pelaksanaan E-Voting Halaman 10 & 17',
    4,
    true
  ),
  (
    'cadangan-gangguan',
    'prosedur',
    'Prosedur Darurat & Pasokan Daya Genset',
    'Setiap TPS dilengkapi genset listrik mandiri serta unit cadangan tersegel dengan integritas memori baterai CMOS.',
    'Jika pasokan listrik padam, genset cadangan langsung aktif tanpa memutus daya mesin karena didukung UPS baterai. Apabila salah satu layar sentuh bermasalah, unit cadangan berlabel khusus Kominfo dapat diaktifkan melalui persetujuan Panitia dan Saksi yang dituangkan dalam Berita Acara resmi, dengan seluruh data suara yang sudah masuk tetap tersimpan aman di media penyimpanan terenkripsi internal.',
    'SOP Penanganan Kendala Perangkat Pilkades 2026',
    5,
    true
  ),
  (
    'tata-letak-pengawasan',
    'prosedur',
    'Pengawasan Terbuka & Garis Pandang Saksi',
    'Saksi dan Pengawas TPS memiliki garis pandang mutlak ke seluruh titik alur pemungutan suara.',
    'Desain tata letak TPS mewajibkan penempatan saksi dan panitia pengawas di posisi yang dapat mengawasi meja verifikasi, penyerahan kartu, printer struk audit, serta kotak audit tanpa menghalangi privasi pemilih di bilik suara. Printer diposisikan menghadap keluar sekat sehingga publik dapat melihat proses pencetakan struk secara nyata.',
    'Panduan Pelaksanaan E-Voting Halaman 9 & 18',
    6,
    true
  )
ON CONFLICT (slug) DO NOTHING;

