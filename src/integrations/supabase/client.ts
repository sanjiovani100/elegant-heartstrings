// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://yxgfwfhrgbatqhtxidby.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4Z2Z3ZmhyZ2JhdHFodHhpZGJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwNzkwNTYsImV4cCI6MjA1MjY1NTA1Nn0.iYmLmDxyLFzPhHVrJcnrEazABY3Lt-7dh-zXo2EtGlk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);