module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfgh6tpgp3jjsed5g540-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'podcast'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'kKUTuhAZBrhrm7AXfwHxYjk1lzi5FP4W'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
