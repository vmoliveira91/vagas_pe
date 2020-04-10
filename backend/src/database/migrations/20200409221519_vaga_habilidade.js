exports.up = function(knex) {
    return knex.schema.createTable('vaga_habilidade', function(table) {
        table.increments();
        table.integer('vaga_id').notNullable();
        table.integer('habilidade_id').notNullable();
        table.integer('nivel_id').notNullable();
        table.integer('ativo').notNullable();
        table.foreign('vaga_id').references('vaga.id');
        table.foreign('habilidade_id').references('habilidade.id');
        table.foreign('nivel_id').references('nivel.id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('vaga_habilidade');
};