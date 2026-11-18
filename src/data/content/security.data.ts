import type { KeamananItem } from '../../types';

export const securityItems: KeamananItem[] = [
  {
    id: 'sirkuit-tertutup',
    kategori: 'Infrastruktur Jaringan',
    judul: 'Sirkuit Tertutup (Air-Gapped & Offline)',
    ringkasan: 'Seluruh mesin e-voting dan laptop verifikasi beroperasi di jaringan lokal mandiri tanpa terhubung ke internet publik.',
    penjelasanLengkap: 'Perangkat di setiap TPS beroperasi secara terisolasi (air-gapped). Tidak ada transmisi suara melalui internet selama pemungutan suara berlangsung. Hal ini membuat sistem kebal terhadap ancaman serangan siber jarak jauh, intrusi jaringan luar, maupun sabotase daring.',
    dasarAturan: 'Standar Jaringan Terisolir (Perlu Verifikasi JDIH)'
  },
  {
    id: 'anonimitas-token',
    kategori: 'Penggunaan Smartcard',
    judul: 'Smartcard & Hak Pilih Satu Kali',
    ringkasan: 'Smartcard dipakai untuk menampilkan kartu suara elektronik di bilik suara, dan hanya berlaku untuk satu kali memilih.',
    penjelasanLengkap: 'Petugas memeriksa identitas pemilih untuk mencocokkannya dengan DPT dan memastikan hak pilih belum digunakan (Pasal 46 ayat (1) huruf d). Pemilih yang terverifikasi menerima Smartcard sebagai alat untuk menampilkan kartu suara elektronik pada monitor di bilik suara (huruf g dan i). Pemilih menggunakan hak pilih hanya satu kali, dan Smartcard yang telah digunakan tidak dapat digunakan lagi oleh pemilih yang bersangkutan (ayat (4)).',
    dasarAturan: 'Perbup Mempawah No. 14/2023 Pasal 46 ayat (1) huruf d, g, i dan ayat (4)'
  },
  {
    id: 'vvpat-audit',
    kategori: 'Auditabilitas & Pembuktian Hukum',
    judul: 'Pencetakan Lembar Struk & Kotak Suara/Audit',
    ringkasan: 'Setelah pemilih menyentuh YA, perangkat mencetak lembar struk yang dimasukkan pemilih ke dalam kotak suara/audit sesuai Pasal 46 Perbup Mempawah No. 14/2023.',
    penjelasanLengkap: 'Berdasarkan Pasal 46 ayat (1) huruf p dan s Perbup Mempawah No. 14 Tahun 2023, setelah pemilih menyentuh YA, keluar lembar struk sebagai bukti pemilih telah menggunakan hak memilih, kemudian pemilih memasukkannya ke dalam kotak suara atau audit yang disediakan Panitia Pemilihan. Penghitungan suara dicetak otomatis oleh peralatan e-Voting tanpa membuka kotak suara/audit (Pasal 47 ayat (3)). Jika peralatan rusak saat pemungutan suara, peralatan diganti, dan pemilih yang telah menggunakan hak pilihnya tetap diperhitungkan dengan membaca data pada memori hardisk peralatan atau menghitung struk pada kotak suara/audit (Pasal 46 ayat (5)).',
    dasarAturan: 'Perbup Mempawah No. 14/2023 Pasal 46 ayat (1) huruf p, s, ayat (5) & Pasal 47 ayat (3)'
  },
  {
    id: 'anti-pemilih-ganda',
    kategori: 'Integritas Pemilih',
    judul: 'Penanda Status Hadir & Tinta Pemilih',
    ringkasan: 'Petugas mengubah status pemilih menjadi telah hadir pada komputer DPT, dan pemilih mencelupkan jari ke tinta sebelum keluar.',
    penjelasanLengkap: 'Setelah identitas diperiksa, petugas verifikator memberi tanda pada undangan dan mengubah status pemilih pada komputer DPT menjadi telah hadir menggunakan hak pilih (Pasal 46 ayat (1) huruf f). Sebelum keluar, pemilih wajib mencelupkan salah satu jari ke bak tinta yang disiapkan Panitia Pemilihan sebagai tanda telah menggunakan hak memilih (huruf u).',
    dasarAturan: 'Perbup Mempawah No. 14/2023 Pasal 46 ayat (1) huruf f dan u'
  },
  {
    id: 'cadangan-gangguan',
    kategori: 'Mitigasi Bencana & Teknis',
    judul: 'Prosedur Darurat & Pasokan Daya Genset',
    ringkasan: 'Setiap TPS dilengkapi genset listrik mandiri serta unit cadangan tersegel dengan integritas memori baterai CMOS.',
    penjelasanLengkap: 'Jika pasokan listrik padam, genset cadangan langsung aktif tanpa memutus daya mesin karena didukung UPS baterai. Apabila salah satu layar sentuh bermasalah, unit cadangan berlabel khusus Kominfo dapat diaktifkan melalui persetujuan Panitia dan Saksi yang dituangkan dalam Berita Acara resmi, dengan seluruh data suara yang sudah masuk tetap tersimpan aman di media penyimpanan terenkripsi internal.',
    dasarAturan: 'SOP Kontinjensi & Pasokan Daya Cadangan TPS'
  },
  {
    id: 'tata-letak-pengawasan',
    kategori: 'Transparansi Prosedur',
    judul: 'Pengawasan Terbuka oleh Saksi & Warga',
    ringkasan: 'Kegiatan KPPS dapat dihadiri saksi calon, anggota BPD, dan warga, dan hasil penghitungan dituangkan dalam berita acara.',
    penjelasanLengkap: 'Kegiatan KPPS sebelum pemungutan suara dapat dihadiri oleh saksi dari calon, anggota BPD, dan warga masyarakat (Pasal 45 ayat (3)). Penghitungan suara dilakukan pada masing-masing TPS dan dituangkan dalam berita acara (Pasal 47 ayat (2)), dengan hasil per bilik/wilayah dicetak otomatis oleh peralatan e-Voting tanpa membuka kotak suara/audit (Pasal 47 ayat (3)).',
    dasarAturan: 'Perbup Mempawah No. 14/2023 Pasal 45 ayat (3) & Pasal 47 ayat (2)-(3)'
  }
];
