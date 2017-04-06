var express = require('express');
var router = express.Router();

const knex = require('../db/knex');



function validForm(form) {
  return typeof form.name == 'string' &&
          form.name.trim() != '';
}  //closes validForm

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('freebee')
    .select()
    .then(freebeesGot => {
      res.render('freebees', { freebeesGot: freebeesGot });
    })
});  //closes router.get

router.get('/new', function(req, res, next) {
  res.render('freebeesForm');
});  //closes router.GET

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  if(typeof id != 'undefined') {
    knex('freebee')
    .select()
    .where('id', id)
    .first()
    .then(freebee => {
      res.render('freebeesSingle', freebee);
    })
  } else {
    res.status(500);
    res.render('error', {
      message: 'Invalid id'
    })
  }
});  //closes router.get

router.post('/', (req, res) => {
  if(validForm(req.body)) {
    const freebee = {
      name: req.body.name,
      type: req.body.type,
      category: req.body.category,
      date: req.body.date,
      time: req.body.time
    }
    knex('freebee')
      .insert(freebee, 'id')
      .then(ids => {
        const id = ids[0];
        res.redirect(`/freebees/${id}`);
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
    knex('freebee')
    .select()
    .where('id', id)
    .first()
    .then(freebee => {
      res.render('freebeesEdit', freebee);
    })
  } else {
    res.status(500);
    res.render('error', {
      message: 'Invalid id'
    })
  }
})  //closes router.get

router.put('/:id', (req, res) => {
  if(validForm(req.body)) {
    const freebee = {
      name: req.body.name,
      type: req.body.type,
      category: req.body.category,
      date: req.body.date,
      time: req.body.time
    }
    knex('freebee')
    .where('id', req.params.id)
      .update(freebee, 'id')
      .then(ids => {
        res.redirect(`/freebees/${req.params.id}`);
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
    knex('freebee')
      .where('id', id)
      .del()
      .then(() => {
        res.redirect('/freebees')
      })
  } else {
    res.status(500);
    res.render('error', {
      message: 'Invalid id'
    });
  }
})  //closes router.delete

module.exports = router;
