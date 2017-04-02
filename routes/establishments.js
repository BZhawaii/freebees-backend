var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('establishment')
    .select()
    .then(establishmentsGot => {
      res.render('establishments', { establishmentsGot: establishmentsGot });
    })
});

module.exports = router;
