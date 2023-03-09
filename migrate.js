const { Pool } = require('pg');

const pool = require('./dbConn');

pool.query(`DROP TABLE IF EXISTS type, creature`, (err, res) => {
    if (err) {
      console.log('Error dropping tables:', err);
    } else {
      console.log('Tables dropped!');
    }
});


//foreign keys go last
setTimeout(() => {
    pool.query(`CREATE TABLE IF NOT EXISTS type (
        type_id SERIAL PRIMARY KEY NOT NULL,
        t_name VARCHAR(200) NOT NULL,
        t_description text NOT NULL)`, 
        (err, type) => {
            if (err){
                console.log("CREATE TABLE type failed");
                console.log(err);
            }else{
                console.log("Type table created sucessfully");
            }
    });
}, 2000);

setTimeout(() => {
    pool.query(`CREATE TABLE IF NOT EXISTS descrip (
        descrip_id SERIAL PRIMARY KEY NOT NULL,
        size text,
        speed text,
        d_descrip text,
        info text,
        mon_img text)`, (err, descrip) => {
            if (err){
                console.log("CREATE TABLE creature description failed");
                console.log(err);
            }else{
                console.log("Creatures Description table created sucessfully");
            }
        });
}, 2000);

setTimeout(() => {
    pool.query(`CREATE TABLE IF NOT EXISTS creature (
        id SERIAL PRIMARY KEY NOT NULL,
        c_name VARCHAR(200) NOT NULL,
        alignment_id INTEGER NOT NULL,
        type_id INTEGER NOT NULL REFERENCES type (type_id),
        health INTEGER NOT NULL,
        exp INTEGER NOT NULL,
        chal INTEGER,
        descrip_id INTEGER NOT NULL REFERENCES descrip (descrip_id),
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
}, 8000);