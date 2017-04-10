var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

function validForm(form) {
  return typeof form.name == 'string' &&
          form.name.trim() != '';
}

// Get all establishments Get all establishments Get all establishments Get all establishments
router.get('/', function(req, res, next) {
  knex('establishment')
    .select()
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all establishments'
        });  //closes json
    })  //closes then
    .catch(console.error)
});  //closes router.get
// End of Get all establishments End of Get all establishments End of Get all establishments


// Get a single establishment Get a single establishment Get a single establishment
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  if(typeof id != 'undefined') {
    knex('establishment')
    .select()
    .where('id', id)
    .first()
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved single establishment'
        });  //closes json
    })  //closes then
    .catch(console.error)
  }
});  //closes router.get
// end of Get a single establishment end of Get a single establishment end of Get a single establishment


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


// Create an establishment Create an establishment Create an establishment
router.post('/', (req, res) => {
  console.log(req.body);
  if(validForm(req.body)) {
    console.log('valid form');
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
      .then(function () {
         res.status(200)
           .json({
             status: 'success',
             message: 'Inserted one establishment'
           });
       })
       .catch(console.error);
  }
})  //closes router.post
// end of Create an establishment end of Create an establishment end of Create an establishment


// Update an establishment  Update an establishment Update an establishment Update an establishment
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
    .where('id', parseInt(req.params.id))
      .update(establishment, 'id')
      .then(function () {
         res.status(200)
           .json({
             status: 'success',
             message: 'Updated establishment'
           });
       })
      .catch(console.error);
  }
});  //closes router.put
// End of Update an establishment End of Update an establishment End of Update an establishment


// Delete an establishment Delete an establishment Delete an establishment Delete an establishment
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if(typeof id != 'undefined') {
    knex('establishment')
      .where('id', id)
      .del()
      .then(function (result) {
         /* jshint ignore:start */
         res.status(200)
           .json({
             status: 'success',
             message: `Removed establishment`
           });
         /* jshint ignore:end */
       })
       .catch(console.error);
  }
})  //closes router.delete
// End of Delete an establishment End of Delete an establishment End of Delete an establishment


module.exports = router;
