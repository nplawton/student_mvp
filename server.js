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

app.get('/creature/:id', (req, res, next) => {
    const id = Number.parseInt(req.params.id);
    console.log(id);

    //If ID is not a number return error
    if(!Number.parseInt(id)){
        res.status(404).send(`There is no creature with id ${id}`);
    }

    pool.query(`SELECT id, name, attack, special, description FROM creature WHERE id = $1`, 
    [id], (err, results) => {
        
        if(err){
            return next(err);
        }

        const creature = results.rows[0];
        console.log('Single Creature found', creature);

        if(creature){
            return res.send(creature);
        }else{
            return res.status(404).send('No creature was found');
        }
    });
});

app.post('/creature', (req, res, next) => {

    const name = req.body.name;
    const armor = req.body.armor;
    const health = req.body.health;
    const stre = req.body.stre;
    const dex = req.body.dex;
    const cons = req.body.cons;
    const intel = Number.parseInt(req.body.intel);
    const wis = Number.parseInt(req.body.wis);
    const charisma = Number.parseInt(req.body.charisma);
    const chal = Number.parseInt(req.body.chal);
    const attack = req.body.attack;
    const special = req.body.special;
    const description = req.body.description;
    const mon_img = req.body.mon_img;

    //console.log(`new creature ${name}, has an ac of ${ac} with ${hp} health and challenge of ${chal}`);
    //console.log(`${name}, base stat is str ${stre}, dex ${dex}, consti ${cons}, intel ${intel}, charisma ${charisma}`);
    //console.log(`${name} will attack ${attack} and ${special} and looks ${description}`);
    //console.log(`${name} image located at ${mon_img}`);

    if(name && !Number.isNaN(armor) && !Number.isNaN(health) && !Number.isNaN(stre) && !Number.isNaN(dex) && !Number.isNaN(cons)){
        pool.query(`INSERT INTO creature (name, armor, health, stre, dex, cons) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [name, armor, health, stre, dex, cons], (err, data) => {
            const newCreature = data.rows[0];
            console.log("Creature created", newCreature);

            if(newCreature){
                return res.send(newCreature);
            }else{
                return next(err);
            }
        });
    }else{
        return res.status(400).send('Creature entry information missing. Please update and try again');
    }


});


//Delete a creature
app.delete("/creature/:id", (req, res, next) => {
    
    const id = Number.parseInt(req.params.id);
    console.log(id);

    if(!Number.isInteger(id)){
        return res.status(404).send('No creature with that ID')
    }

    pool.query('DELETE FROM creature WHERE id = $1 RETURNING *', [id], (err, results) => {
        if(err){
            return next(err);
        }

        const creature = results.rows[0];
        console.log(creature);

        if(creature){
            //respond with deleted row/creature
            res.send(creature);
        }else{
            res.status(404).send('No creature was found with that ID');
        }

    });

});

//Port Listeaning
app.listen(port, () => {
    console.log(`listening on ${port}`);
    console.log('connecting to postgres pool:', pool);
});


app.use((err, req, res, next) => {
    console.error('We\'re not here right now');
    console.error(err.slack);
    req.sendStatus(404);
});

module.exports = app;