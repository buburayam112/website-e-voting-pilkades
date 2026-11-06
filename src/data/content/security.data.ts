import type { KeamananItem } from '../../types';

export const securityItems: KeamananItem[] = [
  {
    id: 'sirkuit-tertutup',
    kategori: 'Infrastruktur Jaringan',
    judul: 'Sirkuit Tertutup (Air-Gapped & Offline)',
    ringkasan: 'Seluruh mesin e-voting dan laptop verifikasi beroperasi di jaringan lokal mandiri tanpa terhubung ke internet publik.',
    penjelasanLengkap: 'Perangkat di setiap TPS beroperasi secara terisolasi (air-gapped). Tidak ada transmisi suara melalui internet selama pemungutan suara berlangsung. Hal ini membuat sistem kebal terhadap ancaman serangan siber jarak jauh, intrusi jaringan luar, maupun sabotase daring.',
    dasarAturan: 'Perbup No. 28/2026 Bab IV Standar Pengamanan Perangkat'
  },
  {
    id: 'anonimitas-token',
    kategori: 'Privasi Pemilih',
    judul: 'Anonimitas Kunci Digital (Smartcard)',
    ringkasan: 'Smartcard hanyalah token otorisasi acak sekali pakai dan sama sekali TIDAK menyimpan identitas pribadi pemilih.',
    penjelasanLengkap: 'Identitas pemilih diverifikasi di Meja 1 hanya untuk mencocokkan hak pilih pada DPT terkunci. Saat kartu suara diberikan, sistem menginjeksikan token acak yang tidak dapat dihubungkan kembali dengan NIK pemilih. Pilihan di bilik suara sepenuhnya anonim dan rahasia.',
    dasarAturan: 'Panduan Teknis E-Voting Bab II Pasal 5'
  },
  {
    id: 'vvpat-audit',
    kategori: 'Auditabilitas Hukum',
    judul: 'Jejak Audit Fisik Mandiri (VVPAT)',
    ringkasan: 'Setiap suara digital menghasilkan struk kertas fisik yang dimasukkan pemilih ke dalam Kotak Audit terkunci.',
    penjelasanLengkap: 'Sistem e-voting Kabupaten Mempawah menganut prinsip dual-record (elektronik dan fisik). Struk kertas yang jatuh ke kotak audit tersegel menjadi bukti hukum utama (Voter Verified Paper Audit Trail). Jika muncul sanggahan hasil, penghitungan fisik struk kertas di kotak audit menjadi acuan pembuktian akhir yang sah menurut hukum.',
    dasarAturan: 'Perbup No. 28/2026 Bab V Penyelesaian Sengketa Hasil'
  },
  {
    id: 'anti-pemilih-ganda',
    kategori: 'Integritas Pemilih',
    judul: 'Pencegahan Pemilih Ganda & Penguncian Real-time',
    ringkasan: 'Verifikasi e-KTP berbasis biometrik langsung mengunci status pemilih begitu berkas divalidasi.',
    penjelasanLengkap: 'Ketika e-KTP dipindai di Meja 1, status kehadiran pemilih langsung terkunci menjadi "TELAH DIGUNAKAN". NIK bersangkutan tidak dapat dipakai kembali di TPS yang sama maupun TPS lain. Ditambah dengan celup tinta kuku saat keluar, pintu kecurangan pemilih ganda tertutup rapat.',
    dasarAturan: 'Panduan Pelaksanaan E-Voting Halaman 10 & 17'
  },
  {
    id: 'cadangan-gangguan',
    kategori: 'Mitigasi Bencana & Teknis',
    judul: 'Prosedur Darurat & Pasokan Daya Genset',
    ringkasan: 'Setiap TPS dilengkapi genset listrik mandiri serta unit cadangan tersegel dengan integritas memori baterai CMOS.',
    penjelasanLengkap: 'Jika pasokan listrik padam, genset cadangan langsung aktif tanpa memutus daya mesin karena didukung UPS baterai. Apabila salah satu layar sentuh bermasalah, unit cadangan berlabel khusus Kominfo dapat diaktifkan melalui persetujuan Panitia dan Saksi yang dituangkan dalam Berita Acara resmi, dengan seluruh data suara yang sudah masuk tetap tersimpan aman di media penyimpanan terenkripsi internal.',
    dasarAturan: 'SOP Penanganan Kendala Perangkat Pilkades 2026'
  },
  {
    id: 'tata-letak-pengawasan',
    kategori: 'Transparansi Prosedur',
    judul: 'Pengawasan Terbuka & Garis Pandang Saksi',
    ringkasan: 'Saksi dan Pengawas TPS memiliki garis pandang mutlak ke seluruh titik alur pemungutan suara.',
    penjelasanLengkap: 'Desain tata letak TPS mewajibkan penempatan saksi dan panitia pengawas di posisi yang dapat mengawasi meja verifikasi, penyerahan kartu, printer struk audit, serta kotak audit tanpa menghalangi privasi pemilih di bilik suara. Printer diposisikan menghadap keluar sekat sehingga publik dapat melihat proses pencetakan struk secara nyata.',
    dasarAturan: 'Panduan Pelaksanaan E-Voting Halaman 9 & 18'
  }
];

