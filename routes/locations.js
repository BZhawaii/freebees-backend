var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('location')
    .select()
    .then(locationsGot => {
      res.render('locations', { locationsGot: locationsGot });

    })
});

module.exports = router;
