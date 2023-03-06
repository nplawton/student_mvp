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
    if(err){
        return next(err);
    }

    let row = results.rows;
    console.log(row);
    res.send(row);
});

//Port Listeaning
app.listen(port, () => {
    console.log(`listening on ${port}`);
    console.log('connecting to postgres pool:', pool);
});