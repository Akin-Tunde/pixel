// src/lib/supabaseServerClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Use the secret SERVICE_ROLE key

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or Service Role Key is missing from server environment");
}

// This is the PRIVATE, privileged client for server-side use only
export const supabaseAdmin = createClient(supabaseUrl, supabaseKey);