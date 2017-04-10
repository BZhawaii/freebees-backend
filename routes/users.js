var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

function validForm(form) {
  console.log(form.username, form.password);
  return typeof form.username == 'string' &&
          form.username.trim() != '';
}

// Get all users Get all users Get all users Get all users Get all users
router.get('/', function(req, res, next) {
  knex('users')
    .select()
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all users'
        });  //closes json
    })  //closes then
    .catch(console.error)
});  //closes router.get
// End of Get all users End of Get all users End of Get all users End of Get all users


// Get a single user Get a single user Get a single user Get a single user Get a single user
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  if(typeof id != 'undefined') {
    knex('users')
    .select()
    .where('id', id)
    .first()
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved single user'
        });  //closes json
    })  //closes then
    .catch(console.error)
  }
});  //closes router.get
// End of Get a single userEnd of Get a single userEnd of Get a single user


// Create a user Create a user Create a user Create a user Create a user
router.post('/', function(req, res, next) {
  console.log(req.body);
  if(validForm(req.body)) {
    const user = {
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age,
      sex: req.body.sex
    }
    knex('users')
      .insert(user, 'id')
      .then(function () {
         res.status(200)
           .json({
             status: 'success',
             message: 'Inserted one user'
           });
       })
       .catch(console.error);
  }
})  //closes router.post
// End of Create a user End of Create a user End of Create a user


// Update a user Update a user Update a user Update a user Update a user
router.put('/:id', (req, res) => {
  console.log(req.body);
  if(validForm(req.body)) {
    const user = {
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age,
      sex: req.body.sex
    }
    knex('users')
    .where('id', parseInt(req.params.id))
      .update(user, 'id')
      .then(function () {
         res.status(200)
           .json({
             status: 'success',
             message: 'Updated user'
           });
       })
      .catch(console.error);
  }
});  //closes router.put
// End of Update a user End of Update a user


// Delete a user Delete a user Delete a user Delete a user
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if(typeof id != 'undefined') {
    knex('users')
      .where('id', id)
      .del()
      .then(function (result) {
         /* jshint ignore:start */
         res.status(200)
           .json({
             status: 'success',
             message: `Removed user`
           });
         /* jshint ignore:end */
       })
       .catch(console.error);
  }
})  //closes router.delete
// End of  Delete a user End of  Delete a user End of  Delete a user

module.exports = router;
