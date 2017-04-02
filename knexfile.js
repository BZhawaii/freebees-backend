module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/freebees'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
