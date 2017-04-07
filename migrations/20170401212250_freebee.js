

exports.up = function(knex, Promise) {
  return knex.schema.createTable('freebee', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('type').notNullable();
    table.string('category').notNullable();
    table.date('date').notNullable();
    table.time('startTime').notNullable();
    table.time('stopTime').notNullable();
    table.integer('likes');
    table.integer('claims');
    table.integer('establishment_id').references("establishment", "id");
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('freebee');
};
