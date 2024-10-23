import { Knex } from 'knex';

export async function up(Knex: Knex): Promise<void> {
  await Knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary();
    table.text('title').notNullable();
    table.decimal('amount', 10, 2).notNullable();
    table.timestamp('created_at').defaultTo(Knex.fn.now()).notNullable();
  });
}

export async function down(Knex: Knex): Promise<void> {
  await Knex.schema.dropTable('transactions');
}
