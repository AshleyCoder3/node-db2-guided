//1
module.exports = {
    development: { // db for dev
        client: 'sqlite3',
        connection: {
            filename: './data/produce.db3'
        },
        useNullAsDefault: true,
        migrations: {
            directory: './data/migrations'
        },
        seeds: {
            directory: './data/seeds'
        }
    },
    production: {
        //ect
    },
    testing: {
        //ect
    }
};