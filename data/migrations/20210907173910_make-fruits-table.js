
exports.up = async function(knex) {
  await knex.schema.createTable('fruits', table => {})
}

exports.down = function(knex) {

};
