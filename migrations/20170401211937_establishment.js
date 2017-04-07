

exports.up = function(knex, Promise) {
  return knex.schema.createTable('establishment', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('password').notNullable();
    table.string('email').notNullable();
    table.string('www');
    table.boolean('lockedOut').defaultTo(false);
    table.string('address');
    table.string('lat');
    table.string('long');
    table.string('imageURL');
    table.text('about');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('establishment');
};
