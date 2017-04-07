var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

function validForm(form) {
  return typeof form.name == 'string' &&
          form.name.trim() != '';
}

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('establishment')
    .select()
    .then(establishmentsGot => {
      res.render('establishments', { establishmentsGot: establishmentsGot });
    })
});  //closes router.get

router.get('/new', function(req, res, next) {
  res.render('establishmentsForm');
});  //closes router.get

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  if(typeof id != 'undefined') {
    knex('establishment')
    .select()
    .where('id', id)
    .first()
    .then(establishment => {
      res.render('establishmentsSingle', establishment);
    })
  } else {
    res.status(500);
    res.render('error', {
      message: 'Invalid id'
    })
  }
});  //closes router.get

router.get('/:id/freebees', function(req, res, next) {
  const ids = {
    id: req.params.id
  }
  console.log('This is the id', ids);
  res.render('freebeesForm', ids);
})  //closes router.get

router.post('/:id/freebees/new', (req, res, next) => {
  console.log('id from freebees', req.params.id);
  if(validForm(req.body)) {
    const freebee = {
      name: req.body.name,
      type: req.body.type,
      category: req.body.category,
      date: req.body.date,
      startTime: req.body.startTime,
      stopTime: req.body.stopTime,
      establishment_id: req.params.id
    }
    console.log('this is freebee', freebee);
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

router.post('/', (req, res) => {
  console.log(req.body);
  if(validForm(req.body)) {
    const establishment = {
      name: req.body.name,
      password: req.body.password,
      address: req.body.address,
      about: req.body.about,
      email: req.body.email,
      www: req.body.www,
      imageURL: req.body.imageURL
    }
    knex('establishment')
      .insert(establishment, 'id')
      .then(ids => {
        const id = ids[0];
        res.redirect(`/establishments/${id}`);
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
    knex('establishment')
    .select()
    .where('id', id)
    .first()
    .then(establishment => {
      res.render('establishmentsEdit', establishment);
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
    const establishment = {
      name: req.body.name,
      password: req.body.password,
      address: req.body.address,
      imageURL: req.body.imageURL,
      about: req.body.about
    }
    knex('establishment')
    .where('id', req.params.id)
      .update(establishment, 'id')
      .then(ids => {
        res.redirect(`/establishments/${req.params.id}`);
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
    knex('establishment')
      .where('id', id)
      .del()
      .then(() => {
        res.redirect('/establishments')
      })
  } else {
    res.status(500);
    res.render('error', {
      message: 'Invalid id'
    });
  }
})  //closes router.delete

module.exports = router;
