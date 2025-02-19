module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337), // Ensure this is reading the dynamic port from Render
  app: {
    keys: env.array('APP_KEYS', ['yourRandomAppKey1', 'yourRandomAppKey2']),
  },
});

