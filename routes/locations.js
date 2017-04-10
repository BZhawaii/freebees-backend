var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

function validForm(form) {
  return typeof form.name == 'string' &&
          form.name.trim() != '';
}

// Get all locations Get all locations Get all locations Get all locations
router.get('/', function(req, res, next) {
  knex('location')
    .select()
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all locations'
        });  //closes json
    })  //closes then
    .catch(console.error)
});  //closes router.get
// End of Get all locations End of Get all locations End of Get all locations


// Get a single location Get a single location Get a single location
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  if(typeof id != 'undefined') {
    knex('location')
    .select()
    .where('id', id)
    .first()
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved single location'
        });  //closes json
    })  //closes then
    .catch(console.error)
  }
});  //closes router.get
// End of  Get a single location End of  Get a single location End of  Get a single location


// Create a location Create a location Create a location Create a location
router.post('/', (req, res) => {
  console.log(req.body);
  if(validForm(req.body)) {
    const locations = {
      name: req.body.name,
    }
    knex('location')
      .insert(locations, 'id')
      .then(function () {
         res.status(200)
           .json({
             status: 'success',
             message: 'Inserted one location'
           });
       })
       .catch(console.error);
  }
})  //closes router.post
// End of Create a location End of Create a location End of Create a location


// Update a location Update a location Update a location Update a location
router.put('/:id', (req, res) => {
  console.log(req.body);
  if(validForm(req.body)) {
    const location = {
      name: req.body.name,
    }
    knex('location')
    .where('id', req.params.id)
      .update(location, 'id')
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
// End of Update a location End of Update a location End of Update a location


// Delete a location Delete a location Delete a location Delete a location
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if(typeof id != 'undefined') {
    knex('location')
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
// End of Delete a location End of Delete a location End of Delete a location


module.exports = router;
