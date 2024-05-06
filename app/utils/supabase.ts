import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://sfbkizayvopbipdbtbmh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmYmtpemF5dm9wYmlwZGJ0Ym1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4MTI0NDEsImV4cCI6MjAzMDM4ODQ0MX0.cdF1SaYl0T3n1yCa_LurfvTUDKcOk45Q-Eqr0VVJGX4';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;