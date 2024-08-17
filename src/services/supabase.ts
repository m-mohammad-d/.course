import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://llgyyyodgevtfoidrwjf.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsZ3l5eW9kZ2V2dGZvaWRyd2pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwNTA5MTMsImV4cCI6MjAzODYyNjkxM30.LSiONebD1bYDm3JybpXXHnuhwGcM4JZq1oS252nZbVU";
const supabaseServiceRoleKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsZ3l5eW9kZ2V2dGZvaWRyd2pmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMzA1MDkxMywiZXhwIjoyMDM4NjI2OTEzfQ.1FnnYrP7TnoZBrifyaCtbRvdEC64uFWT9jdV8gUtmn0";

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

export default supabase;
