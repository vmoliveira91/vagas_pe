exports.up = function(knex) {
    return knex.schema.createTable('vaga', function(table) {
        table.increments();
        table.string('descricao').notNullable();
        table.float('salario').notNullable();
        table.datetime('data_cadastro').notNullable();
        table.datetime('data_validade').notNullable();
        table.integer('funcao_id').notNullable();
        table.integer('empregador_id').notNullable();
        table.integer('ativo').notNullable();
        table.foreign('funcao_id').references('funcao.id');
        table.foreign('empregador_id').references('empregador.empregador_id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('vaga');
};