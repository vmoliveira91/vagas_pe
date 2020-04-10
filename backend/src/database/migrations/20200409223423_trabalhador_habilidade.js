exports.up = function(knex) {
    return knex.schema.createTable('trabalhador_habilidade', function(table) {
        table.increments();
        table.integer('trabalhador_id').notNullable();
        table.integer('habilidade_id').notNullable();
        table.integer('nivel_id').notNullable();
        table.integer('ativo').notNullable();
        table.foreign('trabalhador_id').references('trabalhador.id');
        table.foreign('habilidade_id').references('habilidade.id');
        table.foreign('nivel_id').references('nivel.id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('trabalhador_habilidade');
};