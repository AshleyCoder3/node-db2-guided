const db = require('../../data/db-config')

async function getAll() {
  // select * from fruits;
  return db('fruits').select('name', 'ave')
}

async function getBy(id) {
  return 'getBy'
}

async function postNew(fruit) {
  return 'postNew'
}

module.exports = {
  getAll,
  getBy,
  postNew,
}
