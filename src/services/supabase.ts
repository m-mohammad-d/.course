import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://llgyyyodgevtfoidrwjf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsZ3l5eW9kZ2V2dGZvaWRyd2pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwNTA5MTMsImV4cCI6MjAzODYyNjkxM30.LSiONebD1bYDm3JybpXXHnuhwGcM4JZq1oS252nZbVU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
