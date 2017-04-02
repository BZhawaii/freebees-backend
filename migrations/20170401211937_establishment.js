

exports.up = function(knex, Promise) {
  return knex.schema.createTable('establishment', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('password').notNullable();
    table.string('address');
    table.string('imageURL');
    table.text('about');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('establishment');
};
