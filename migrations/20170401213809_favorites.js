
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('favorites', function(table){
    table.increments();
    table.integer('user_id').references("user", "id");
    table.integer('establishment_id').references("establishment", "id");
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('favorites');

};
