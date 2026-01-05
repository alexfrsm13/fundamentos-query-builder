import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    // Altere a tabela courses
    await knex.schema.alterTable('courses', (table) => {
        // Crie uma coluna do tipo timestamp chamada updated_at após a coluna created_at
        table.timestamp('updated_at').defaultTo(knex.fn.now()).after('created_at')
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('courses', (table) => {
        table.dropColumn('updated_at')
    })
}

