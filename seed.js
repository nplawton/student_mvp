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

pool.query(`INSERT INTO descrip (size, speed, d_descrip, info, mon_img) VALUES
            ('Medium', 'On Ground 20ft, Flying 50ft', 'Aarakocra are bird-like humanoids with feathers and a beak. Their hands have three fingers and a thumb, and they also have a pair of feathered wings. Aarakocra have lean legs ending in talons. Aarakocra look like large birds from below, until they land. Aarakocra have advantage on saving throws against lightning and thunder damage, as well as against spells or powers that manipulate air, such as gust of wind, wind wall, or an air elementals whirlwind power. Aarakocra have lean, lightweight bodies, typically 80 to 100 pounds. Their skeletons are hollow and fragile. Their wings anchor in a bony chest plate that provides some slight natural protection.', 'Aarakocra range the Howling Gyre, an endless storm of mighty winds and lashing rains that surrounds the tranquil realm of Aaqa in the Elemental Plane of Air. Making aerial patrols, these birdlike humanoids guard the windy borders of their home against invaders from the Elemental Plane of Earth, such as gargoyles, their sworn enemies.', 'https://www.dndbeyond.com/avatars/thumbnails/7/622/420/618/636286750209394240.png'),
            ('Large', 'On Ground 10ft, Swim 40ft', 'Aboleth underbellies were often orange-pink, while their topsides were typically sea-green. A little bit back from the head were four long tentacles, two sprouting from across each other on the top, and two more of the same on the underbelly. Their heads were roughly triangular-shaped, with a spherical, somewhat beak-like nose. Above the nose were their three eyes, each one set atop the other. Tendrils and a few shorter tentacles dangled from the bottom of the head. Four blue-black slime-secreting orifices lined the bottom of their bodies. Aboleth blood was green and thick, oozing like sap.', 'The aboleth can take 3 legendary actions, choosing from the options below (Special Attacks). Only one legendary action option can be used at a time and only at th e end of another creatures turn.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/774/1000/1000/638061093283829548.png'),
            ('Medium', 'On Ground 25ft', 'This empty steel shell clamors as it moves, heavy plates banging and grinding against one another like the vengeful spirit of a fallen knight. Ponderous but persistent, this magical guardian is almost always a suit of plate armor.', 'To add to its menace, animated armor is frequently enchanted with scripted speech, so the armor can utter warnings, demand passwords, or deliver riddles. Rare suits of animated armor are able to carry on an actual conversation.', 'https://www.dndbeyond.com/avatars/thumbnails/31312/506/1000/1000/638084408333616236.png'),
            ('Small', 'On Ground 0ft, Flying 50ft', 'Swords are the most common weapons animated with magic. Axes, clubs, daggers, maces, spears, and even selfloading crossbows are also known to exist in animated object form.', 'A flying sword dances through the air, fighting with the confidence of a warrior that cannot be injured.',	'https://www.dndbeyond.com/avatars/thumbnails/30761/834/1000/1000/638061095632921781.png'),
            ('Large', 'On Ground 10ft',	'A rug of smothering can be made in many different forms, from a finely woven carpet fit for a queen to a coarse mat in a peasants hovel.' 'Creatures with the ability to sense magic detect the rugs false magical aura. In some cases, a rug of smothering is disguised as a carpet of flying or another beneficial magic item. However, a character who stands or sits on the rug, or who attempts to utter a word of command, is quickly trapped as the rug of smothering rolls itself tightly around its victim.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/845/1000/1000/638061095923531915.png'),
            ('Large', 'On Ground 30ft, Burrowing 10ft',	'An ankheg resembles an enormous many-legged insect, its long antennae twitching in response to any movement around it. Its legs end in sharp hooks adapted for burrowing and grasping its prey, and its powerful mandibles can snap a small tree in half.', 'When it hunts, an ankheg burrows upward, waiting below the surface until its antennae detect movement from above. Then it bursts from the earth and. seizes prey in its mandibles, crushing and grinding while it secretes acidic digestive enzymes.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/865/1000/1000/638061096692582271.png'),
            ('Medium', 'On Ground 30ft', 'In appearance and manner, an azer resembles a male dwarf, but this is a facade. Beneath its metalliclooking skin, an azer is a being of fire , which outwardly manifests in its fiery hair and beard.', 'Natives of the Elemental Plane of Fire, azers are master crafters, expert miners, and sworn foes of the efreet.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/873/1000/1000/638061096972302413.png'),
            ('Medium', 'On Ground 0ft, Flying 40ft', 'Banshees appear as luminous, wispy forms that vaguely recall their mortal features. A banshees face is wreathed in a wild tangle of hair, its body clad in wispy rags that flutter and stream around it.', 'When night falls, unlucky travelers hear the faint cries of the forlorn dead. This woeful spirit is a banshee, a spiteful creature formed from the spirit of a female elf.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/972/1000/1000/638061101973584758.png'),
            ('Medium', 'On Ground 20ft', 'Basilisks had eight legs, which they crawled upon. Basilisks came in a variety of colors from dark gray to dark orange, although they also commonly had a dull brown body with a yellowish underbelly. Basilisks possessed a single row of bony spines that lined their backs and a few had a curved horn atop their noses. Basilisk eyes were, however, the most notable feature, glowing with a pale green light.', 'Some alchemists are said to know how to process the basilisks gullet and the fluids contained within. Properly handled, the gullet produces an oil that can return petrified creatures to flesh and life. Unfortunately for such a victim, any parts lost in stone form remain absent if the creature revives. Revivification using the oil is impossible if a vital part of the petrified creature, such as its head, is detached.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/974/1000/1000/638061102119934833.png'),
            ('Huge', 'On Ground 50ft, Climbing  40ft', 'A behirs monstrous form resembles a combination of centipede and crocodile. Its scaled hide ranges from ultramarine to deep blue in color, fading to pale blue on its underside.', 'The serpentine behir crawls along floors and clambers up walls to reach its prey. Its lightning breath can incinerate most creatures, even as more powerful foes are constricted in its coils and eaten alive.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/978/1000/1000/638061102241924981.png'),
            ('Large', 'On Ground 0ft, Flying  20ft', 'A beholders spheroid body levitates at all times, and its great bulging eye sits above a wide, toothy maw, while the smaller eyestalks that crown its body twist and turn to keep its foes in sight. When a beholder sleeps, it closes its central eye but leaves its smaller eyes open and alert.', 'One glance at a beholder is enough to assess its foul and otherworldly nature. Aggressive, hateful, and greedy, these aberrations dismiss all other creatures as lesser beings, toying with them or destroying them as they choose.', 'https://www.dndbeyond.com/attachments/thumbnails/3/918/250/209/636288206263978085.jpg'),
            ('Large', 'On Ground 0ft, Flying  20ft', 'A death tyrant appears as a massive, naked skull, with a pinpoint of red light gleaming in its hollow eye socket. With its eyestalks rotted away, ten spectral eyes hover above the creature and glare in all directions.', 'On rare occasions, a beholders sleeping mind drifts to places beyond its normal madness, imagining a reality in which it exists beyond death. When such dreams take hold, a beholder can transform, its flesh sloughing away to leave a death tyrant behind. This monster possesses the cunning and much of the magic it had in life, but it is fueled by the power of undeath.', 'https://vignette.wikia.nocookie.net/forgottenrealms/images/b/b6/245beholder5eundead.jpg/revision/latest?cb=20171011164609'),
            ('Medium', 'On Ground 0ft, Flying  20ft', 'A spectator is a lesser beholder that is summoned from another plane of existence by a magical ritual, the components of which include four beholder eyestalks that are consumed by the rituals magic. Appropriately, a spectator has four eyes talks, two on each side of the wide eye at the center of its four-foot diameter body.', ' Though it can speak, a spectator communicates primarily by way of telepathy. It is civil while on guard, openly discussing its orders and its summoner. However, even a brief conversation with a spectator is enough to reveal quirks in its personality brought on by its years of isolation. It might invent imaginary enemies, refer to itself in the third person, or try to adopt the voice of its summoner.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/998/1000/1000/638061102728373114.png'),
            ('Small' , 'On Ground 20ft', 'Twig blights can root in soil, which they do when living prey are scarce. While rooted, they resemble woody shrubs. When it pulls its roots free of the ground to move, a twig blights branches twist together to form a humanoid-looking body with a head and limbs.', 'Twig blights seek out campsites and watering holes, rooting there to set up ambushes for potential victims coming to drink or rest. Huddled together in groups, twig blights blend in with an areas natural vegetation or with piles of debris or firewood.', 'https://www.dndbeyond.com/avatars/thumbnails/16/464/1000/1000/636376286997771487.png'),
            ('Medium', 'On Ground 10ft', 'Appearing as masses of slithering creepers, vine blights hide in undergrowth and wait for prey to draw near. By animating the plants a round them, vine blights entangle and hinder their foes before attacking.', 'Vine blights are the only blights capable of speech. Through its connection to the evil spirit of the Gulthias tree it serves, a vine blight speaks in a fractured version of its dead masters voice, taunting victims or bargaining with powerful foes',	'https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/466/1000/1000/636376287271000215.png'),
            ('Medium',	'On Ground 30ft', 'In the shadows of a forest, needle blights might be taken at a distance for shuffling, hunched humanoids. Up close, these creatures reveal themselves as horrid plants whose conifer-like needles grow across their bodies in quivering clumps.', 'When needle blights detect a threat, they loose a pollen that the wind carries to other needle blights throughout the forest. Alerted to their foes location, needle blights converge from all sides to drench their roots in blood.', 'https://angrygolem-games.com/wp-content/uploads/2021/04/needle-blight.jpg'),
            ('Medium', 'On Ground 30ft', 'Bugbears resemble hairy, feral goblins standing seven feet tall. They take their name from their noses and claws, which are similar to those of bears.', 'Bugbears are born for battle and mayhem. Surviving by raiding and hunting, they bully the weak and despise being bossed around, but their love of carnage means they will fight for powerful masters if bloodshed and treasure a re assured.', 'https://www.dndbeyond.com/avatars/thumbnails/31312/871/1000/1000/638084425511165687.png'),
            ('Medium', 'On Ground 30ft', 'Bugbears resemble hairy, feral goblins standing seven feet tall. They take their name from their noses and claws, which are similar to those of bears.', 'In the absence of their goblinoid kin, bugbears form loose war bands, each one led by its fiercest member. Bugbears believe that when they die, their spirits have a chance to fight at Hruggeks side.', 'http://www.worldanvil.com/media/cache/cover/uploads/images/497a2de99d5cfb07107d77c61f65f082.jpg'),
            ('Large', 'On Ground 40ft, Burrowing 40ft', 'Around the head and rear, this armor was a blue-brown color, while in-between the hue might range from gray-blue to blue-green. Areas around the eyes were slightly darkened, with the eyes themselves being a yellow color with blue-green pupils. A bulettes body was covered in thick, layered plates. Its head is bullet-shaped, similar to that of a shark, with a massive mouth. It has stumpy but powerful legs.', 'A bulette is a massive predator that terrorizes any lands it inhabits. Also called a land shark, it lives only to feed. Irascible and rapacious, bulettes fear no other creature, and they attack with no regard for superior numbers or strength.', 'https://www.dndbeyond.com/avatars/thumbnails/30762/8/1000/1000/638061103017271419.png'),
            ('Medium', 'On Ground 20ft, Swimming 40ft', 'Bullywugs have green, gray, or mottled yellow skin that shifts through shades of gray, green, and brown, allowing them to blend in with their surroundings.', 'Life as a bullywug is nasty, brutish, and wet. These frog headed amphibious humanoids must stay constantly moist, dwelling in rainy forests, marshes, and damp caves. Always hungry and thoroughly evil.', 'https://www.aidedd.org/dnd/images/bullywug.jpg'),
            ('Medium', 'On Ground 30ft, Flying 60ft', 'A cambion is the offspring of a fiend (usually a succubus or incubus) and a humanoid (usually a human). Cambions inherit aspects of both parents, but their horns, leathery wings, and sinewy tails are hallmarks of their otherworldly parentage.', 'Cambions grow into ruthless adults whose wickedness and perversion horrifies even the most devoted mortal parent. Even as a youth, a cambion identifies its rightful place as an overlord of mortals.', 'https://www.aidedd.org/dnd/images/cambion.jpg'),
            ('Large', 'On Ground 30ft, Climbing 30ft', 'Carrion crawlers were large, pale yellow, and greenish aberrations whose appearance was akin to a three- to four-foot-long centipede. Crawlers possessed eight long tentacles protruding from the sides of their heads, allowing them to stun prey. Carrion crawlers also had two eye stalks, through which they could perceive their surroundings even in the darkest caverns. Additionally, carrion crawlers had a highly developed sense of smell.', 'Carrion crawlers scour putrid flesh from carcasses and gobble the slimy bQnes that remain. They aggressively attack any creature that trespasses on their territory or disturbs their feasting.', 'https://www.aidedd.org/dnd/images/carrion-crawler.jpg'),
            ('Large', 'On Ground 50ft', 'A centaur has the body of a great horse topped by a humanoid torso, head, and arms.', 'Reclusive wanderers and omen-readers of the wild, centaurs avoid conflict but fight fiercely when pressed. They roam the vast wilderness, keeping far from borders, laws, and the company of other creatures.', 'https://www.dndbeyond.com/avatars/thumbnails/30762/233/1000/1000/638061114013567234.png'),
            ('Large', 'On Ground 30ft Flying 60ft', 'A typical specimen has the hindquarters of a large goat, the forequarters of a lion, and the leathery wings of a dragon, along with the heads of all three of those creatures. The monster likes to surprise its victims, swooping down from the sky arid engulfing prey with its fiery breath before landing.', 'Chimeras were created after mortals summoned Demogorgon to the world. The Prince of Demons, unimpressed with the creatures that surrounded it, transformed them into horrific, multi-headed monstrosities. This act gave rise to the first chimeras.', 'https://www.dndbeyond.com/avatars/thumbnails/30762/236/1000/1000/638061114170787382.png'),
            ('Large', 'On Ground 30ft Swimming 30ft', 'Chuuls have been described as a horrible mix of crustacean, insect, and serpent, but most closely resembled an 8 feet tall yellow-green lobster, weighing around 650 pounds with four long legs, two large claws, a strong protective exoskeleton, a fan-like tail, and a mass of paralysis-causing tentacles around its mouth', 'Survivors of the ancient aboleth empire, chuuls are crustaceans the aboleths modified and endowed with sentience. They follow the ingrained directives of their creators, as they have done since the dawn of time.',' https://www.dndbeyond.com/avatars/thumbnails/30762/240/1000/1000/638061114295167448.png'),
            ('Medium', 'On Ground 30ft, Flying 90ft', 'Devas are angels that act as divine messengers or agents to the Material Plane, the Shadowfell, and the Feywild and that can assume a form appropriate to the realm they are sent to. A deva can take any shape, although it prefers to appear to mortals as an innocuous humanoid or animal. When circumstances require that it cast off its guise, a deva is a beautiful humanoid-like creature with silvery skin. Its hair and eyes gleam with an unearthly luster, and large feathery wings unfurl from its shoulder blades.', 'Damage Resistances radiant; bludgeoning, piercing, and slashing from non magical weapons. Condition Immunities charmed, exhaustion, frightened. Senses darkvision 120 ft., passive Perception 19. Languages all, telepathy 120 ft.' 	'https://www.dndbeyond.com/avatars/thumbnails/30761/784/1000/1000/638061093601900776.png'),
            ('Large', 'On Ground 30ft, Flying 90ft', 'Planetars are muscular and hairless and have opalescent green skin and white-feathered wings. They tower over most humanoids, brandishing immense swords with grace.', 'Planetars act as the weapons of the gods they serve, presenting a tangible representation of their deities might. A planetar can call down rain to relieve a drought, or can loose an insect plague to devour crops. A planetars celestial ears detect every falsehood, and its radiant eyes see through every deception.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/799/1000/1000/638061094132481081.png'),
            ('Large', 'On Ground 50ft, Flying 150ft', 'The Solar resembles a towering, powerfully built human with brilliant topaz eyes, silvery (or golden) skin, and gleaming white wings.', 'A solar is godlike in its glory and power. On the battlefield, the solars sword flies into the fray on its own, and a single arrow from a solars bow can strike a target dead on contact. So great is a solars celestial might that even demon princes shrink at its resonant commands.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/809/1000/1000/638061094428241214.png')
            ON CONFLICT (id) DO NOTHING`, (err, descrip) => {
                if(err){
                    console.log("Insert failed");
                    console.log(err);
                }else{
                    console.log(descrip);
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