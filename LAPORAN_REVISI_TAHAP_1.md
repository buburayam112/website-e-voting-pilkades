# LAPORAN REVISI TAHAP 1
## WEBSITE E-VOTING KABUPATEN MEMPAWAH

**Nama Proyek:** E-Voting Kabupaten Mempawah  
**Konteks Proyek:** Prototype / Simulasi Magang untuk Demonstrasi Mentor  
**Tahap Pengerjaan:** Revisi Tahap 1  
**Tanggal:** 17 November 2026  
**Status Kompilasi:** ✅ PASS (`npx tsc --noEmit`: 0 error | `npm run build`: Sukses)  

---

## 1. File yang Diubah

Berikut adalah daftar file yang dimodifikasi beserta tujuan perubahannya:

| No. | File Path | Tujuan Perubahan |
|:---:|---|---|
| 1 | `src/data/content/steps.data.ts` | Menghapus objek data **Tahap 6** (`TAHAP-06`), sehingga alur pemungutan suara berfokus murni pada 5 langkah pemilih di bilik TPS (Tahap 1 s/d 5). |
| 2 | `src/components/voting-steps/VotingStepsSection.astro` | Menyesuaikan indikator langkah menjadi dinamis `Langkah 0{step.nomor} dari 0{stepsData.length}` (sebelumnya `06`), menjaga kerapian timeline vertikal agar tidak menyisakan ruang kosong. |
| 3 | `src/components/illustrations/StepSvg.astro` | Menghapus blok SVG ilustrasi untuk langkah 6 agar tidak meninggalkan elemen ilustrasi mati (*dead code*). |
| 4 | `src/components/security/SecuritySection.astro` | Menghapus blok kartu visual **Skenario Khusus Pelaksanaan di TPS** (`specialScenarios`) dan merapikan komposisi tata letak section agar tetap proporsional. |
| 5 | `src/components/statistics/StatisticsSection.astro` | Menghapus dropdown filter waktu pemutakhiran dan kolom *Waktu Update*. Menggantinya dengan informasi **Jam Operasional: 08.00–15.00 WIB** pada filter bar, grafik kehadiran, dan tabel wilayah. |
| 6 | `src/config/site.ts` | Menyesuaikan metadata dasar hukum dengan rujukan normatif yang sah di JDIHN (Perbup Mempawah No. 66/2019 & Permendagri No. 72/2020) serta menandai draf 2026 yang berstatus perlu verifikasi naskah resmi. |
| 7 | `src/components/legal/LegalCard.astro` | Memperbarui badge dan teks informasi dasar hukum dengan penandaan verifikasi JDIHN secara transparan. |
| 8 | `src/components/about/AboutSection.astro` | Menghapus klaim pasal/nomor bab fiktif pada subjudul dan kutipan definisi e-voting, menggantinya dengan rujukan standar teknis yang memerlukan verifikasi naskah resmi JDIHN. |
| 9 | `src/data/content/security.data.ts` | Menyelaraskan rujukan aturan pada 6 butir prosedur keamanan dengan regulasi JDIHN (Perbup Mempawah 66/2019, Permendagri 72/2020, Putusan MK 147/PUU-VII/2009). |
| 10 | `src/components/layout/Footer.astro` | Memperbarui label tautan navigasi footer dari `Perbup No. 28/2026` menjadi `Dasar Hukum & JDIHN`. |

---

## 2. Perubahan yang Berhasil

### A. Penghapusan Tahap 6 pada Proses Pemungutan Suara
* **Objek Data:** `TAHAP-06` ("Area Pengawasan Mutlak") telah dihapus dari data array `stepsData`.
* **Urutan Alur:** Tahap 1 ("Kedatangan & Verifikasi Identitas") hingga Tahap 5 ("Penanda Akhir & Penyelesaian") tetap tersusun secara utuh dan berkesinambungan.
* **Penomoran & Label:** Label langkah diperbarui dari "Langkah X dari 06" menjadi "Langkah X dari 05".
* **Visual Garis Timeline:** Garis vertikal penunjuk alur (*central guide line*) di tampilan desktop otomatis menyesuaikan tinggi kontainer 5 tahap secara rapi tanpa meninggalkan sisa garis kosong di bagian bawah.

### B. Penghapusan Skenario Khusus TPS pada Bagian Keamanan dan Transparansi
* **Pembersihan Konten:** Tiga kartu skenario khusus (Kendala Identitas / e-KTP Rusak, Calon Tunggal Lawan Kotak Kosong, dan Koreksi Pilihan Salah Tekan) beserta seluruh ikon pendukungnya telah dihapus.
* **Proporsi Layout:** Diagram utama Arsitektur Rantai Sirkuit Tertutup (*Closed Circuit Loop*) dan akordion prosedur keamanan tetap dipertahankan dengan margin serta padding bawah yang seimbang dan rapi.

### C. Pembaruan Informasi Jam Operasional pada Pusat Statistik
* **Pembersihan Teks Waktu:** Seluruh teks "Terakhir Diperbarui / Last Updated", dropdown filter sesi pemutakhiran, dan kolom "Waktu Update" telah dihilangkan dari antarmuka.
* **Penerapan Informasi Baru:** Diterapkan teks resmi **Jam Operasional: 08.00–15.00 WIB** secara konsisten pada:
  1. Kartu informasi di samping filter wilayah kecamatan dan desa.
  2. Keterangan rentang waktu akumulasi pada grafik laju partisipasi per jam.
  3. Header dan baris data tabel rekapitulasi wilayah desa.
