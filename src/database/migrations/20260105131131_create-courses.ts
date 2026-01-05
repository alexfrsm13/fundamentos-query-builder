import type { Knex } from 'knex'


export async function up(knex: Knex): Promise<void> {
    // Cria uma tabela chamada courses
    await knex.schema.createTable('courses', (table) => {
        // Adiciona uma coluna autoincrement com nome id, que é uma PK
        table.increments('id').primary(),
        // Adiciona uma coluna chamada name, do tipo TEXT e NOT NULL
        table.text('name').notNullable(),
        // Adiciona uma tabela do tipo Data e Hora, com nome created_at
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    // Irá deletar a tabela courses
    await knex.schema.dropTable('courses')
}

