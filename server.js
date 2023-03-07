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
    const intel = req.body.intel;
    const wis = req.body.wis;
    const charisma = req.body.charisma;
    const chal = req.body.chal;
    const attack = req.body.attack;
    const special = req.body.special;
    const description = req.body.description;
    const mon_img = req.body.mon_img;

    //console.log(`new creature ${name}, has an ac of ${ac} with ${hp} health and challenge of ${chal}`);
    //console.log(`${name}, base stat is str ${stre}, dex ${dex}, consti ${cons}, intel ${intel}, charisma ${charisma}`);
    //console.log(`${name} will attack ${attack} and ${special} and looks ${description}`);
    //console.log(`${name} image located at ${mon_img}`);

    if(name && !Number.isNaN(armor) && !Number.isNaN(health) && !Number.isNaN(stre) && !Number.isNaN(dex) && !Number.isNaN(cons) && !Number.isNaN(intel) && !Number.isNaN(wis) && !Number.isNaN(charisma) && !Number.isNaN(chal) && attack && special && description && mon_img){
        pool.query(`INSERT INTO creature (name, armor, health, stre, dex, cons, intel, wis, charisma, chal, attack, special, description, mon_img) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *`, [name, armor, health, stre, dex, cons, intel, wis, charisma, chal, attack, special, description, mon_img], (err, data) => {
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

//update a creature with Patch request
app.patch('/creature/:id', (req, res, next) => {
    const id = Number.parseInt(req.params.id);
    console.log(id);

    //get the change/update information from the request body
    const name = req.body.name;
    const armor = req.body.armor;
    const health = req.body.health;
    const stre = req.body.stre;
    const dex = req.body.dex;
    const cons = req.body.cons;
    const intel = req.body.intel;
    const wis = req.body.wis;
    const charisma = req.body.charisma;
    const chal = req.body.chal;
    const attack = req.body.attack;
    const special = req.body.special;
    const description = req.body.description;
    const mon_img = req.body.mon_img;

    if(!Number.isInteger(id)){
        res.status(404).send(`No creature with the id ${id}`);
    }

    pool.query('SELECT * FROM creature WHERE id = $1', [id], (err,results) => {
        if(err){
            return next(err);
        }

        //make sure update/change information is still accessable
        console.log('Information to Change/Update', req.body);

        const creature = results.rows[0];

        //the object entity can't go into the back tick string
        console.log(`Single PET ID from database, ${id}, with values:`, creature);

        if(!creature){
            return res.status(404).send("No creature, please check the id an try again");
        }else{

            //List all columns in the database table there is not limit to the $s
            const updatedName = name || creature.name;
            const updatedArmor = armor || creature.armor;
            const updatedHealth = health || creature.health;
            const updatedStre = stre || creature.stre;
            const updatedDex = dex || creature.dex;
            const updatedCons = cons || creature.cons;
            const updatedIntel = intel || creature.intel;
            const updatedWis = wis || creature.wis;
            const updatedCharisma = charisma || creature.charisma;
            const updatedChal = chal || creature.chal;
            const updatedAttack = attack || creature.attack;
            const updatedSpecial = special || creature.special;
            const updatedDescription = description || creature.description;
            const updatedMon_img = mon_img || creature.mon_img;

            pool.query('UPDATE creature SET name = $1, armor = $2, health = $3, stre = $4 dex = $5, cons = $6, intel = $7, wis = $8, charisma = $9, chal = $10, attack = $11, special = $12, description = $13, mon_img = $14 WHERE id = $15 RETURNING *',
                    [updatedName, updatedArmor, updatedHealth, updatedStre, updatedDex, updatedCons, updatedIntel, updatedWis, updatedCharisma, updatedChal, updatedAttack, updatedSpecial, updatedDescription, updatedMon_img, id], (err, data) => {

                        if(err){
                            return next(err);
                        }

                        const updatedCreature = data.rows[0];
                        console.log('Updated create values');
                        return res.send(updatedCreature);
            });

        }

    });

})


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