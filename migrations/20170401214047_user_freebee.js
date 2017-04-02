

exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('user_freebee', function(table){
    table.increments();
    table.integer('user_id').references("user", "id");
    table.integer('freebee_id').references("freebee", "id");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_freebee');
};
