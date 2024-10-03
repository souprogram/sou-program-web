require('dotenv').config();

module.exports = {
  port: process.env.PORT ?? 3000,

  supabaseUrl: process.env.SUPABASE_URL ?? '',
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY ?? '',
  supabaseTableName: process.env.SUPABASE_TABLE_NAME ?? '',
  supabaseRoboticsEventTableName:
    process.env.SUPABASE_ROBOTICS_EVENT_TABLE_NAME ?? '',
  supabaseEmailsTableName: process.env.SUPABASE_EMAILS_TABLE_NAME ?? '',
  supabaseDevOpsEventTableName: process.env.SUPABASE_DEVOPS_EVENT_TABLE_NAME ?? '',

  emailUser: process.env.EMAIL_USER ?? '',
  emailPass: process.env.EMAIL_PASS ?? '',
  emailHost: process.env.EMAIL_HOST ?? '',
  emailPort: process.env.EMAIL_PORT ?? '',

  iban: process.env.IBAN ?? '',

  frontendUrl: process.env.FRONTEND_URL ?? '',

  nodeEnv: process.env.NODE_ENV ?? 'development',
};
