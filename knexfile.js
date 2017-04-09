// require('dotenv').config({silent:true});



module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/freebees'
  },  //closes development
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }  //closes productions
};   //closes module.exports
