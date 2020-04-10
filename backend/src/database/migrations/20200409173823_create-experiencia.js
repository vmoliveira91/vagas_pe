exports.up = function(knex) {
    return knex.schema.createTable('experiencia', function(table) {
        table.increments();
        table.string('descricao').notNullable();
        table.integer('ativo').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('experiencia');
};