const pg = require('pg');
require('dotenv').config();

const dbSettings = {
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    host: process.env.HOST_DB,
    database: process.env.NAME_DB,
    port: process.env.PORT_DB
}

const dbConnection = async() => {
    try {
        
        await new pg.Pool(dbSettings).connect();

        console.log( 'DB OnLine' );        
    } catch (error) {
        console.log( error );
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }
}

module.exports = {
    dbConnection
}