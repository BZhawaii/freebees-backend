var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

function validForm(form) {
  return typeof form.name == 'string' &&
          form.name.trim() != '';
}  //closes validForm


// Get all freebees Get all freebees Get all freebees Get all freebees Get all freebees
router.get('/', function(req, res, next) {
  knex('freebee')
    .select( '*', 'freebee.name AS freebee_name')
    .join('establishment', 'freebee.establishment_id', 'establishment.id')
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all freebees'
        });  //closes json
    })  //closes then
    .catch(console.error)
});  //closes router.get
// End of Get all freebees End of Get all freebees End of Get all freebees



// Get a single freebee Get a single freebee Get a single freebee Get a single freebee
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  if(typeof id != 'undefined') {
    knex('freebee')
    .select()
    .where('id', id)
    .first()
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved single freebee'
        });  //closes json
    })  //closes then
    .catch(console.error)
  }
});  //closes router.get
// End of Get a single freebee End of Get a single freebee End of Get a single freebee



// Update a freebee Update a freebee Update a freebee Update a freebee
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
      .then(function () {
         res.status(200)
           .json({
             status: 'success',
             message: 'Updated freebee'
           });
       })
      .catch(console.error);
  }
});  //closes router.put
// End of  Update a freebee End of  Update a freebee End of  Update a freebee


// Delete freebee Delete freebee Delete freebee Delete freebee Delete freebee
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if(typeof id != 'undefined') {
    knex('freebee')
      .where('id', id)
      .del()
      .then(function (result) {
         /* jshint ignore:start */
         res.status(200)
           .json({
             status: 'success',
             message: `Removed freebee`
           });
         /* jshint ignore:end */
       })
       .catch(console.error);
  }
  })  //closes router.delete
// End of  Delete freebee End of  Delete freebee End of  Delete freebee End of  Delete freebee


module.exports = router;
