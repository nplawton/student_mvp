'use strict';

//Establish all dependicies for the project
const { Pool } = require('pg');
const ex = require ('express');
const cors = require('cors');
const body = require('body-parser');

//port that express will listean to for requests
const port = process.env.port || 8000;

//using dependcies
const app = ex();
app.use(body.json());
app.use(cors());

const pool = require('./dbConn');


app.get('/creature', (req, res, next) => {
    pool.query('SELECT * FROM creature', (err, results) => {
        if(err){
            return next(err);
        }
    
        let row = results.rows;
        console.log(row);
        res.send(row);
    })
});

app.post('/creature', (req, res, next) => {
    const { name, attack, special, description, mon_imag } = req.body;
    const ac = Number.parseInt(req.body.ac);
    const hp = Number.parseInt(req.body.hp);
    const stre = Number.parseInt(req.body.stre);
    const dex = Number.parseInt(req.body.dex);
    const cons = Number.parseInt(req.body.cons);
    const intel = Number.parseInt(req.body.intel);
    const wis = Number.parseInt(req.body.wis);
    const charisma = Number.parseInt(req.body.charisma);
    const chal = Number.parseInt(req.body.ac);

    console.log(`new creature ${name}, has an ac of ${ac} with ${hp} health and challenge of ${chal}`);
    console.log(`${name}, base stat is str ${stre}, dex ${dex}, consti ${cons}, intel ${intel}, charisma ${charisma}`);
    console.log(`${name} will attack ${attack} and ${special} and looks ${description}`);
    console.log(`${name} image located at ${mon_imag}`);

});

//Port Listeaning
app.listen(port, () => {
    console.log(`listening on ${port}`);
    console.log('connecting to postgres pool:', pool);
});