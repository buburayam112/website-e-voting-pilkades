-- =============================================================
-- SCHEMA MIGRATION — EVOTE MEMPAWAH
-- Supabase PostgreSQL | Schema: public
-- =============================================================

-- -------------------------
-- TABLE: kontak
-- -------------------------
CREATE TABLE IF NOT EXISTS public.kontak (
  id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  organisasi    VARCHAR(150) NOT NULL UNIQUE,
  telepon       VARCHAR(30),
  email         VARCHAR(150),
  alamat        TEXT,
  jam_layanan   VARCHAR(100),
  website       TEXT,
  urutan        INTEGER DEFAULT 0,
  is_active     BOOLEAN DEFAULT TRUE,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------
-- TABLE: peralatan
-- -------------------------
CREATE TABLE IF NOT EXISTS public.peralatan (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug        VARCHAR(100) NOT NULL UNIQUE,
  nama        VARCHAR(150) NOT NULL,
  fungsi      TEXT NOT NULL,
  spesifikasi JSONB DEFAULT '{}',
  foto_url    TEXT,
  alt_foto    VARCHAR(255),
  urutan      INTEGER DEFAULT 0,
  is_active   BOOLEAN DEFAULT TRUE,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------
-- TABLE: konten_keamanan_transparansi
-- -------------------------
CREATE TABLE IF NOT EXISTS public.konten_keamanan_transparansi (
  id           BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug         VARCHAR(150) NOT NULL UNIQUE,
  kategori     VARCHAR(50) CHECK (kategori IN ('keamanan','audit','prosedur')),
  judul        VARCHAR(200) NOT NULL,
  ringkasan    TEXT,
  isi          TEXT NOT NULL,
  referensi    VARCHAR(255),
  urutan       INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT FALSE,
  created_at   TIMESTAMPTZ DEFAULT NOW(),
  updated_at   TIMESTAMPTZ DEFAULT NOW()
);

-- Idempotent constraint verification for existing databases
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'kontak_organisasi_key'
  ) THEN
    ALTER TABLE public.kontak ADD CONSTRAINT kontak_organisasi_key UNIQUE (organisasi);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'peralatan_slug_key'
  ) THEN
    ALTER TABLE public.peralatan ADD CONSTRAINT peralatan_slug_key UNIQUE (slug);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'keamanan_slug_key'
  ) THEN
    ALTER TABLE public.konten_keamanan_transparansi ADD CONSTRAINT keamanan_slug_key UNIQUE (slug);
  END IF;
END $$;

-- =============================================================
-- PRIVILEGES & SECURITY (Least Privilege Principle)
-- =============================================================

-- Revoke all permissions first from public roles to ensure clean state
REVOKE ALL ON TABLE public.kontak FROM anon, authenticated;
REVOKE ALL ON TABLE public.peralatan FROM anon, authenticated;
REVOKE ALL ON TABLE public.konten_keamanan_transparansi FROM anon, authenticated;

-- Allow schema usage for PostgREST Data API
GRANT USAGE ON SCHEMA public TO anon, authenticated;

-- Grant ONLY SELECT (read-only). NO INSERT, UPDATE, DELETE permissions
GRANT SELECT ON public.kontak TO anon, authenticated;
GRANT SELECT ON public.peralatan TO anon, authenticated;
GRANT SELECT ON public.konten_keamanan_transparansi TO anon, authenticated;

-- =============================================================
-- ROW LEVEL SECURITY (RLS)
-- =============================================================

-- Explicitly enable RLS on all three content tables
ALTER TABLE public.kontak ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.peralatan ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.konten_keamanan_transparansi ENABLE ROW LEVEL SECURITY;

-- Clean up any prior policy definitions to prevent duplicates
DROP POLICY IF EXISTS "anon_read_active_kontak" ON public.kontak;
DROP POLICY IF EXISTS "anon_read_active_peralatan" ON public.peralatan;
DROP POLICY IF EXISTS "anon_read_published_keamanan" ON public.konten_keamanan_transparansi;
DROP POLICY IF EXISTS "public_read_active_kontak" ON public.kontak;
DROP POLICY IF EXISTS "public_read_active_peralatan" ON public.peralatan;
DROP POLICY IF EXISTS "public_read_published_keamanan" ON public.konten_keamanan_transparansi;

-- Policy 1: Kontak — Hanya baris dengan is_active = true yang dapat dibaca
CREATE POLICY "public_read_active_kontak"
  ON public.kontak
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Policy 2: Peralatan — Hanya baris dengan is_active = true yang dapat dibaca
CREATE POLICY "public_read_active_peralatan"
  ON public.peralatan
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Policy 3: Konten Keamanan — Hanya baris dengan is_published = true yang dapat dibaca
CREATE POLICY "public_read_published_keamanan"
  ON public.konten_keamanan_transparansi
  FOR SELECT
  TO anon, authenticated
  USING (is_published = true);
