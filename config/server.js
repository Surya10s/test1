module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 1337), // Ensure this is reading the dynamic port from Render
  app: {
    keys: env.array('APP_KEYS', ['yourRandomAppKey1', 'yourRandomAppKey2']),
  },
});

