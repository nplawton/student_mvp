const { Pool } =require('pg');

const pool = require('./dbConn');

pool.query(`CREATE TABLE IF NOT EXISTS creature (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    alignment VARCHAR(50),
    hp integer,
    xp integer,
    speed text,
    attack  text,
    special text,
    description text,
    information text,
    size VARCHAR(50),
    ac integer,
    stre integer,
    cons integer,
    dex integer,
    intel integer,
    wis integer,
    charisma integer,
    chal integer,
    type text)`, (err, data) => {
        if (err){
            console.log("CREATE TABLE creature failed");
        }else{
            console.log("Creatures table created sucessfully");
        }
    })