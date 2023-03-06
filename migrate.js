const { Pool } =require('pg');

const pool = require('./dbConn');

pool.query(`CREATE TABLE IF NOT EXISTS creature (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    ac integer,
    hp integer,
    stre integer,
    dex integer,
    cons integer,
    intel integer,
    wis integer,
    charisma integer,
    chal integer,
    attack  text,
    special text,
    description text,
    mon_img)`, (err, data) => {
        if (err){
            console.log("CREATE TABLE creature failed");
        }else{
            console.log("Creatures table created sucessfully");
        }
    })