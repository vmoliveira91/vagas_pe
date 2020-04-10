exports.up = function(knex) {
    return knex.schema.createTable('inscricao', function(table) {
        table.increments();
        table.datetime('data_inscricao').notNullable();
        table.integer('vaga_id').notNullable();
        table.integer('trabalhador_id').notNullable();
        table.integer('situacao_id').notNullable();
        table.integer('ativo').notNullable();
        table.foreign('vaga_id').references('vaga.id');
        table.foreign('trabalhador_id').references('trabalhador.id');
        table.foreign('situacao_id').references('situacao.id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('inscricao');
};