# LAPORAN KOREKSI TAHAP 1.1 — VERIFIKASI ATRIBUSI DASAR HUKUM E-VOTING
**Website E-Voting Kabupaten Mempawah (Prototipe Simulasi Magang)**

---

## 1. Ringkasan Eksekutif

Koreksi Tahap 1.1 berfokus pada penataan, verifikasi, dan penyelarasan atribusi dasar hukum serta terminologi bukti fisik pada seluruh komponen website E-Voting Kabupaten Mempawah. Seluruh penyesuaian dilakukan secara ketat dan presisi tanpa mengubah struktur halaman, komponen UI, integritas 12 desa penyelenggara, maupun arsitektur data Supabase.

---

## 2. Rincian Koreksi Berdasarkan Dasar Hukum & Ketentuan

### A. Perbup Mempawah Nomor 66 Tahun 2019 (Rujukan Utama Teknis)
- **Status:** Ditetapkan sebagai rujukan hukum utama untuk seluruh penjelasan teknis pelaksanaan Pilkades secara elektronik di Kabupaten Mempawah.
- **Penerapan Pasal:**
  - **Pasal 2 ayat (1):** Menjadi dasar penjelasan bahwa pemilihan kepala desa dapat dilaksanakan secara elektronik (e-Voting) melalui sentuhan pada layar monitor.
  - **Pasal 42 ayat (4):** Digunakan sebagai dasar bahwa pemberian suara dapat dilakukan menggunakan perangkat elektronik e-Voting.
  - **Pasal 46:** Dijadikan rujukan alur teknis pemberian suara, mencakup smart card, card reader, layar monitor sentuh, dialog konfirmasi pilihan (YA/TIDAK), pencetakan lembar struk, dan memasukkan lembar struk ke kotak suara/audit.
  - **Pasal 46 ayat (5):** Digunakan sebagai dasar prosedur penanganan gangguan/kerusakan alat e-Voting, di mana pembuktian dan penghitungan suara dilakukan dengan membuka kotak suara/audit untuk menghitung lembar struk fisik.
  - **Pasal 47:** Digunakan sebagai dasar hukum rekapitulasi dan penghitungan perolehan suara secara elektronik.

### B. Permendagri Nomor 72 Tahun 2020 (Pembersihan Atribusi)
- **Koreksi:** Menghapus seluruh teks dan atribusi yang sebelumnya mengaitkan Permendagri Nomor 72 Tahun 2020 (khususnya Pasal 44A–44D) sebagai regulasi teknis e-Voting.
- **Konteks Nyata:** Ketentuan Pasal 44A sampai Pasal 44D Permendagri 72/2020 secara faktual mengatur protokol kesehatan penyelenggaraan Pilkades di masa pandemi bencana nonalam COVID-19, bukan mekanisme teknis perangkat e-Voting. Seluruh referensi tersebut telah dibersihkan dari dasar aturan e-Voting.

### C. Putusan MK Nomor 147/PUU-VII/2009 (Penyelarasan Amar Putusan)
- **Koreksi:** Menjelaskan secara tepat bahwa Putusan MK No. 147/PUU-VII/2009 berkaitan dengan pengujian Pasal 88 UU No. 32 Tahun 2004 tentang Pemerintahan Daerah, di mana Mahkamah Konstitusi memaknai kata "mencoblos" mencakup metode pemberian suara secara elektronik (e-Voting).
- **Syarat Kumulatif:** Penjelasan menegaskan bahwa e-Voting sah secara konstitusional sepanjang memenuhi syarat kumulatif:
  1. Tidak melanggar asas pemilu langsung, umum, bebas, rahasia, jujur, dan adil (Luber Jurdil).
  2. Daerah yang menerapkan memiliki kesiapan teknologi, pembiayaan, SDM, perangkat lunak, serta kesiapan masyarakat.
- **Pemberitahuan:** Dihilangkan klaim bahwa Putusan MK mewajibkan instrumen VVPAT secara eksplisit, karena amar putusan tidak menyebut istilah instrumen tersebut secara literal.

### D. Peristilahan Bukti Fisik Sesuai Naskah Perbup 66/2019
- **Koreksi Istilah:** Mengganti penyebutan umum "VVPAT" menjadi istilah resmi naskah Perbup Mempawah No. 66 Tahun 2019 Pasal 46:
  - **"Lembar Struk"** (sebagai bukti cetak fisik pilihan).
  - **"Kotak Suara/Audit"** (sebagai wadah penyimpanan lembar struk yang terkunci).
