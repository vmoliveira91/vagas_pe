exports.up = function(knex) {
    return knex.schema.createTable('trabalhador_experiencia', function(table) {
        table.increments();
        table.integer('trabalhador_id').notNullable();
        table.integer('experiencia_id').notNullable();
        table.integer('tempo_id').notNullable();
        table.integer('ativo').notNullable();
        table.foreign('trabalhador_id').references('id').inTable('trabalhador');
        table.foreign('experiencia_id').references('id').inTable('experiencia');
        table.foreign('tempo_id').references('id').inTable('tempo');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('trabalhador_experiencia');
};