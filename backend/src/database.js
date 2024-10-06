const env = require('./environment');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(env.supabaseUrl, env.supabaseAnonKey);

module.exports = supabase;
