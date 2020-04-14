exports.up = function(knex) {
    return knex.schema.createTable('trabalhador_habilidade', function(table) {
        table.increments();
        table.integer('trabalhador_id').notNullable();
        table.integer('habilidade_id').notNullable();
        table.integer('nivel_id').notNullable();
        table.integer('ativo').notNullable();
        table.foreign('trabalhador_id').references('id').inTable('trabalhador');
        table.foreign('habilidade_id').references('id').inTable('habilidade');
        table.foreign('nivel_id').references('id').inTable('nivel');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('trabalhador_habilidade');
};