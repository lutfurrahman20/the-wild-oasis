
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tpyajphyumpiqbhuaqht.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRweWFqcGh5dW1waXFiaHVhcWh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzODQzMzEsImV4cCI6MjA1MTk2MDMzMX0.YHP3Kzh9-32PSapYf8bn_0p1QC0LBAR6Lu07_SNNBrs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;