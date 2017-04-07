
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      const userGroup = [{
        username: 'bz',
        firstName: 'Richard',
        lastName: 'Beese',
        password: '1234',
        email: 'this@that.com',
        age: 47,
        sex: 'M'
      }, {
        username: 'master',
        firstName: 'Arlene',
        lastName: 'Schmid',
        password: '1234',
        email: 'this@that.com',
        age: 42,
        sex: 'F'
      }, {
        username: 'mokes',
        firstName: 'Moku',
        lastName: 'Beese',
        password: '1234',
        email: 'this@that.com',
        age: 8,
        sex: 'F'
      }, {
        username: 'hops',
        firstName: 'Hapa',
        lastName: 'Beese',
        password: '1234',
        email: 'this@that.com',
        age: 2,
        sex: 'M'
      }]

      return knex('users').insert(userGroup);
    });  //closes return knex
};  //closes exports.see
