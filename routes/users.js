var express = require('express');
var router = express.Router();

const knex = require('../db/knex');

function validForm(form) {
  console.log(form.username, form.password);
  return typeof form.username == 'string' &&
          form.username.trim() != '';
        //  typeof form.age == 'number' &&
        //  form.password == 'string' &&
        //  form.password.trim() != '';
}

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('users')
    .select()
    .then(usersGot => {
      res.render('users', { usersGot: usersGot });
    })
});  //closes router.get

router.get('/new', function(req, res, next) {
  res.render('newForm');
});  //closes router.get

router.post('/', function(req, res, next) {
  console.log(req.body);
  if(validForm(req.body)) {
    const user = {
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      sex: req.body.sex
    }
    knex('users')
      .insert(user, 'id')
      .then(ids => {
        const id = ids[0];
        res.redirect(`/users/${id}`);
      })
  } else {
    res.status(500);
    res.render('error', {
      message: 'Invalid user'
    });
  }
});  //closes router.get


module.exports = router;