- Tidak ada klaim bahwa singkatan VVPAT tercantum secara eksplisit dalam naskah Perbup Mempawah No. 66/2019.

### E. Jam Operasional Pusat Statistik (08.00–15.00 WIB)
- **Koreksi Label:** Nilai `08.00–15.00 WIB` tetap dipertahankan, namun label dan konteksnya diperbaiki secara tegas menjadi:
  - **"Jam Operasional Pusat Statistik: 08.00–15.00 WIB"**
  - **"Layanan Pusat Statistik"**
- Menghilangkan impresi keliru sebelumnya ("Waktu Pelayanan TPS") agar masyarakat/penguji tidak mengira bahwa bilik pemungutan suara di TPS melayani pemilih hingga pukul 15.00 WIB.

---

## 3. Daftar File yang Diubah

| No | File | Ringkasan Perubahan |
|---|---|---|
| 1 | `src/config/site.ts` | Memperbarui `dasarHukum` merujuk ke Perbup Mempawah No. 66/2019 (Pasal 2 ayat 1, Pasal 42 ayat 4, Pasal 46, Pasal 47) dan Putusan MK No. 147/PUU-VII/2009. Menghapus rujukan Permendagri 72/2020. |
| 2 | `src/components/legal/LegalCard.astro` | Menyesuaikan status regulasi `Perbup 66/2019 (Pasal 46)` dan modal alert informasi dokumen JDIHN. |
| 3 | `src/components/about/AboutSection.astro` | Mengganti pilar fungsi ke-6 menjadi lembar struk fisik & kotak suara/audit (Pasal 46 Perbup 66/2019), memperbarui subtitle & rujukan kutipan. |
| 4 | `src/data/content/security.data.ts` | Mengoreksi dasar aturan item privasi token ke Perbup 66/2019 Pasal 46; mengoreksi item audit ke lembar struk & kotak suara/audit berdasar Pasal 46 ayat (5) dan Putusan MK 147/2009. |
| 5 | `src/data/content/steps.data.ts` | Mengganti istilah VVPAT pada Tahap 4 dengan lembar struk fisik dan kotak suara/audit sesuai Pasal 46 Perbup 66/2019. |
| 6 | `src/data/content/equipment.data.ts` | Menyesuaikan nama printer, kertas termal, dan fungsinya sebagai pencetak lembar struk untuk kotak suara/audit (Pasal 46 ayat 5). |
| 7 | `src/components/hero/HeroSection.astro` | Mengganti badge "Struk Audit Fisik VVPAT" menjadi "Lembar Struk Kotak Audit". |
| 8 | `src/components/security/SecuritySection.astro` | Menyelaraskan subtitle dan kartu jejak fisik menjadi lembar struk kotak audit sesuai Pasal 46 ayat (5). |
| 9 | `src/components/illustrations/ClosedCircuitIllustration.astro` | Menyelaraskan teks node 4 dari "Bukti Fisik (VVPAT)" menjadi "4. Lembar Struk Audit" & kotak suara/audit (Ps. 46). |
| 10 | `src/components/illustrations/DeviceSvg.astro` | Mengubah label teks mesin cetak dari `VVPAT` menjadi `STRUK`. |
| 11 | `src/components/illustrations/HeroIllustration.astro` | Memperbarui anotasi ilustrasi printer termal dengan lembar struk audit. |
| 12 | `src/components/illustrations/StepSvg.astro` | Memperbarui anotasi callout SVG Tahap 4 menjadi struk sah. |
| 13 | `src/components/statistics/StatisticsSection.astro` | Mengganti label "Waktu Pelayanan TPS" menjadi "Layanan Pusat Statistik" dan memperjelas teks menjadi "Jam Operasional Pusat Statistik: 08.00–15.00 WIB" pada filter, grafik, dan header tabel. |

---

## 4. Hasil Verifikasi dan Build

1. **TypeScript Type Check:**
   - Perintah: `npx tsc --noEmit`
   - Hasil: **PASS (0 error, exit code 0)**
2. **Production Build:**
   - Perintah: `npm run build`
   - Hasil: **PASS (0 error, static HTML generated in `dist/` dalam 4.52s)**

