exports.up = function(knex) {
    return knex.schema.createTable('usuario', function(table) {
        table.increments();
        table.string('login').notNullable();
        table.string('nome_usuario').notNullable();
        table.string('senha').notNullable();
        table.integer('tipo').notNullable();
        table.integer('ativo').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuario');
};