const { Pool } =require('pg');

const pool = require('./dbConn');

pool.query(`CREATE TABLE IF NOT EXISTS creature (
    id SERIAL PRIMARY KEY NOT NULL,
    name text NOT NULL,
    ac INTEGER,
    hp INTEGER,
    stre INTEGER,
    dex INTEGER,
    cons INTEGER,
    intel INTEGER,
    wis INTEGER,
    charisma INTEGER,
    chal INTEGER,
    attack  text,
    special text,
    description text,
    mon_img text)`, (err, data) => {
        if (err){
            console.log("CREATE TABLE creature failed");
        }else{
            console.log("Creatures table created sucessfully");
        }
    })