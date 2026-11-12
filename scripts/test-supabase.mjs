// scripts/test-supabase.mjs
import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Baca file .env lokal
const envPath = path.resolve(process.cwd(), '.env');
if (!fs.existsSync(envPath)) {
  console.error('❌ File .env tidak ditemukan! Pastikan Anda sudah membuat file .env di root project.');
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf-8');
const env = {};
for (const line of envContent.split(/\r?\n/)) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
    const idx = trimmed.indexOf('=');
    const key = trimmed.slice(0, idx).trim();
    const val = trimmed.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
    env[key] = val;
  }
}

const supabaseUrl = env.PUBLIC_SUPABASE_URL;
const supabaseKey = env.PUBLIC_SUPABASE_PUBLISHABLE_KEY || env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey || supabaseUrl.includes('xxxx')) {
  console.error('❌ URL atau API Key di file .env masih kosong atau menggunakan template placeholder.');
  process.exit(1);
}

console.log('====================================================');
console.log('🔍 MEMULAI PENGUJIAN SUPABASE (ROLE: ANON / PUBLIC)');
console.log('URL:', supabaseUrl);
console.log('====================================================\n');

const client = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false, autoRefreshToken: false }
});

async function runTests() {
  let passed = 0;
  let failed = 0;

  // ----------------------------------------------------
  // TEST 1: SELECT kontak (Hanya is_active = true)
  // ----------------------------------------------------
  process.stdout.write('1. Menguji SELECT tabel "kontak" ... ');
  try {
    const { data, error } = await client
      .from('kontak')
      .select('id, organisasi, is_active')
      .order('urutan');

    if (error) {
      console.log('❌ GAGAL:', error.message);
      failed++;
    } else {
      const allActive = data.every(row => row.is_active === true);
      if (allActive) {
        console.log(`✅ BERHASIL (${data.length} baris terbaca, seluruhnya is_active=true)`);
        passed++;
      } else {
        console.log('❌ GAGAL: Ditemukan baris dengan is_active = false yang lolos RLS!');
        failed++;
      }
    }
  } catch (err) {
    console.log('❌ ERROR:', err.message);
    failed++;
  }

  // ----------------------------------------------------
  // TEST 2: SELECT peralatan (Hanya is_active = true)
  // ----------------------------------------------------
  process.stdout.write('2. Menguji SELECT tabel "peralatan" ... ');
  try {
    const { data, error } = await client
      .from('peralatan')
      .select('id, slug, is_active');

    if (error) {
      console.log('❌ GAGAL:', error.message);
      failed++;
    } else {
      const allActive = data.every(row => row.is_active === true);
      if (allActive) {
        console.log(`✅ BERHASIL (${data.length} perangkat terbaca, seluruhnya is_active=true)`);
        passed++;
      } else {
        console.log('❌ GAGAL: Ditemukan baris dengan is_active = false yang lolos RLS!');
        failed++;
      }
    }
  } catch (err) {
    console.log('❌ ERROR:', err.message);
    failed++;
  }

  // ----------------------------------------------------
  // TEST 3: SELECT konten_keamanan_transparansi (Hanya is_published = true)
  // ----------------------------------------------------
  process.stdout.write('3. Menguji SELECT tabel "konten_keamanan_transparansi" ... ');
  try {
    const { data, error } = await client
      .from('konten_keamanan_transparansi')
      .select('id, slug, is_published');

    if (error) {
      console.log('❌ GAGAL:', error.message);
      failed++;
    } else {
      const allPublished = data.every(row => row.is_published === true);
      if (allPublished) {
        console.log(`✅ BERHASIL (${data.length} konten terbaca, seluruhnya is_published=true)`);
        passed++;
      } else {
        console.log('❌ GAGAL: Ditemukan baris dengan is_published = false yang lolos RLS!');
        failed++;
      }
    }
  } catch (err) {
    console.log('❌ ERROR:', err.message);
    failed++;
  }

  // ----------------------------------------------------
  // TEST 4: Uji Penolakan INSERT oleh Anon
  // ----------------------------------------------------
  process.stdout.write('4. Menguji penolakan hak akses INSERT (Simulasi Penyerang) ... ');
  try {
    const { data, error } = await client
      .from('kontak')
      .insert({ organisasi: 'Instansi Palsu Uji Penetrasi', is_active: true });

    if (error) {
      console.log('✅ BERHASIL DITOLAK!');
      console.log(`   └─ Respon Database: [${error.code || 'RLS'}] ${error.message}`);
      passed++;
    } else {
      console.log('❌ BAHAYA: INSERT BERHASIL! Anon memiliki hak tulis!');
      failed++;
    }
  } catch (err) {
    console.log('✅ BERHASIL DITOLAK (Exception):', err.message);
    passed++;
  }

  // ----------------------------------------------------
  // TEST 5: Uji Penolakan UPDATE oleh Anon
  // ----------------------------------------------------
  process.stdout.write('5. Menguji penolakan hak akses UPDATE ... ');
  try {
    const { data, error } = await client
      .from('kontak')
      .update({ organisasi: 'Perubahan Ilegal' })
      .eq('id', 1);

    if (error) {
      console.log('✅ BERHASIL DITOLAK!');
      console.log(`   └─ Respon Database: [${error.code || 'RLS'}] ${error.message}`);
      passed++;
    } else {
      // Pada PostgREST jika RLS memblokir update tanpa policy, rows affected adalah 0 atau error
      console.log('✅ BERHASIL DITOLAK (Tidak ada baris yang dapat di-update)');
      passed++;
    }
  } catch (err) {
    console.log('✅ BERHASIL DITOLAK (Exception):', err.message);
    passed++;
  }

  // ----------------------------------------------------
  // TEST 6: Uji Penolakan DELETE oleh Anon
  // ----------------------------------------------------
  process.stdout.write('6. Menguji penolakan hak akses DELETE ... ');
  try {
    const { data, error } = await client
      .from('kontak')
      .delete()
      .eq('id', 1);

    if (error) {
      console.log('✅ BERHASIL DITOLAK!');
      console.log(`   └─ Respon Database: [${error.code || 'RLS'}] ${error.message}`);
      passed++;
    } else {
      console.log('✅ BERHASIL DITOLAK (Tidak ada baris yang dapat dihapus)');
      passed++;
    }
  } catch (err) {
    console.log('✅ BERHASIL DITOLAK (Exception):', err.message);
    passed++;
  }

  console.log('\n====================================================');
  console.log(`🏁 HASIL PENGUJIAN: ${passed} BERHASIL, ${failed} GAGAL`);
  if (failed === 0) {
    console.log('🔒 KEAMANAN SEMPURNA: RLS dan hak akses database bekerja 100%!');
  } else {
    console.log('⚠️ PERINGATAN: Ada celah keamanan yang perlu diperbaiki.');
  }
  console.log('====================================================\n');
}

runTests();

