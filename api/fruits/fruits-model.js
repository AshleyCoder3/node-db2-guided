const db = require('../../data/db-config')

async function getAll() {
  return db
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
