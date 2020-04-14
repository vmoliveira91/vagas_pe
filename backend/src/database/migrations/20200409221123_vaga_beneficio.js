exports.up = function(knex) {
    return knex.schema.createTable('vaga_beneficio', function(table) {
        table.increments();
        table.integer('vaga_id').notNullable();
        table.integer('beneficio_id').notNullable();
        table.string('valor').notNullable();
        table.integer('ativo').notNullable();
        table.foreign('vaga_id').references('id').inTable('vaga');
        table.foreign('beneficio_id').references('id').inTable('beneficio');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('vaga_beneficio');
};
