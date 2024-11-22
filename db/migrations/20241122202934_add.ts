import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', (table) => {
    table.uuid('session_id').after('id').index();
  });
}

export async function down(Knex: Knex): Promise<void> {
  await Knex.schema.dropTable('session_id');
}
