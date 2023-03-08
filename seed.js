const { Pool } = require('pg');
const pool = require('./dbConn');

pool.query(`INSERT INTO type (t_name, description) VALUES 
        ('Aberration', 'Aberrations are alien entities, often with powers drawn from their minds. All aberrations have darkvision.'),
        ('Beast', 'Beasts are nonhumanoid creatures that are part of the natural world. Some beasts have magical powers, but are generally low in intelligence.'),
        ('Celestial', 'Celestials are creatures native to the Upper Planes, and good by nature.'), 
        ('Construct', 'A construct is either an animated object of some sort, or an artificially crafted creature. They are usually unintelligent, and immune to mind-influencing effects. They are immune to many effects that harm living creatures, such as poison and disease, but they cannot be magically restored to life. Constructs usually have darkvision.'),
        ('Dragon', 'A dragon is a reptilian creature, usually winged, often having supernatural abilities. Dragons cannot be paralyzed or induced to sleep. Dragons usually have darkvision and low-light vision.'),
        ('Elemental', 'An elemental is composed of one of the four classical elements of air, earth, fire, or water. They can resist effects such as poison and paralysis, and do not have any discernable front or back, making tactics such as flanking or attacks such as critical hits useless. Like constructs, they cannot be resurrected by magic once destroyed, save powerful spells such as wish or miracle. Elementals usually have darkvision.'),
        ('Fey', 'Fey are creatures of magic with a connection to nature. Often they are connected to the Feywild, or certain Outer Planes such as Arborea or the Beastlands.'),
        ('Fiend', 'Fiends are creatures native to the Lower Planes, and evil by nature.'),
        ('Giant', 'A giant is a humanoid-shaped creature of great strength and size. Giants usually have darkvision.'),
        ('Humanoid', 'Humanoids are the main people of most worlds, bipeds with culture but few natural magical abilities.'),
        ('Monstrosity', 'Monstrosities are unnatural creatures from a variety of origins, including curses and magical experimentation.'),
        ('Ooze',	'An ooze is an amorphous or mutable creature. Oozes are usually mindless, and thus immune to mind-influencing effects. They possess blindsight but are otherwise blind. Like elementals, they have no clear front or back and are thus immune to flanking or critical hits. Composed mainly of protoplasm, oozes resist effects such as poison and polymorphing.'),
        ('Plant', 'A plant is a vegetable and fungus creature, and immune to effects such as poison, stunning, or polymorphing. They also ignore mind-influencing effects, and may have low-light vision (assuming they can see at all).'),
        ('Undead', 'An undead is a once-living creature animated by spiritual or supernatural forces. They resist many effects which harm the living, such as poison and disease. They are healed by negative energy. Undead usually have darkvision.'),
        ('Vermin', 'A vermin is an invertebrate, such as an insect, arachnid, arthropod, or worm. Vermin are unintelligent and immune to mind-influencing effects. They usually have darkvision.'),
        ('Monstrous Humanoid', 'A monstrous humanoid is similar to a humanoid, but usually has monstrous or animalistic features. Many also have supernatural abilities. Monstrous humanoids usually have darkvision.'),
        ('Goblinoid', 'Goblinoids had a typical humanoid anatomy, though their skin tone and texture was often somewhere between that of a human and a snail. The notable exception of this rule was the bugbears whose entire bodies were covered head to toe in thick fur.')
        ON CONFLICT (type_id) DO NOTHING`, 
    (err, type) => {
        if(err){
            console.log("Insert failed");
            console.log(err);
        }else{
            console.log(type);
        }
});

pool.query(`INSERT INTO creature (c_name, alignment_id, type_id, health, exp, chal, descrip_id, stat_id, attack_id, spattack_id) VALUES
        ('Aarakocra', 1, 16, 13, 50, 0, 1, 1, 1, 1),
        ('Aboleth', 2, 1, 135, 5900, 10, 2, 2, 2, 2),
        ('Animated Object, Armor', 4, 4, 33, 200, 1, 3, 3, 3, 3),
        ('Animated Object, Flying Sword', 5, 4, 17, 50, 0, 4, 4, 4, 4),
        ('Animated Object, Rug of Smothering', 5, 4, 33, 450, 2, 5, 5, 5, 5),
        ('Ankheg', 5, 11, 39, 450, 2, 6, 6, 6, 6),
        ('Azer', 5, 6, 39, 450, 2, 7, 7, 7, 7),
        ('Banshee', 6, 14, 58, 1100, 4, 8, 8, 8, 8),
        ('Basilisk', 2, 11, 52, 700, 3, 9, 9, 9, 9),
        ('Behir', 1, 11, 168, 7200, 11, 10, 10, 10, 10),
        ('Beholder', 2, 1, 180, 10000, 13, 11, 11, 11, 11),
        ('Beholder, Death Tyrant', 1, 14, 187, 11500, 14, 12, 12, 12, 12),
        ('Beholder, Spectator', 1, 1, 39, 700, 3, 13, 13, 13, 13),
        ('Blight, Twig', 4, 13, 4, 25, 0, 14, 14, 14, 14),
        ('Blight, Vine', 2, 13, 26, 100, 0, 15, 15, 15, 15),
        ('Blight, Needle', 3, 13, 11, 50, 0, 16, 16, 16, 16),
        ('Bugbear', 2, 17, 27, 200, 1, 17, 17, 17, 17),
        ('Bugbear Chief', 4, 17, 65, 700, 3, 18, 18, 18, 18),
        ('Bulette', 2, 11, 94, 1800, 5, 19, 19, 19, 19),
        ('Bullywug', 1, 10, 11, 50, 0, 20, 20, 20, 20),
        ('Cambion', 3, 8, 82, 1800, 5, 21, 21, 21, 21),
        ('Carrion Crawler', 3, 11, 51, 450, 2, 22, 22, 22, 22),
        ('Centaur', 1, 11, 45, 450, 2, 23, 23, 23, 23),
        ('Chimera', 1, 11, 114, 2300, 6, 24, 24, 24, 24),
        ('Chuul', 2, 1, 93, 1100, 4, 25, 25, 25, 25),
        ('Deva', 2, 3, 136, 5900, 10, 26, 26, 26, 26),
        ('Planetar', 2, 3, 200, 15000, 16, 27, 27, 27, 27),
        ('Solar', 2, 3, 243, 33000, 21, 28, 28, 28, 28)
        ON CONFLICT (id) DO NOTHING`,
        (err, creature) => {
            if(err){
                console.log("Insert failed");
                console.log(err);
            }else{
                console.log(creature);
            }
});