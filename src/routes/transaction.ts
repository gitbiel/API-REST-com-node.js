import { FastifyInstance } from 'fastify';
import knex from 'knex';

export async function transactionRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transactions = await knex('transactions')
      .where('amount', 100)
      .select('*');

    return transactions;
  });
}
