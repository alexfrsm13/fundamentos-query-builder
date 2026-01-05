<p align="center">
  <img alt="Formação Node.js" src="https://storage.googleapis.com/star-lab/novo-site/formacoes/nodejs/node-icon.svg" width="100px" />
</p>

# Fundamentos de Query Builder com Knex.js

> Projeto focado na manipulação de bancos de dados SQL utilizando **Knex.js**. O objetivo foi abandonar as queries SQL puras ("raw") e utilizar a sintaxe fluida de um **Query Builder** para criar tabelas, relacionamentos e realizar operações de CRUD de forma programática e segura.


![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)


## 💻 Sobre o Projeto

Este projeto consiste em uma API para gerenciamento de **Cursos** e **Módulos**, onde um Curso pode ter vários Módulos (Relacionamento 1:N).

Diferente de projetos anteriores onde os dados eram salvos em memória ou JSON, aqui utilizamos o **SQLite3** como banco de dados relacional. O grande diferencial é o uso do **Knex.js** para gerenciar o esquema do banco através de **Migrations** e popular dados iniciais com **Seeds**.

### Principais Funcionalidades
- **Gerenciamento de Schema (Migrations):** Controle de versão do banco de dados (Criação de tabelas, alteração de colunas).
- **População de Dados (Seeds):** Scripts para inserir dados iniciais de teste automaticamente.
- **Relacionamentos:** Implementação de Foreign Keys entre `courses` e `course_modules`.
- **CRUD Completo:** Criação, Listagem, Atualização e Remoção de cursos e módulos.

## 🛠 Tech Stack

- **Node.js** (Runtime)
- **TypeScript** (Linguagem)
- **Express** (Framework Web)
- **Knex.js** (SQL Query Builder)
- **SQLite3** (Banco de Dados)

## ⚙️ Arquitetura de Banco de Dados

O projeto utiliza **Migrations** para evoluir o banco de dados de forma segura.

### Histórico de Migrations Criadas
1.  **`create-courses`**: Cria a tabela de cursos com `id`, `name` e `created_at`.
2.  **`add-updated-courses`**: Altera a tabela para adicionar a coluna `updated_at`.
3.  **`create-course-modules`**: Cria a tabela de módulos com **Foreign Key** apontando para cursos.

### Exemplo de Código (Migration com FK)
```typescript
export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('course_modules', (table) => {
        table.increments('id').primary()
        table.text('name').notNullable()
        // Relacionamento 1:N (Foreign Key)
        table.integer('course_id').notNullable().references('id').inTable('courses')
    })
}
```

## 🔌 Rotas da API

### Cursos (`/courses`)

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **GET** | `/courses` | Lista todos os cursos ordenados por nome. |
| **POST** | `/courses` | Cria um novo curso. |
| **PUT** | `/courses/:id` | Atualiza o nome de um curso e a data de `updated_at`. |
| **DELETE** | `/courses/:id` | Remove um curso. |

### Módulos (`/modules`)

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **GET** | `/modules` | Lista todos os módulos de todos os cursos. |
| **POST** | `/modules` | Cria um módulo vinculado a um curso (`course_id`). |
| **GET** | `/courses/:id/modules` | Lista apenas os módulos de um curso específico. |

#### Exemplo de Payload (Criar Módulo)

`POST /modules`

```json
{
  "name": "Introdução ao Knex",
  "course_id": 1
}
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js v18+
- NPM ou Yarn

### Passo a passo

1. **Clone o repositório e instale as dependências:**
```bash
$ git clone [https://github.com/alexfrsm13/fundamentos-query-builder.git](https://github.com/alexfrsm13/fundamentos-query-builder.git)
$ cd fundamentos-query-builder
$ npm install
```
2. **Execute as Migrations: Isso criará o arquivo database.db e as tabelas necessárias.**
```bash
$ npm run knex -- migrate:latest
```
3. **Execute os Seeds (Opcional): Isso populará o banco com cursos padrão (ex: 'Engenharia da Computação', 'TypeScript').**
```bash
$ npm run knex -- seed:run
```
4. **Inicie o Servidor:**
```bash
$ npm run dev
```
> O servidor rodará na porta 3333.

## 🧠 Aprendizados

Este módulo foi fundamental para entender como aplicações profissionais lidam com SQL:

- **Query Builder vs Raw SQL:** Como usar métodos como `.select()`, `.insert()` e `.where()` ao invés de escrever strings SQL puras, prevenindo SQL Injection e facilitando a manutenção.
- **Migrations:** A importância de versionar o banco de dados. Aprendi a criar (`up`) e desfazer (`down`) alterações na estrutura das tabelas.
- **Seeds:** Automação da inserção de dados para ambiente de desenvolvimento.
- **SQLite & Foreign Keys:** Configuração específica (`PRAGMA foreign_keys = ON`) para garantir a integridade referencial no SQLite.

## 🦸 Autor

Feito com 💜 por **Alex**.

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/alex-fernando-0542aa279/)]([alex-fernando-0542aa279](https://www.linkedin.com/in/alex-fernando-0542aa279/))

## 📝 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.


```
MIT License

Copyright (c) 2026 Alex Fernando

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```