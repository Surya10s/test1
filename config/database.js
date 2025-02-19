module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db.jlrwtjeulwottwrlxbhd.supabase.co'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 's9361109264'),
      ssl: {
        rejectUnauthorized: false,  // Disable certificate validation
      },
      connectionTimeout: 30000, // 30 seconds timeout
    },
  },
});
