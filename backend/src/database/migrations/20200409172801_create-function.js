exports.up = function(knex) {
    return knex.schema.createTable('funcao', function(table) {
        table.increments();
        table.string('nome').notNullable();
        table.string('sigla').notNullable();
        table.integer('ativo').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('funcao');
};