var express = require('express');
var router = express.Router();

const knex = require('../db/knex');


function validForm(form) {
  return typeof form.name == 'string' &&
          form.name.trim() != '';
}
/* GET home page. */
router.get('/', function(req, res, next) {
  knex('location')
    .select()
    .then(locationsGot => {
      res.render('locations', { locationsGot: locationsGot });
    })
});  //closes router.get

router.get('/new', function(req, res, next) {
  res.render('locationsForm');
});  //closes router.GET

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  if(typeof id != 'undefined') {
    knex('location')
    .select()
    .where('id', id)
    .first()
    .then(location => {
      res.render('locationsSingle', location);
    })
  } else {
    res.status(500);
    res.render('error', {
      message: 'Invalid id'
    })
  }
});  //closes router.get

router.post('/', (req, res) => {
  console.log(req.body);
  if(validForm(req.body)) {
    const locations = {
      name: req.body.name,
    }
    knex('location')
      .insert(locations, 'id')
      .then(ids => {
        const id = ids[0];
        res.redirect(`/locations/${id}`);
      })
  } else {
    res.status(500);
    res.render('error', {
      message: 'Invalid user'
    });
  }
})  //closes router.post

router.get('/:id/edit', (req, res) => {
  const id = req.params.id;
  if(typeof id != 'undefined') {
    knex('location')
    .select()
    .where('id', id)
    .first()
    .then(location => {
      res.render('locationsEdit', location);
    })
  } else {
    res.status(500);
    res.render('error', {
      message: 'Invalid id'
    })
  }
})  //closes router.get

router.put('/:id', (req, res) => {
  console.log(req.body);
  if(validForm(req.body)) {
    const location = {
      name: req.body.name,
    }
    knex('location')
    .where('id', req.params.id)
      .update(location, 'id')
      .then(ids => {
        res.redirect(`/locations/${req.params.id}`);
      })
  } else {
    res.status(500);
    res.render('error', {
      message: 'Invalid user'
    });
  }
});  //closes router.put

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  if(typeof id != 'undefined') {
    knex('location')
      .where('id', id)
      .del()
      .then(() => {
        res.redirect('/locations')
      })
  } else {
    res.status(500);
    res.render('error', {
      message: 'Invalid id'
    });
  }
})  //closes router.delete


module.exports = router;
