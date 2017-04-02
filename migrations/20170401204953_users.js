
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table) => {
    table.increments();
    table.text('')
  })

};

exports.down = function(knex, Promise) {

};
