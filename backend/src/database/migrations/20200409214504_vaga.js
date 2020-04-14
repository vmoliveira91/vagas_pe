exports.up = function(knex) {
    return knex.schema.createTable('vaga', function(table) {
        table.increments();
        table.string('descricao').notNullable();
        table.float('salario').notNullable();
        table.date('data_cadastro').notNullable();
        table.date('data_validade').notNullable();
        table.integer('funcao_id').notNullable();
        table.integer('empregador_id').notNullable();
        table.integer('ativo').notNullable();
        table.foreign('funcao_id').references('id').inTable('funcao');
        table.foreign('empregador_id').references('id').inTable('empregador');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('vaga');
};