const db = require('../../data/db-config')

async function getAll() {
  // select * from fruits;
  return db('fruits')
}

async function getBy(id) {
  // select * from fruits where id = 7;
  return db('fruits').where('id', id).first()
}

async function postNew(fruit) {
  // insert into fruits (name, avgWeightOz)
  // values ('mellon', 20);
  const ids = await db('fruits').insert([fruit1, fruit2])
}

module.exports = {
  getAll,
  getBy,
  postNew,
}
