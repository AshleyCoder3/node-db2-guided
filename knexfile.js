//1
module.exports = {
    development: { // db for dev
        client: 'sqlite3',
        connection: {
            filename: './data/produce.db3'
        },
        useNullAsDefault: true
    },
    production: {
        //ect
    },
    testing: {
        //ect
    }
};