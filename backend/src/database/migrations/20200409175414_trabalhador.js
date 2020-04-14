exports.up = function(knex) {
    return knex.schema.createTable('trabalhador', function(table) {
        table.increments();
        table.string('nome').notNullable();
        table.string('cpf').notNullable();
        table.string('rg').notNullable();
        table.string('endereco').notNullable();
        table.string('nacionalidade').notNullable();
        table.string('telefone').notNullable();
        table.string('email').notNullable();
        table.string('sexo').notNullable();
        table.date('data_nascimento').notNullable();
        table.date('data_cadastro').notNullable();
        table.date('data_validade').notNullable();
        table.string('status').notNullable();
        table.integer('ativo').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('trabalhador');
};