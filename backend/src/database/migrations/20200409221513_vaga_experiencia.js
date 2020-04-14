exports.up = function(knex) {
    return knex.schema.createTable('vaga_experiencia', function(table) {
        table.increments();
        table.integer('vaga_id').notNullable();
        table.integer('experiencia_id').notNullable();
        table.integer('tempo_id').notNullable();
        table.integer('ativo').notNullable();
        table.foreign('vaga_id').references('id').inTable('vaga');
        table.foreign('experiencia_id').references('id').inTable('experiencia');
        table.foreign('tempo_id').references('id').inTable('tempo');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('vaga_experiencia');
};