const db = require('../../data/db-config')

async function getAll() {
  // select * from fruits;
  return db('fruits')
}

async function getBy(id) {
  // select * from fruits where id = 7;
  return db('fruits').where('id', id)
}

async function postNew(fruit) {
  return 'postNew'
}

module.exports = {
  getAll,
  getBy,
  postNew,
}
