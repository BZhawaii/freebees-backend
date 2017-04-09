require('dotenv').config({silent:true});



module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/freebees'
  },  //closes development
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }  //closes productions
};   //closes module.exports
