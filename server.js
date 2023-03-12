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


//Get Request for each Table. Currently Functioning: type / descrip / creature (joined) / creatures (creature db unjoined)
app.get('/type', (req, res, next) => {
    pool.query('SELECT * FROM type', (err, results) => {
        if(err){
            return next(err);
        }
    
        let row = results.rows;
        console.log(row);
        res.send(row);
    });
});

app.get('/descrip', (req, res, next) => {
    pool.query('SELECT * FROM descrip', (err, results) => {
        if(err){
            return next(err);
        }
    
        let row = results.rows;
        console.log(row);
        res.send(row);
    });
});

app.get('/creatures', (req, res, next) => {
    pool.query('SELECT * FROM creature', (err, results) => {
        if(err){
            return next(err);
        }
    
        let row = results.rows;
        console.log(row);
        res.send(row);
    });
});


app.get('/creature', (req, res, next) => {
    pool.query(`SELECT 
        c.id,
        c.mon_name, 
        c.alignment_id, 
        t.t_name, t.t_description, 
        c.health, c.exp, c.chal, 
        d.size, d.speed,
        d.d_descrip, d.info,
        d.mon_img, 
        c.stat_id, 
        c.attack_id, 
        c.spattack_id 
        FROM creature c
        LEFT JOIN type t ON c.type_id = t.type_id
        LEFT JOIN descrip d ON c.descrip_id = d.descrip_id`, 
    (err, data) => {
        if(err){
            console.log(err);
            return next(err);
        }
    
        let row = data.rows;
        console.log(row);
        res.send(row);
    });

});


//Single Get Request for each Table. Currently Functioning: cretures (joined) /
app.get('/creature/:id', (req, res, next) => {
    const id = req.params.id;
    console.log(id);

    //If ID is not a number return error
    if(!Number.parseInt(id)){
        res.status(404).send(`There is no creature with id ${id}`);
    }

    pool.query(`SELECT id, 
            c.mon_name, 
            c.alignment_id, 
            t.t_name, t.t_description, 
            c.health, c.exp, c.chal, 
            d.size, d.speed,
            d.d_descrip, d.info,
            d.mon_img, 
            c.stat_id, 
            c.attack_id, 
            c.spattack_id 
            FROM creature c
            LEFT JOIN type t ON c.type_id = t.type_id
            LEFT JOIN descrip d ON c.descrip_id = d.descrip_id 
            WHERE id = $1`, 
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

app.get('/type/:id', (req, res, next) => {
    const id = req.params.id;
    console.log(id);

    //If ID is not a number return error
    if(!Number.parseInt(id)){
        res.status(404).send(`There is no creature type with id ${id}`);
    }

    pool.query(`SELECT type_id, t_name, t_description FROM type WHERE id = $1`, [id], (err, results) => {
        
        if(err){
            return next(err);
        }

        const type = results.rows[0];
        console.log('Creature type found', type);

        if(type){
            return res.send(type);
        }else{
            return res.status(404).send('No creature type was found');
        }
    });
});


//Post new information Request for each Table. Currently Functioning:
app.post('/creature', (req, res, next) => {

    const mon_name = req.body.mon_name;
    const alignment_id = req.body.alignment_id;
    const type_id = req.body.type_id;
    const health = req.body.health;
    const exp = req.body.exp;
    const chal = req.body.chal;
    const descrip_id = req.body.descrip_id;
    const stat_id = req.body.stat_id;
    const attack_id = req.body.stat_id;
    const spattack_id = req.body.spattack_id;

    if(mon_name && alignment_id && type_id && health && exp && chal && descrip_id && stat_id && attack_id && spattack_id){
        pool.query(`INSERT INTO creature (mon_name, alignment_id, type_id, health, exp, chal, descrip_id, stat_id, attack_id, spattack_id) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`, 
        [mon_name, alignment_id, type_id, health, exp, chal, descrip_id, stat_id, attack_id, spattack_id], (err, data) => {
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

// app.post('/type', (req, res, next) => {

//     const name = req.body.t_name;
//     const description = req.body.t_description;

//     if(name && description ){
//         pool.query(`INSERT INTO type (Tname, description,) VALUES ($1, $2,) RETURNING *`, [name, description], (err, data) => {
//             const newType = data.rows[0];
//             console.log("Creature type created", newType);

//             if(newCreature){
//                 return res.send(newType);
//             }else{
//                 return next(err);
//             }
//         });
//     }else{
//         return res.status(400).send('Creature type entry information missing. Please update and try again');
//     }


// });


//Update new information Request for each Table. Currently Functioning:
//update a creature with Patch request
app.patch('/creature/:id', (req, res, next) => {
    const id = Number.parseInt(req.params.id);
    //console.log(id);

    //get the change/update information from the request body
    const mon_name = req.body.mon_name;
    const alignment_id = req.body.alignment_id;
    const type_id = req.body.type_id;
    const health = req.body.health;
    const exp = req.body.exp;
    const chal = req.body.chal;
    const descrip_id = req.body.descrip_id;
    const stat_id = req.body.stat_id;
    const attack_id = req.body.stat_id;
    const spattack_id = req.body.spattack_id;

    // if(!Number.isInteger(id)){
    //     res.status(404).send(`No creature with the id ${id}`);
    // }

    pool.query(`SELECT * FROM creature WHERE id = $1`, [id], (err,results) => {
        if(err){
            return next(err);
        }

        //make sure update/change information is still accessable
        console.log('Information to Change/Update', req.body);

        const creature = results.rows[0];

        //the object entity can't go into the back tick string
        //console.log(`Single PET ID from database, ${id}, with values:`, creature);

        if(!creature){
            return res.status(404).send("No creature, please check the id an try again");
        }else{

            //List all columns in the database table there is not limit to the $s
            const updatedName = mon_name || creature.mon_name;
            const updatedAlignment = alignment_id || creature.alignment_id;
            const updatedType = type_id || creature.type_id;
            const updatedHealth = health || creature.health;
            const updatedExp = exp || creature.exp;
            const updatedChal = chal || creature.chal;
            const updatedDescrip = descrip_id || creature.descrip_id;
            const updatedStat = stat_id || creature.stat_id;
            const updatedAttack = attack_id || creature.attack_id;
            const updatedSpecial = spattack_id || creature.spattack_id;

            pool.query('UPDATE creature SET mon_name = $1, alignment_id = $2, type_id = $3, health = $4, exp = $5, chal = $6, descrip_id = $7, stat_id = $8, attack_id = $9, spattack_id = $10 WHERE id = $11 RETURNING *',
                    [updatedName, updatedAlignment, updatedType, updatedHealth, updatedExp, updatedChal, updatedDescrip, updatedStat, updatedAttack, updatedSpecial, id], (err, data) => {

                        if(err){
                            return next(err);
                        }

                        const updatedCreature = data.rows[0];
                        //console.log('Updated create values');
                        return res.send(updatedCreature);
            });

        }

    });

})


// //Delete a creature
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
    //console.error('We\'re not here right now');
    console.error(err.slack);
    req.status(400).send('We\'re not here right now');
});

module.exports = app;