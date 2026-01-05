import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
    await knex('courses').insert([
        { name: 'Engenharia da Computação' },
        { name: 'TypeScript' },
        { name: 'Express.js' },
        { name: 'Query Builder com Knex.js' },
        { name: 'Banco de Dados SQL' }
    ])
}
