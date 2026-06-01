import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('The variables VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY are not defined in .env')
}

const supabase = createClient(
  supabaseUrl,  // URL do seu projeto
  supabaseKey // chave anon/public
)

export default supabase
