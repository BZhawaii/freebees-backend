
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('username').notNullable();
    table.string('firstName');
    table.string('lastName');
    table.string('password').notNullable();
    table.string('email').notNullable();
    table.boolean('lockedOut').defaultTo(false);
    table.string('sex');
    table.integer('age');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
