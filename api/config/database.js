module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3305),
      database: env('DATABASE_NAME', 'pulidonow'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Caracas2020#*52'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
