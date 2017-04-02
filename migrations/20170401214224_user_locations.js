

exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('user_locations', function(table){
    table.increments();
    table.integer('user_id').references("user", "id");
    table.integer('location_id').references("location", "id");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_locations');
};
