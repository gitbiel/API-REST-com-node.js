import fastify from 'fastify';
import knex from 'knex';

const app = fastify();

app.get('/hello', async () => {
  const transaction = await knex('transactions')
    .where('amount', 100)
    .select('*');

  return transaction;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!');
  });
