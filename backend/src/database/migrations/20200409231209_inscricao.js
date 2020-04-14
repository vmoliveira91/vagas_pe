exports.up = function(knex) {
    return knex.schema.createTable('inscricao', function(table) {
        table.increments();
        table.date('data_inscricao').notNullable();
        table.integer('vaga_id').notNullable();
        table.integer('trabalhador_id').notNullable();
        table.integer('situacao_id').notNullable();
        table.integer('ativo').notNullable();
        table.foreign('vaga_id').references('id').inTable('vaga');
        table.foreign('trabalhador_id').references('id').inTable('trabalhador');
        table.foreign('situacao_id').references('id').inTable('situacao');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('inscricao');
};