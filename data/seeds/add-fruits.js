
exports.seed = async function (knex) {
  // Deletes ALL existing entries AND reset the primary keys
  await knex('fruits').truncate()
  await knex('fruits').insert([
    { name: 'orange' },
    { name: 'orange' },
    { name: 'orange' }
  ]);
};
