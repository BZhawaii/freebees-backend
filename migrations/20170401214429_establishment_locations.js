

exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('establishment_locations', function(table){
    table.increments();
    table.integer('establishment').references("establishment", "id");
    table.integer('location').references("location", "id");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('establishment_locations');
};
