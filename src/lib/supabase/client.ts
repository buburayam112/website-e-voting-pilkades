// src/lib/supabase/client.ts
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Environment variables for Supabase connection (Client-Safe / Public only)
// Supports both current publishable key and legacy anon key naming
const supabaseUrl: string =
  (import.meta.env.PUBLIC_SUPABASE_URL as string)?.trim() || '';

const supabaseAnonKey: string =
  ((import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY as string) ||
   (import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string))?.trim() || '';

/**
 * Checks if Supabase credentials are valid and provided.
 * Rejects empty values and unreplaced placeholders (e.g. xxxxxxxxxxxxxxxxxxxx).
 */
export const isSupabaseConfigured: boolean = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl.startsWith('http') &&
  !supabaseUrl.includes('xxxxxxxxxxxxxxxxxxxx')
);

/**
 * Supabase client instance.
 * Safe for public browser runtime — only uses read-only anon key with RLS enforcement.
 * Initialized only when credentials are valid to prevent runtime bootstrap crashes.
 */
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  : null;
