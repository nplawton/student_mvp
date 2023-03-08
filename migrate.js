const { Pool } = require('pg');

const pool = require('./dbConn');

//foreign keys go last
pool.query(`CREATE TABLE IF NOT EXISTS type (
    type_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(200) NOT NULL,
    description text NOT NULL)`, 
    (err, type) => {
        if (err){
            console.log("CREATE TABLE type failed");
            console.log(err);
        }else{
            console.log("Type table created sucessfully");
        }
});

pool.query(`CREATE TABLE IF NOT EXISTS creature (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(200) NOT NULL,
    alignment_id INTEGER NOT NULL,
    type_id INTEGER FOREIGN KEY NOT NULL,
    health INTEGER NOT NULL,
    exp INTEGER NOT NULL,
    chal INTEGER,
    descrip_id INTEGER NOT NULL,
    stat_id INTEGER NOT NULL,
    attack_id INTEGER NOT NULL,
    spattack_id INTEGER NOT NULL)`, 
    (err, creature) => {
        if (err){
            console.log("CREATE TABLE creature failed");
            console.log(err);
        }else{
            console.log("Creatures table created sucessfully");
        }
});

//close connection
pool.end();