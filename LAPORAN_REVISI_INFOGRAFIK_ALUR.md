# LAPORAN IMPLEMENTASI — REVISI 5 INFOGRAFIK ALUR E-VOTING KABUPATEN MEMPAWAH

**Proyek:** Website E-Voting Kabupaten Mempawah (Prototype / Simulasi Demonstrasi Magang)  
**Dokumen Rujukan:** Peraturan Bupati Mempawah Nomor 14 Tahun 2023 tentang Petunjuk Teknis Pelaksanaan Pemilihan Kepala Desa secara E-Voting di Kabupaten Mempawah  
**Status Eksekusi:** SELESAI & TERVERIFIKASI  

---

## 1. File yang Diubah

### A. Aset Gambar Infografik
1. [tahap-1.png](file:///d:/Kuliah/KERJA%20PRAKTIK/web-evoting/public/images/tahapan/revised/tahap-1.png) — *Penyuntingan judul header (670×525 px)*
2. [tahap-2.png](file:///d:/Kuliah/KERJA%20PRAKTIK/web-evoting/public/images/tahapan/revised/tahap-2.png) — *Penyuntingan judul, tab "Konsep Utama", isi panel, dan kalimat penutup (1010×533 px)*
3. [tahap-3.png](file:///d:/Kuliah/KERJA%20PRAKTIK/web-evoting/public/images/tahapan/revised/tahap-3.png) — *Penyuntingan nomor tahap 3A menjadi 3 dan standardisasi 3 label perangkat (1053×586 px)*
4. [tahap-4.png](file:///d:/Kuliah/KERJA%20PRAKTIK/web-evoting/public/images/tahapan/revised/tahap-4.png) — *Penyuntingan panel kiri, panel kanan, dan teks penutup bawah (1057×583 px)*
5. [tahap-5.png](file:///d:/Kuliah/KERJA%20PRAKTIK/web-evoting/public/images/tahapan/revised/tahap-5.png) — *Penyuntingan panel kiri dan panel kanan (1047×591 px)*
*(Catatan: Seluruh file sumber asli di `public/images/tahapan/original/` tetap terlindungi dan tidak ditimpa).*

### B. Kode Program & Data Website
1. [index.ts](file:///d:/Kuliah/KERJA%20PRAKTIK/web-evoting/src/types/index.ts) — Penambahan field `gambarUrl`, `dasarHukum`, dan `captionTeknis` pada interface `TahapPemungutan`.
2. [steps.data.ts](file:///d:/Kuliah/KERJA%20PRAKTIK/web-evoting/src/data/content/steps.data.ts) — Pembaruan redaksi judul, poin kunci, dan atribusi pasal berdasarkan naskah resmi Perbup Mempawah No. 14 Tahun 2023 (menggantikan seluruh referensi Perbup lama No. 66/2019).
3. [VotingStepsSection.astro](file:///d:/Kuliah/KERJA%20PRAKTIK/web-evoting/src/components/voting-steps/VotingStepsSection.astro) — Integrasi visual gambar infografik hasil revisi menggunakan tag `<img>` responsif dengan atribut `loading="lazy"`, `decoding="async"`, `object-fit: contain`, serta penambahan caption teknis khusus.

---

## 2. Hasil Penyuntingan Gambar

| File Target | Dimensi | Elemen yang Disunting | Redaksi Sebelum Revisi | Redaksi Hasil Revisi |
|---|---|---|---|---|
| **tahap-1.png** | 670 × 525 | Header Kiri Atas | *"Tahap 1 Kedatangan, Verifikasi Identitas & Pembagian E-Card"* | **"Tahap 1: Kedatangan dan Verifikasi Identitas"** (Frasa pembagian e-card dihilangkan karena smartcard baru dibagikan di Tahap 2). |
| **tahap-2.png** | 1010 × 533 | 1. Header Kotak Judul<br>2. Tab Judul Panel<br>3. Isi Teks Panel<br>4. Kalimat Bawah | 1. *"Tahap 2: Pengambilan Kunci Digital (Smartcard)"*<br>2. *"Key Concept"*<br>3. Klaim smartcard bukan penyimpan data pribadi & sekali pakai fisik.<br>4. *"Setelah verifikasi selesai, pemilih mengambil Smartcard yang diinjeksi token otorisasi sekali pakai."* | 1. **"Tahap 2: Penerimaan Smartcard E-Voting"**<br>2. **"Konsep Utama"**<br>3. *"Smartcard digunakan untuk menampilkan kartu suara elektronik pada monitor di bilik suara. Setelah pemilih selesai menggunakan hak pilih, kartu dikembalikan kepada petugas untuk digenerik ulang."*<br>4. *"Setelah terverifikasi dan menunggu giliran, pemilih menerima Smartcard dari petugas pemungutan suara."* |
| **tahap-3.png** | 1053 × 586 | 1. Kotak Nomor Tahap<br>2. Label Perangkat 1<br>3. Label Perangkat 2<br>4. Label Perangkat 3 | 1. *"Tahap 3A:"*<br>2. *"Printer Struk - Menghadap Depan)"*<br>3. *"Struk Audit (Bukti Audit)"*<br>4. *"Kotak Audit (Di Belakang Bilik)"* | 1. **"Tahap 3:"** (Penomoran 3A diubah menjadi 3).<br>2. **"Printer"**<br>3. **"Lembar Struk"**<br>4. **"Kotak Suara/Audit"**<br>*(Semua garis penunjuk/leader lines dipertahankan presisi).* |
| **tahap-4.png** | 1057 × 583 | 1. Panel Kiri<br>2. Panel Kanan<br>3. Teks Penutup Bawah | 1. *"Pemilih melipat dan memasukkan lembar struk ke dalam Kotak Audit yang terkunci."*<br>2. *"Pemilih mengembalikan Smartcard kepada petugas untuk di-reset."*<br>3. *"Struk Kertas di Kotak Audit = Bukti Sah Pemungutan Suara (Jika terjadi sengketa, struk fisik ini adalah acuan final)."* | 1. *"Pemilih memasukkan lembar struk ke dalam kotak suara/audit yang disediakan panitia."*<br>2. *"Pemilih menyerahkan Smartcard kepada petugas untuk digenerik ulang."*<br>3. **"Lembar Struk Menjadi Bukti Pemilih Telah Menggunakan Hak Pilih"** |
| **tahap-5.png** | 1047 × 591 | 1. Panel Kiri<br>2. Panel Kanan | 1. *"Sebagai penanda mutlak bahwa hak suara telah digunakan, pemilih mencelupkan salah satu jari ke dalam tinta khusus."*<br>2. *"Pemilih kemudian diarahkan keluar melalui Pintu Keluar yang telah ditentukan, memastikan tidak ada arus balik ke dalam area TPS."* | 1. *"Sebelum keluar, pemilih wajib mencelupkan salah satu jari ke bak tinta yang disediakan panitia sebagai tanda telah menggunakan hak pilih."*<br>2. *"Setelah itu, pemilih menuju pintu keluar yang telah disediakan panitia."* |

---

## 3. Hasil Integrasi Website

1. **Penggantian Visual Utama:**
   - Komponen `<StepSvg />` SVG generik pada `VotingStepsSection.astro` telah digantikan secara penuh dengan pemuatan file gambar raster hasil revisi `public/images/tahapan/revised/tahap-[1-5].png`.
   - Menggunakan container berlatar netral dengan border halus, `object-fit: contain`, dan batasan tinggi responsif (`max-h-[380px] sm:max-h-[420px]`).
2. **Penyelarasan Teks Pendamping & Caption:**
   - Ditambahkan caption teknis terstruktur di bawah gambar tahap 4 untuk menjelaskan mekanisme penghitungan suara:
     > *"Penghitungan normal dilakukan secara otomatis melalui perangkat e-Voting tanpa membuka kotak suara/audit (Pasal 47 ayat 3). Jika perangkat mengalami kerusakan, suara tetap diperhitungkan melalui data memori harddisk atau penghitungan struk pada kotak suara/audit sesuai ketentuan Pasal 46 ayat (5)."*
   - Ditampilkan pill dasar hukum pada setiap kartu tahapan (`Pasal 46 ayat (1) huruf b-f`, dll.).
3. **Penyempurnaan Struktur Data:**
   - Semua 5 entri dalam `stepsData` telah disesuaikan judul resminya agar sinkron dengan gambar.
   - Poin-poin kunci pelaksanaan memuat rujukan ayat/huruf Perbup Mempawah No. 14 Tahun 2023.

---

## 4. Pemeriksaan Visual

- **Resolusi & Keterbacaan Teks:**
  - Font tipografi menggunakan Segoe UI Bold / Regular dengan kontras warna navy (`#101b3c` / `#102542`) yang tajam di atas latar belakang panel dan kanvas asli.
  - Teks tidak menabrak bingkai panel dekoratif, tidak menimpa garis penunjuk (*leader lines*), dan tidak ada artefak bekas huruf lama yang tertinggal.
- **Tampilan Desktop (1024px+):**
  - Layout timeline zigzag (bergantian kiri-kanan) bekerja seimbang antara kolom ilustrasi infografik dan kolom penjelasan teks.
  - Garis pemandu vertikal tengah tetap sejajar rapi.
- **Tampilan Mobile (<768px):**
  - Tampilan mengalir secara linear vertikal (nomor badge tahap, gambar infografik proporsional, diikuti kartu teks).
  - Gambar infografik mengecil secara proporsional tanpa gepeng (*aspect ratio lock*) dan tetap nyaman dibaca pada layar ponsel.

---

## 5. Verifikasi Hukum Pasal (Perbup Mempawah No. 14 Tahun 2023)

| Tahap | Judul Resmi | Dasar Hukum & Bunyi Ketentuan |
|---|---|---|
| **Tahap 1** | Kedatangan dan Verifikasi Identitas | **Pasal 46 ayat (1) huruf b sampai f:**<br>• Huruf b: Pemilih masuk TPS lewat pintu masuk dengan menunjukkan surat undangan & e-KTP kepada Verifikator.<br>• Huruf c: Dalam hal tidak memiliki e-KTP (hilang, rusak, belum cetak, tertinggal), pemilih dapat menggunakan Kartu Keluarga yang sah dan berlaku.<br>• Huruf d: Petugas meneliti undangan, mencocokkan DPT, memastikan pemilih sah belum menggunakan hak pilih.<br>• Huruf e: Petugas verifikator meneliti e-KTP untuk memastikan keabsahan dan kepemilikan.<br>• Huruf f: Petugas verifikator memberi tanda pada undangan dan pada komputer DPT mengubah status menjadi telah hadir. |
| **Tahap 2** | Penerimaan Smartcard E-Voting | **Pasal 46 ayat (1) huruf g sampai j, serta ayat (2) sampai (4):**<br>• Huruf g: Pemilih terverifikasi berhak mendapatkan smartcard untuk memilih secara e-Voting.<br>• Huruf h: Pemilih menunggu di tempat antrean yang disediakan.<br>• Huruf i: Petugas pemungutan suara memberikan smartcard sebagai alat untuk menampilkan kartu suara elektronik.<br>• Huruf j: Pemilih menuju ke bilik suara dengan membawa smartcard.<br>• Ayat (2): Jika gambar calon tidak muncul pada monitor, data dalam Smartcard telah digunakan sebelumnya atau belum digenerik.<br>• Ayat (3): Jika Smartcard belum digenerik, pemilih dapat meminta penggantian Smartcard hanya satu kali.<br>• Ayat (4): Pemilih menggunakan hak pilih hanya satu kali dan Smartcard yang telah digunakan tidak dapat digunakan lagi oleh pemilih yang bersangkutan. |
| **Tahap 3** | Penentuan Pilihan di Bilik Suara | **Pasal 46 ayat (1) huruf k sampai q:**<br>• Huruf k-l: Pemilih memasukkan smartcard ke card reader hingga tampil tanda gambar calon pada layar monitor bilik.<br>• Huruf m: Pemilih menyentuh satu kali pada tanda gambar calon pilihannya.<br>• Huruf n-q: Muncul lembar konfirmasi tulisan "YA" (kotak hijau) dan "TIDAK" (kotak merah bertanda X). Jika menyentuh "YA", keluar lembar struk; jika menyentuh "TIDAK", layar kembali ke pilihan calon. |
| **Tahap 4** | Pengamanan Jejak Audit Fisik | **Pasal 46 ayat (1) huruf r-s, ayat (5), dan Pasal 47 ayat (3):**<br>• Huruf r: Pemilih membawa lembar struk keluar bilik dan menyerahkan smartcard kepada petugas untuk digenerik ulang.<br>• Huruf s: Pemilih memasukkan lembar struk ke dalam kotak suara/audit panitia.<br>• Pasal 47 ayat (3): Penghitungan suara dicetak otomatis oleh perangkat e-Voting tanpa membuka kotak suara/audit.<br>• Pasal 46 ayat (5): Jika perangkat rusak, suara diperhitungkan dengan membaca memori harddisk atau menghitung fisik struk pada kotak suara/audit. |
| **Tahap 5** | Penanda Akhir dan Penyelesaian | **Pasal 46 ayat (1) huruf t dan u:**<br>• Huruf u: Sebelum keluar, pemilih wajib mencelupkan salah satu jari ke bak tinta sebagai tanda telah memilih.<br>• Huruf t: Pemilih menuju pintu keluar yang telah disediakan Panitia Pemilihan. |

---

## 6. Hasil Build & Pengujian Sistem

1. **TypeScript Typecheck:**
   ```powershell
   npx tsc --noEmit
   # Exit code: 0 (Zero errors)
   ```
2. **Astro Production Build:**
   ```powershell
   npm run build
   # 82 modules transformed
   # 1 page(s) built in 6.21s
   # Output: Complete! (dist/index.html generated)
   ```
3. **Verifikasi Output Build (`dist/`):**
   - File gambar infografik berhasil dipaketkan di `dist/images/tahapan/revised/` (tahap-1 s.d. tahap-5).
   - Seluruh tag gambar pada `dist/index.html` mengarah ke path `/images/tahapan/revised/tahap-[1-5].png`.
   - Tidak ada string `Perbup 66` yang tersisa di section `#tahapan`.
   - Tidak ada istilah asing `VVPAT` di section `#tahapan`.
   - Tidak ada nomor `3A` atau `Tahap 6` di section `#tahapan`.

---

## 7. Catatan Tambahan

1. **Pelestarian Elemen Grafis:** Seluruh ilustrasi asli karya pengguna (karakter pemilih, petugas berpakaian batik, seragam panitia, meja, laptop verifikator, KTP reader, bilik suara, kotak suara bertuliskan Kotak Audit, bak tinta, dan plang penunjuk arah) dipertahankan 100% tanpa distorsi.
2. **Kesesuaian Nomenklatur:** Istilah teknis yang digunakan pada infografik maupun teks website sepenuhnya mematuhi diksi legal Perbup Mempawah No. 14 Tahun 2023, antara lain: *"digenerik ulang"*, *"lembar struk"*, dan *"kotak suara/audit"*.

