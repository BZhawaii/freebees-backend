var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('users')
    .select()
    .then(usersGot => {
      res.render('users', { usersGot: usersGot });
    })
});

module.exports = router;
