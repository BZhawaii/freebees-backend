

exports.up = function(knex, Promise) {
  return knex.schema.createTable('freebee', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.integer('type').notNullable();
    table.integer('category').notNullable();
    table.date('date').notNullable();
    table.time('time').notNullable();
    table.integer('establishment_id').references("establishment", "id");
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('freebee');
};
