
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('location').del()
    .then(function () {
      const locals = [{
        name: 'Denver',
      }, {
        name: 'Boulder',
      }, {
        name: 'Fort Collins',
      }, {
        name: 'Colorado Springs',
      }]

      return knex('location').insert(locals);
    });  //closes return knex
};  //closes exports.see
