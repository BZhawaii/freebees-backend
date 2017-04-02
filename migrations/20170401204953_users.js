
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
    table.increments();
    table.string('username').notNullable();
    table.string('firstName');
    table.string('lastName');
    table.string('password').notNullable();
    table.string('sex');
    table.integer('age');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
