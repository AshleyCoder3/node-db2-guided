
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('fruits').del();

  // Inserts seed entries
  await knex('fruits').insert([
    { name: 'orange', avgWeightOz: 2.6 },
    { name: 'pear', avgWeightOz: 2.6, delicious: 1 },
    { name: 'apple', avgWeightOz: 2.6, color: 'green' }
  ]);
};
