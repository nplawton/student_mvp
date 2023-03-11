const { Pool } = require('pg');

const pool = require('./dbConn');

pool.query(`DROP TABLE IF EXISTS type, creature, descrip`)
.then((data) => {
    console.log('Tables dropped!');
})
.catch((err) => {
    console.log('Error dropping tables:', err);
})
.then(pool.query(`CREATE TABLE IF NOT EXISTS type (
    type_id SERIAL PRIMARY KEY NOT NULL,
    t_name VARCHAR(200) NOT NULL,
    t_description text NOT NULL)`))
    .then((data) => {
        console.log("Creature Type table created sucessfully");
    })
    .catch((err) => {
        console.log('CREATE TABLE type failed', err);
    })
.then(pool.query(`CREATE TABLE IF NOT EXISTS descrip (
        descrip_id SERIAL PRIMARY KEY NOT NULL,
        size text,
        speed text,
        d_descrip text,
        info text,
        mon_img text)`))
    .then((data) => {
        console.log("Creature Descrip table created sucessfully");
    })
    .catch((err) => {
        console.log('CREATE TABLE descrip failed', err);
    })
.then(pool.query(`CREATE TABLE IF NOT EXISTS descrip (
    descrip_id SERIAL PRIMARY KEY NOT NULL,
    size text,
    speed text,
    d_descrip text,
    info text,
    mon_img text)`))
    .then((data) => {
        console.log("Creatures Description table created sucessfully");
    })
    .catch((err) => {
        console.log('CREATE TABLE creature description failed', err);
    })
.then(pool.query(`CREATE TABLE IF NOT EXISTS creature (
    id SERIAL PRIMARY KEY NOT NULL,
    mon_name VARCHAR(200) NOT NULL,
    alignment_id INTEGER NOT NULL,
    type_id INTEGER NOT NULL REFERENCES type (type_id),
    health INTEGER NOT NULL,
    exp INTEGER NOT NULL,
    chal INTEGER,
    descrip_id INTEGER NOT NULL REFERENCES descrip (descrip_id),
    stat_id INTEGER NOT NULL,
    attack_id INTEGER NOT NULL,
    spattack_id INTEGER NOT NULL)`))
    .then((data) => {
        console.log('Creatures table created sucessfully');
    })
    .catch((err) => {
        console.log('CREATE TABLE creature failed', err);
    })