* **Konsistensi Desain:** Tampilan jam operasional menggunakan gaya visual badge dan kartu selaras dengan panduan warna Kominfo tanpa memuat tanggal atau jam pembaruan fiktif.

### D. Peninjauan Rujukan Konten Menggunakan JDIHN
* **Eliminasi Klaim Fiktif:** Tidak ada lagi pencantuman pasal, ayat, atau bab fiktif yang tidak dapat diverifikasi pada naskah hukum resmi.
* **Penyelarasan Regulasi Sah:** Menghubungkan dasar hukum dengan regulasi yang telah tercatat dan berlaku di JDIH Kabupaten Mempawah serta JDIHN Nasional.
* **Transparansi Draf 2026:** Memberikan label penanda bahwa aturan teknis tahun 2026 berstatus draf acuan simulasi yang menunggu pengundangan naskah resmi pada portal JDIH Kabupaten Mempawah.

---

## 3. Hasil Verifikasi

### A. Verifikasi Build & Kompilasi Kode
* **TypeScript Typecheck:**  
  `npx tsc --noEmit` &rarr; **PASS (0 error)**.  
  Seluruh tipe data (`stepsData`, `securityItems`, dan antarmuka komponen) sinkron dan valid.
* **Astro Production Build:**  
  `npm run build` &rarr; **PASS (Exit code: 0)**.  
  Sebanyak 82 modul klien berhasil ditransformasikan dan menghasilkan rute statis `dist/index.html` dalam waktu 4.19 detik.

### B. Pemeriksaan Responsivitas
* **Desktop (1024px – 1440px):**  
  Alur 5 tahapan pemungutan suara tertata berselang-seling (*alternating*) secara simetris. Filter bar statistik 3-kolom tampil proporsional.
* **Mobile (360px – 768px):**  
  Alur tahapan beralih ke tata letak linier vertikal dengan nomor langkah yang jelas. Tabel rekapitulasi 12 desa memiliki *horizontal scrollbar* halus tanpa menyebabkan *overflow* horizontal pada bodi halaman.

### C. Pemeriksaan Komponen & Integrasi yang Terdampak
* **Integritas 12 Desa:**  
  Daftar 12 desa representatif pada tabel wilayah dan dropdown filter tetap utuh, tidak ada data desa yang terhapus, bertambah, ataupun berubah.
* **Integrasi Supabase & Fallback:**  
  Mekanisme pembacaan data runtime Supabase dan *fallback* statis bawaan untuk `kontak`, `peralatan`, dan `keamanan` tetap berjalan normal tanpa gangguan.
* **Komponen Back-Office:**  
  Bagian Cek Hak Pilih, Daftar Calon Kades, dan Statistik Partisipasi tetap mempertahankan arsitektur mock independen untuk persiapan integrasi API resmi Diskominfo di masa mendatang.

### D. Status Konten Hukum (Hasil Penelusuran JDIHN)

#### 1. Regulasi yang Telah Terverifikasi Sah di JDIHN:
1. **Peraturan Bupati Mempawah Nomor 66 Tahun 2019**  
   *Tentang:* Petunjuk Teknis Pelaksanaan Pemilihan Kepala Desa di Kabupaten Mempawah.  
   *Status JDIHN:* Berlaku & terdaftar resmi di portal JDIHN / JDIH Kabupaten Mempawah.
2. **Permendagri Nomor 112 Tahun 2014 jo. Permendagri Nomor 72 Tahun 2020**  
   *Tentang:* Perubahan Kedua atas Peraturan Menteri Dalam Negeri Nomor 112 Tahun 2014 tentang Pemilihan Kepala Desa (Pasal 44A s/d 44D mengatur pemungutan suara secara elektronik).  
   *Status JDIHN:* Berlaku secara nasional.
3. **Putusan Mahkamah Konstitusi RI Nomor 147/PUU-VII/2009**  
   *Tentang:* Legalitas konstitusional metode *e-voting* dalam pemilihan umum dan kepala daerah/desa di Indonesia dengan syarat jejak audit fisik (VVPAT).  
   *Status JDIHN:* Putusan berkekuatan hukum tetap.

#### 2. Konten yang Berstatus Perlu Verifikasi Naskah Resmi JDIH:
1. **Peraturan Bupati Mempawah Nomor 28 Tahun 2026:**  
   Naskah lembaran daerah belum diundangkan secara publik pada portal JDIHN pusat (merupakan draf teknis acuan demonstrasi magang). Pada website telah diberi label transparan *(Draf Acuan 2026 — Perlu Verifikasi Naskah Resmi JDIH)*.
2. **SOP Teknis & Mitigasi Kendala Daya TPS:**  
   Merupakan dokumen operasional internal kepanitiaan/dinas teknis, bukan produk hukum perundang-undangan JDIHN.

---

## 4. Catatan Pelaksanaan

1. **Batasan Tahap 1 Terpenuhi:**  
   Pengerjaan dibatasi secara ketat hanya pada ruang lingkup Revisi Tahap 1 tanpa mengubah skema basis data, tata warna, tipografi, maupun alur fungsional lainnya.
2. **Aset Ilustrasi Perangkat:**  
   Ilustrasi perangkat e-voting tetap menggunakan ilustrasi vektor SVG bawaan dan belum diganti dengan foto perangkat asli, sesuai instruksi menunggu pengiriman aset visual dari pengguna.
3. **Jumlah Desa:**  
   Jumlah 12 desa representatif dipertahankan tanpa penambahan 48 desa baru pada tahap ini.

