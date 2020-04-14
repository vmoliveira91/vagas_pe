exports.up = function(knex) {
    return knex.schema.createTable('empregador', function(table) {
        table.increments();
        table.string('cnpj').notNullable();
        table.string('nomeFantasia').notNullable();
        table.string('razaoSocial').notNullable();
        table.string('endereco').notNullable();
        table.string('telefone').notNullable();
        table.string('email').notNullable();
        table.date('data_cadastro').notNullable();
        table.date('data_validade').notNullable();
        table.integer('ativo').notNullable();    
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('empregador');
};
