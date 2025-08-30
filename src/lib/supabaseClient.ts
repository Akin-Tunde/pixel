// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!; // Use the public ANON key

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or Anon Key is missing from .env.local");
}

// This is the PUBLIC client, safe for the browser
export const supabase = createClient(supabaseUrl, supabaseKey);