-- =============================================================
-- SCHEMA MIGRATION 002 — TABEL BERITA & INFORMASI PUBLIK
-- Supabase PostgreSQL | Schema: public
-- =============================================================

CREATE TABLE IF NOT EXISTS public.berita (
  id                VARCHAR(100) PRIMARY KEY,
  slug              VARCHAR(255) NOT NULL UNIQUE,
  judul             VARCHAR(300) NOT NULL,
  kategori          VARCHAR(100) NOT NULL,
  ringkasan         TEXT NOT NULL,
  konten            TEXT NOT NULL,
  gambar_url        TEXT,
  penulis           VARCHAR(150) DEFAULT 'Tim Humas Diskominfo Mempawah',
  tanggal_publikasi DATE NOT NULL DEFAULT CURRENT_DATE,
  status            VARCHAR(20) NOT NULL DEFAULT 'published' CHECK (status IN ('published', 'draft')),
  dibaca            INTEGER DEFAULT 0,
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);

-- Indexing for performance
CREATE INDEX IF NOT EXISTS idx_berita_slug ON public.berita(slug);
CREATE INDEX IF NOT EXISTS idx_berita_status ON public.berita(status);
CREATE INDEX IF NOT EXISTS idx_berita_kategori ON public.berita(kategori);
CREATE INDEX IF NOT EXISTS idx_berita_tanggal ON public.berita(tanggal_publikasi DESC);

-- Enable RLS
ALTER TABLE public.berita ENABLE ROW LEVEL SECURITY;

-- Revoke all by default
REVOKE ALL ON TABLE public.berita FROM anon, authenticated;

-- Public can ONLY SELECT published news
GRANT SELECT ON public.berita TO anon, authenticated;

DROP POLICY IF EXISTS "Public can view published news" ON public.berita;
CREATE POLICY "Public can view published news"
  ON public.berita
  FOR SELECT
  TO anon, authenticated
  USING (status = 'published');
