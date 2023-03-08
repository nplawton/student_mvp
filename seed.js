const { Pool } = require('pg');
const pool = require('./dbConn');

pool.query(`INSERT INTO creature (name, armor, health, stre, dex, cons, intel, wis, charisma, chal, attack, special, description, mon_img) VALUES
('Aarakocra', 12, 13, 10, 14, 10, 11, 12, 11, 1/4, {'Talon': 'Melee Weapon Attack +4 to hit reach 5 ft. one target. Hit 4 (1d4 + 2) slashing damage.',	'Javelin': 'Melee or Ranged Weapon Attack +4 to hit reach 5 ft. or range 30/120 ft. one target. Hit 5 (1d6 + 2) piercing damage.'}, {'Dive Attack': 'If the aarakocra is flying and dives at least 30ft straight toward a target and then hits it with a melee weapon attack the attack deals an extra 3 (1d6) damage to the target.', 'Bite (Ex)': 'When grounded an aarakocra attacks with its beak (+1 melee) dealing 1d3 points of damage on a successful attack.', 'Summon Large Air Elemental (Su)': 'Five aarakocra within 30 feet of each other can magically summon an air elemental. Each of the five must use its action and movement on three consecutive turns to perform an aerial dance and must maintain concentration while doing so (as if concentrating on a spell). When all five have finished their third turn of the dance the elemental appears in an unoccupied space within 60ft of them. It is friendly toward them and obeys their spoken commands. It remains for 1 hour until it or all its summoners die or until any of its summoners dismisses it as a bonus action. A summoner can not perform the dance again until it finishes a short rest. When the elemental returns to the Elemental Plane of Air any aarakocra within 5 feet of it can return with it.'}, 'Aarakocra are bird-like humanoids with feathers and a beak. Their hands have three fingers and a thumb and they also have a pair of feathered wings. Aarakocra have lean legs ending in talons. Aarakocra look like large birds from below until they land. Aarakocra have advantage on saving throws against lightning and thunder damage as well as against spells or powers that manipulate air such as gust of wind wind wall or an air elementals whirlwind power. Aarakocra have lean lightweight bodies typically 80 to 100 pounds. Their skeletons are hollow and fragile. Their wings anchor in a bony chest plate that provides some slight natural protection.', 'https://www.dndbeyond.com/avatars/thumbnails/7/622/420/618/636286750209394240.png'),
('Aboleth',	17, 135, 21, 9,	15,	18,	15,	18,	10, {'Multiattack': 'The aboleth makes three tentacle attacks.', 'Tentacle': 'Melee Weapon Attack +9 to hit reach 10ft. one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute the diseased creatures skin becomes translucent and slimy the creature can not regain hit points unless it is underwater and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.', 'Tail': 'Melee Weapon Attack +9 to hit reach 10ft. one target. Hit 15 (3d6 + 5) bludgeoning damage.', 'Enslave (3/Day)': 'The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleths control and can not take reactions and the aboleth and the target can communicate telepathically with each other over any distance. Whenever the charmed target takes damage the target can repeat the saving throw. On a success the effect ends. No more than once every 24 hours the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.'}, {'Detect': 'The aboleth makes a Wisdom (Perception) check', 'Tail Swipe': 'The aboleth makes one tail attack.', 'Psychic Drain': '(Costs 2 Actions) One creature charmed by the aboleth takes 10 (3d6) psychic damage and the aboleth regains hit points equal to the damage the creature takes.'}, 'Aboleth underbellies were often orange-pink while their topsides were typically sea-green. A little bit back from the head were four long tentacles two sprouting from across each other on the top and two more of the same on the underbelly. Their heads were roughly triangular-shaped with a spherical somewhat beak-like nose. Above the nose were their three eyes each one set atop the other. Tendrils and a few shorter tentacles dangled from the bottom of the head.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/774/1000/1000/638061093283829548.png'),
('Animated Object Armor', 18, 33, 14, 22, 23, 1, 3, 11,	1, {'Multiattack': 'The armor makes two melee attacks.', 'Slam': 'The creature batters opponents with an appendage dealing bludgeoning damage.', 'Melee Weapon Attack': '+4 to hit reach 5 ft. one target. Hit 5 (ld6 + 2) bludgeoning damage.'}, {'Antimagic Susceptibility': 'The armor is incapacitated while in the area of an anti magic field. If targeted by dispel magic the armor must succeed on a Constitution saving throw against the casters spell save DC or fall unconscious for 1 minute.', 'False Appearance': 'While the armor remains motion less it is indistinguishable from a normal suit of armor.'}, 'This empty steel shell clamors as it moves heavy plates banging and grinding against one another like the vengeful spirit of a fallen knight. Ponderous but persistent, this magical guardian is almost always a suit of plate armor.', 'https://www.dndbeyond.com/avatars/thumbnails/31312/506/1000/1000/638084408333616236.png'),
('Animated Object Flying Sword', 17, 17, 12, 15, 11, 1, 5, 1, 1/4, {'Longsword': 'Melee Weapon Attack +3 to hit, reach 5ft. one target. Hit 5(1d8 + 1) slashing damage.'}, {'Antimagic Susceptibility': 'The sword is incapacitated while in the area of an anti magic field. if targeted by dispel magic the sword must succeed on a Constitution saving throw against the casters spell save DC or fall unconscious for 1 minute', 'False Appearance': 'While the sword remains motionless and is not flying it is indistinguishable from a normal sword.'}, 'Swords are the most common weapons animated with magic. Axes clubs daggers maces spears and even selfloading crossbows are also known to exist in animated object form.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/834/1000/1000/638061095632921781.png'),
('Animated Object Rug of Smothering', 12, 33, 17, 14, 10, 1, 3,	1, 2, {'Smother': 'Melee Weapon Attack +5 to hit reach 5ft. one Medium or smaller creature. Hit The creature is grappled (escape DC 13). Until this grapple ends the target is restrained blinded and at risk of suffocating and the rug can not smother another target. In addition at the start of each of the targets turns the target takes 10 (2d6 + 3) bludgeoning damage.'}, {'Antimagic Susceptibility': 'The rug is incapacitated while in the area of an anti magic field. If targeted by dispel magic the rug must succeed on a Constitution saving throw against the casters spell save DC or fall unconscious for 1 minute.', 'Damage Transfer': 'While it is grappling a creature the rug takes only half the damage dealt to it and the creature grappled by the rug takes the other half.', 'False Appearance': 'While the rug remains motionless it is indistinguishable from a normal rug.'}, 'A rug of smothering can be made in many different forms from a finely woven carpet fit for a queen to a coarse mat in a peasants hovel. Creatures with the ability to sense magic detect the rugs false magical aura.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/845/1000/1000/638061095923531915.png'),
('Ankheg', 14, 39, 17, 11, 13, 1, 13, 6, 2, {'Bite': 'Melee Weapon Attack +5 to hit reach 5 ft. one target. Hit 9 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a large or smaller creature it is grappled (escape DC 13). Until this grapple ends the ankheg can bite only the grappled creature and has advantage on attack rolls to do so.'}, {'Acid Spray': '(Recharge 6) The ankheg spits acid in a line that is 30ft long and 5ft wide provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw taking 10 (3d6) acid damage on a failed save or half as much damage on a successful one.'}, 'An ankheg resembles an enormous many-legged insect its long antennae twitching in response to any movement around it. Its legs end in sharp hooks adapted for burrowing and grasping its prey and its powerful mandibles can snap a small tree in half.',	'https://www.dndbeyond.com/avatars/thumbnails/30761/865/1000/1000/638061096692582271.png'),
('Azer', 17, 39, 17, 12, 15, 12, 13, 10, 2, {'Warhammer': 'Melee Weapon Attack +5 to hit reach 5 ft. one target. Hit 7 (1d8 + 3) bludgeoning damage or 8 (1d10 + 3) bludgeoning damage if used with two hands to make a melee attack plus 3 (1d6) fire damage.'}, {'Heated Body': 'A creature that touches the azer or hits it with a melee attack while within 5ft of it takes 5 (1d10) fire damage.', 'Heated Weapons': 'When the azer hits with a metal melee weapon it deals an extra 3 (1d6) fire damage (included in the attack).', 'Illumination': 'The azer sheds bright light in a 10ft radius and dim light for an additional 10 feet.'}, 'In appearance and manner an azer resembles a male dwarf but this is a facade. Beneath its metalliclooking skin an azer is a being of fire which outwardly manifests in its fiery hair and beard.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/873/1000/1000/638061096972302413.png'),
('Banshee', 12, 58,	1, 14, 10, 12, 11, 17, 4,	{'Corrupting Touch': 'Melee Spell Attack +4 to hit, reach 5ft. one target. Hit 12 (3d6 + 2) necrotic damage.', 'Horrifying Visage': 'Each non-undead creature within 60ft of the banshee that can see her must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns with disadvantage if the banshee is within line of sight ending the effect on itself on a success. If a targets saving throw is successful or the effect ends for it the target is immune to the banshees Horrifying Visage for the next 24 hours.', 'Wail (1/Day)': 'The banshee releases a mournful wail provided that she isnt in sunlight. This wail has no effect on constructs and undead. All other creatures within 3ft of her that can hear her must make a DC 13 Constitution saving throw. On a failure, a creature drops to 0 hit points. On a success, a creature takes 10 (3d6) psychic damage.'}, {'Detect Life': 'The banshee can magically sense the presence of living creatures up to 5 miles away. She knows the general direction they are in but not their exact locations.', 'Incorporeal Movement': 'The banshee can move through other creatures and objects as if they were difficult terrain. She takes 5(1d10) force damage if she ends her turn inside an object.'}, 'Banshees appear as luminous wispy forms that vaguely recall their mortal features. A banshees face is wreathed in a wild tangle of hair its body clad in wispy rags that flutter and stream around it.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/972/1000/1000/638061101973584758.png'),
('Basilisk', 15, 52, 16, 8, 15, 2,	8, 7, 3, {'Bite': 'Melee Weapon Attack +5 to hit reach 5 ft. one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poiso n damage.'}, {'Petrifying Gaze': 'If a creature starts its turn within 30ft of the basilisk and the two of them can see each other the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isnt incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success the effect ends. On a failure the creature is petrified until freed by the greater restoration spell or other magic. A creature that isnt surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so it cant see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime it must immediately make the save. If the basilisk sees its reflection within 30ft of it in bright light it mistakes itself for a rival and targets itself with its gaze.'}, 'Basilisks had eight legs which they crawled upon. Basilisks came in a variety of colors from dark gray to dark orange although they also commonly had a dull brown body with a yellowish underbelly. Basilisks possessed a single row of bony spines that lined their backs and a few had a curved horn atop their noses. Basilisk eyes are however the most notable feature glowing with a pale green light.',	'https://www.dndbeyond.com/avatars/thumbnails/30761/974/1000/1000/638061102119934833.png'),
('Behir', 17, 168, 23, 16, 18, 7, 14, 12, 11, '{Multiattack: The behir makes two attacks one with its bite and one to constrict., Bite: Melee Weapon Attack +10 to hit reach 10ft one target. Hit 22 (3d10 + 6) piercing damage., Constrict: Melee Weapon Attack + 10 to hit reach 5 ft one large or smaller creature. Hit 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The target is grappled (escape DC 16) if the behir is not already constricting a creature and the target is restrained until this grapple ends.}', '{Lightning Breath: (Recharge 5-6). The behir exhales a line of lightning that is 20ft long and 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw taking 66 (12d10) lightning damage on a failed save or half as much damage on a successful one.', 'Swallow': 'The behir makes one bite attack against a medium or smaller target it is grappling. If the attack hits the target is also swallowed and the grapple ends. While swallowed the target is blinded and restrained it has total cover against attacks and other effects outside the behir and it takes 21 (6d6) acid damage at the start of each of the behirs turns. A behir can have only one creature swallowed at a time. If the behir takes 30 damage or more on a single turn from the swallowed creature the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature which fa lls prone in a space within 10ft of the behir. If the behir dies a swallowed creature is no longer restrained by it and can escape from the corpse by using 15ft of movement exiting prone.}', 'A behirs monstrous form resembles a combination of centipede and crocodile. Its scaled hide ranges from ultramarine to deep blue in color fading to pale blue on its underside.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/978/1000/1000/638061102241924981.png'),
('Beholder', 18, 180, 10, 14, 18, 17, 15, 17, 13, '{Bite: Melee Weapon Attack +5 to hit reach 5 ft one target. Hit 14 (4d6) piercing damage.}', '{Eye Rays: The beholder shoots three of the following magical eye rays at random (reroll duplicates) choosing one to three targets it can see within 120ft of it 1) Charm Ray / 2) Paralyzing Ray / 3) Fear Ray / 4) Slowing Ray / 5) Enervation Ray / 6) Telekinetic Ray / 7) Sleep Ray / 8) Petrification Ray / 9) Disintegration Ray / 10) Death Ray., Antimagic Cone: The beholders central eye creates an area of antimagic as in the anti magic field spell in a 150ft cone. At the start of each of its turns the beholder decides which way the cone faces and whether the cone is active. The area works against the beholders own eye rays.}', 'A beholders spheroid body levitates at all times and its great bulging eye sits above a wide toothy maw while the smaller eyestalks that crown its body twist and turn to keep its foes in sight. When a beholder sleeps it closes its central eye but leaves its smaller eyes open and alert.', 'https://www.dndbeyond.com/attachments/thumbnails/3/918/250/209/636288206263978085.jpg'),
('Beholder Death Tyrant', 19, 187, 10, 14, 14, 19, 15, 19, 14, '{Bite: Melee Weapon Attack +5 to hit reach 5ft one target. Hit 14 (4d6) piercing damage.}', '{Eye Rays: The beholder shoots three of the following magical eye rays at random (reroll duplicates) choosing one to three targets it can see within 120ft of it 1) Charm Ray / 2) Paralyzing Ray / 3) Fear Ray / 4) Slowing Ray / 5) Enervation Ray / 6) Telekinetic Ray / 7) Sleep Ray / 8) Petrification Ray / 9) Disintegration Ray / 10) Death Ray, Antimagic Cone: The beholders central eye creates an area of antimagic as in the anti magic field spell in a 150ft cone. At the start of each of its turns the beholder decides which way the cone faces and whether the cone is active. The area works against the beholders own eye rays.}', 'A death tyrant appears as a massive naked skull with a pinpoint of red light gleaming in its hollow eye socket. With its eyestalks rotted away ten spectral eyes hover above the creature and glare in all directions.', 'https://vignette.wikia.nocookie.net/forgottenrealms/images/b/b6/245beholder5eundead.jpg/revision/latest?cb=20171011164609'),
('Beholder Spectator', 14, 39, 8, 14, 14, 13, 14, 11, 3, '{Bite: Melee Weapon Attack +1 to hit reach 5ft one target. Hit 2 (1d6-1) piercing damage., Create Food and Water: The spectator magically creates enough food and water to sustain itself for 24 hours.}', '{Eye Rays: The beholder shoots three of the following magical eye rays at random (reroll duplicates) choosing one to three targets it can see within 120ft of it 1) Confusion Ray / 2) Paralyzing Ray / 3) Fear Ray / 4) Wounding Ray, Spell Reflection: If the spectator makes a successful saving throw against a spell or a spell attack misses it the spectator can choose another creature (including the spellcaster) it can see within 30ft of it. The spell targets the chosen creature instead of the spectator. If the spell forced a saving throw the chosen creature makes its own save. If the spell was an attack the attack roll is rerolled against the chosen creature.}', 'A spectator is a lesser beholder that is summoned from another plane of existence by a magical ritual the components of which include four beholder eyestalks that are consumed by the rituals magic. Appropriately a spectator has four eyes talks two on each side of the wide eye at the center of its four-foot diameter body.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/998/1000/1000/638061102728373114.png'),
('Blight Twig', 13, 4, 6, 13, 12, 4, 8, 3, 1/8, '{Claws: Melee Weapon Attack +3 to hit reach 5ft one target. Hit 3 (1d4 + 1) piercing damage.}', '{False Appearance: While the blight remains motionless it is indistinguishable from a dead shrub.}', 'Twig blights can root in soil which they do when living prey are scarce. While rooted they resemble woody shrubs. When it pulls its roots free of the ground to move a twig blights branches twist together to form a humanoid-looking body with a head and limbs.', 'https://www.dndbeyond.com/avatars/thumbnails/16/464/1000/1000/636376286997771487.png'),
('Blight Vine', 12, 26, 15, 8, 14, 5, 10, 3, 1/2, '{Constrict: Melee Weapon Attack +4 to hit reach 10ft one target. Hit 9 (2d6 + 2) bludgeoning damage and a large or smaller target is grappled (escape DC 12). Until this grapple ends the target is restrained and the blight can not constrict another target., Entangling Plants: (Recharge 5-6). Grasping roots and vines sprout in a 15ft radius centered on the blight withering away after 1 minute. For the duration that area is difficult terrain for non-plant creatures. In addition each creature of the blights choice in that area when the plants appear must succeed on a DC 12 Strength saving throw or become restrained. A creature can use its action to make a DC 12 Strength check freeing itself or another entangl ed creature within reach on a success.}', '{False Appearance: While the blight remains motionless it is indistingu is hable from a tangle of vines.}', 'Appearing as masses of slithering creepers vine blights hide in undergrowth and wait for prey to draw near. By animating the plants a round them vine blights entangle and hinder their foes before attacking.', 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/466/1000/1000/636376287271000215.png'),
('Blight Needle', 12, 11, 12, 12, 13, 4, 8, 3, 1/4, '{Claws: Melee Weapon Attack +3 to hit reach 5ft one target. Hit 6 (2d4 + 1) piercing damage.}', '{Needles: Ranged Weapon Attack +3 to hit range 30/60ft one target. Hit 8 (2d6 + 1) piercing damage.}', 'In the shadows of a forest needle blights might be taken at a distance for shuffling hunched humanoids. Up close these creatures reveal themselves as horrid plants whose conifer-like needles grow across their bodies in quivering clumps.', 'https://angrygolem-games.com/wp-content/uploads/2021/04/needle-blight.jpg'),
('Bugbear', 16, 27, 15, 14, 13, 8, 11, 9, 1, '{Morningstar: Melee Weapon Attack +4 to hit reach 5ft one target. Hit ll (2d8 + 2) piercing damage., Javelin: Melee or Ranged Weapon Attack +4 to hit reach 5ft or range 30/1 20ft one target. Hit 9 (2d6 + 2) piercing damage in melee or 5 (1d6 + 2) piercing damage at range.}', '{Brute: A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)., Surprise Attack: If the bugbear surprises a creature and hits it with an attack during the first round of combat the target takes an extra 7 (2d6) damage from the attack.}', 'Bugbears resemble hairy feral goblins standing seven feet tall. They take their name from their noses and claws which are similar to those of bears.', 'https://www.dndbeyond.com/avatars/thumbnails/31312/871/1000/1000/638084425511165687.png'),
('Bugbear Chief', 17, 65, 17, 14, 14, 11, 12, 11, 3, '{Multiattack: The bugbear makes two melee attacks., Morningstar: Melee Weapon Attack +5 to hit reach 5ft one target. Hit 12 (2d8 + 3) piercing damage., Javelin: Melee or Ranged Weapon Attack +5 to hit reach 5ft or range 30/120ft one target. Hit 10 (2d6 + 3) piercing damage in melee or 6 (1d6 + 3) piercing damage at range.}', '{Brute: A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)., Heart of Hruggek: The bugbear has advantage on saving throws against being charmed frightened paralyzed poisoned stunned or put to sleep., Surprise Attack: If the bugbear surprises a creature and hits it with an attack during the first round of combat the target takes an extra 7 (2d6) damage from the attack.}', 'Bugbears resemble hairy feral goblins standing seven feet tall. They take their name from their noses and claws which are similar to those of bears.', 'http://www.worldanvil.com/media/cache/cover/uploads/images/497a2de99d5cfb07107d77c61f65f082.jpg'),
('Bulette', 17, 94, 19, 11, 21, 2, 10, 5, 5, '{Bite: Melee Weapon Attack +7 to hit reach 5ft one target. Hit 30 (4d12 + 4) piercing damage.}', '{Standing Leap: The bulettes long jump is up to 30ft and its high jump is up to 15ft with or without a running start., Deadly Leap: If the bulette jumps at least 15ft as part of its movement it can then use this action to land on its feet in a space that contains one or more other creatures. Each ofthose creatures must succeed on a DC 16 Strength or Dexterity saving throw (targets choice) or be knocked prone and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage. On a successful save the creature takes only half the damage is not knocked prone and is pushed 5ft out of the bulettes space into an unoccupied space of the creatures choice. If no unoccupied space is with in range the creature instead falls prone in the bulettes space.}', 'Around the head and rear this armor was a blue-brown color while in-between the hue might range from gray-blue to blue-green. Areas around the eyes were slightly darkened with the eyes themselves being a yellow color with blue-green pupils. A bulettes body was covered in thick, layered plates. Its head is bullet-shaped similar to that of a shark, with a massive mouth. It has stumpy but powerful legs.', 'https://www.dndbeyond.com/avatars/thumbnails/30762/8/1000/1000/638061103017271419.png'),
('Bullywug', 15, 11, 12, 12, 13, 7, 10, 7, 1/4, '{Multiattack: The bullywug makes two melee attacks one with its bite and one with its spear., Bite: Melee Weapon Attack +3 to hit reach 5ft one target. Hit 3 (1d4 + 1) bludgeoning damage., Spear: Melee or Ranged Weapon Attack +3 to hit reach 5ft or range 20/60ft one target. Hit 4 (1d6 + 1) piercing damage or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.}', '{Amphibious: The bullywug can breathe air and water., Speak with Frogs and Toads: The bullywug can communicate simple concepts to frogs and toads when it speaks in Bullywug., Swamp Camouflage: The bullywug has advantage on Dexterity (Stealth) checks made to hide in swampy terrain., Standing Leap: The bullywugs long jump is up to 20ft and its high jump is up to 10ft with or without a running start.}', 'Bullywugs have green gray or mottled yellow skin that shifts through shades of gray green and brown allowing them to blend in with their surroundings.', 'https://www.aidedd.org/dnd/images/bullywug.jpg'),
('Cambion', 19, 82, 18,	18, 16, 14,	12,	16,	5, '{Multiattack: The cambion makes two melee attacks or uses its Fire Ray twice., Spear: Melee or Ranged Weapon Attack +7 to hit reach 5ft or range 20/60ft one target. Hit 7 (1d6 + 4) piercing damage or 8 (1 d8 + 4) piercing damage if used with two hands to make a melee attack plus 3 (1 d6) fire damage., Fire Ray: Ranged Spell Attack +7 to hit range 120ft one target. Hit 10 (3d6) fire damage.}', '{Fiendish Charm: One humanoid the cambion can see within 30ft of it must succeed on a DC 14 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the cambions spoken commands. If the target suffers any harm from the cambion or another creature or receives a suicidal command from the cambion the target can repeat the saving throw ending the effect on itself on a success. If a targets saving throw is successful or if the effect ends for it the creature is immune to the cambions Fiendish Charm for the next 24 hours., Fiendish Blessing: The AC of the cambion includes its Charisma bonus., Innate Spellcasting: The cambions spellcasting ability is Charisma (spell save DC 14). The cambion can innately cast the following spells requiring no material components 3/day each alter self command detect magic 1/day plane shift (self only)}', 'A cambion is the offspring of a fiend (usually a succubus or incubus) and a humanoid (usually a human). Cambions inherit aspects of both parents but their horns leathery wings and sinewy tails are hallmarks of their otherworldly parentage.', 'https://www.aidedd.org/dnd/images/cambion.jpg'),
('Carrion Crawler', 13, 51, 14, 13, 16, 1, 12, 5, 2, '{Multiattack: The carrion crawler makes two attacks one with its tentacles and one with its bite., Tentacles: Melee Weapon Attack +8 to hit reach 10ft one creature. Hit 4 (1 d4 + 2) poison damage and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends the ta rget is paralyzed. The target can repeat the saving throw at the end of each of its turns ending the poison on itself on a success., Bite: Melee Weapon Attack +4 to hit reach 5ft one target. Hit 7 (2d4 + 2) piercing damage.}', '{Keen Smell: The carrion crawler has advantage on Wisdom (Perception) checks that rely on smell., Spider Climb: The carrion crawler can climb difficult surfaces including upside down on ceilings without needing to make an ability check.}', 'Carrion crawlers are large pale yellow and greenish aberrations whose appearance is akin to a three-to-four-foot-long centipede. Crawlers possessed eight long tentacles protruding from the sides of their heads allowing them to stun prey. Carrion crawlers also have two eye stalks through which they could perceive their surroundings even in the darkest caverns. Additionally carrion crawlers had a highly developed sense of smell.', 'https://www.aidedd.org/dnd/images/carrion-crawler.jpg'),
('Centaur', 12, 45, 18, 14, 14, 9, 13, 11, 2, '{Multiattack: The centaur makes two attacks one with its pike and one with its hooves or two with its longbow., Pike: Melee Weapon Attack +6 to hit reach 10ft one target. Hit 9 (1d10 + 4) piercing damage., Hooves: Melee Weapon Attack +6 to hit reach 5 ft one target. Hit 11 (2d6 + 4) bludgeoning damage., Longbow: Ranged Weapon Attack +4 to hit range 150/600ft one target. Hit 6 (1d8 + 2) piercing damage.}', '{Charge: If the centaur moves at least 30ft straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10 (3d6) piercing damage.}', 'A centaur has the body of a great horse topped by a humanoid torso head and arms.', 'https://www.dndbeyond.com/avatars/thumbnails/30762/233/1000/1000/638061114013567234.png'),
('Chimera', 14,	114, 19, 11, 19, 3, 14, 10, 6, '{Multiattack: The chimera makes three attacks one with its bite one with its horns and one with its claws. When its fire breath is available it can use the breath in place of its bite or horns., Bite: Melee Weapon Attack +7 to hit reach 5ft one target. Hit 11 (2d6 + 4) piercing damage., Horns: Melee Weapon Attack +7 to hit reach 5 ft one target. Hit 10 (1d12 + 4) bludgeoning damage., Claws: Melee Weapon Attack +7 to hit reach 5ft one target. Hit 11 (2d6 + 4) slashing damage}', '{Fire Breath: (Recharge 5-6). The dragon head exhales fire in a 15ft cone. Each creature in that area must make a DC 15 Dexterity saving throw taking 31 (7d8) fire damage on a failed save or half as much damage on a successful one.}', 'A typical specimen has the hindquarters of a large goat the forequarters of a lion and the leathery wings of a dragon along with the heads of all three of those creatures. The monster likes to surprise its victims swooping down from the sky arid engulfing prey with its fiery breath before landing.', 'https://www.dndbeyond.com/avatars/thumbnails/30762/236/1000/1000/638061114170787382.png'),
('Chuul', 16, 93, 19, 10, 16, 5, 11, 5, 4, '{Multiattack: The chuul makes two pincer attacks. If the chuul is grappling a creature the chuul can also use its tentacles once., Pincer: Melee Weapon Attack +6 to hit reach 10ft one target. Hit 11 (2d6 + 4) bludgeoning damage. The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul does not have two other creatures grappled., Tentacles: One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends the target is paralyzed. The target can repeat the saving throw at the end of each of its turns ending the effect on itself on a success.}', '{Amphibious: The chuul can breathe air and water., Sense Magic: The chuul senses magic within 120ft of it at will. This trait otherwise works like the detect magic spell but is not itself magical.}', 'Chuuls have been described as a horrible mix of crustacean insect and serpent but most closely resembled an 8ft tall yellow-green lobster weighing around 650 pounds with four long legs two large claws a strong protective exoskeleton a fan-like tail and a mass of paralysis-causing tentacles around its mouth.', 'https://www.dndbeyond.com/avatars/thumbnails/30762/240/1000/1000/638061114295167448.png'),
('Deva', 17, 136, 18, 18, 18, 17, 20, 20, 10, '{Multiattack: The deva makes two melee attacks., Mace: Melee Weapon Attack +8 to hit reach 5ft one target. Hit 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage., Healing Touch: (3/Day). The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse disease poison blindness or deafness., Change Shape: The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the devas choice). In a new form the deva retains its game statistics and ability to speak but its AC movement modes Strength Dexterity and special senses are replaced by those of the new form and it gains any statistics and capabilities (except class features legendary actions and lair actions) that the new form has but that it lacks.}', '{Angelic Weapons: The devas weapon attacks are magical. When the deva hits with any weapon the weapon deals an extra 4d8 radiant damage (included in the attack)., Innate Spellcasting: Th e devas spell casting ability is Charisma (spell save DC 17). The deva can innately cast the following spells requiring only verbal components At will detect evil and good 1/day each commune raise dead, Magic Resistance: The deva has advantage on saving throws against spells and other magical effects.}', 'Devas are angels that act as divine messengers or agents to the Material Plane the Shadowfell and the Feywild and that can assume a form appropriate to the realm they are sent to. A deva can take any shape although it prefers to appear to mortals as an innocuous humanoid or animal. When circumstances require that it cast off its guise a deva is a beautiful humanoid-like creature with silvery skin. Its hair and eyes gleam with an unearthly luster and large feathery wings unfurl from its shoulder blades.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/784/1000/1000/638061093601900776.png'),
('Planetar', 19, 200, 24, 20, 24, 19, 22, 25, 16, '{Multiattack: The planetar makes two melee attacks., Greatsword: Melee Weapon Attack +12 to hit reach 5ft one target. Hit 21 (4d6 + 7) slashing damage plus 22 (5d8) radiant damage., Healing Touch: (4/Day) The planetar touches another creature the target magically regains 30 (6d8 + 3) hit points and is freed from any curse disease poison blindness or deafness.}', '{Angelic Weapons: The planetars weapon attacks are magical when the planetar hits with any weapon the weapon deals an extra 5d8 radiant damage (included in the attack)., Divine Awareness: The Planetar knows if it hears a lie., Magic Resistance: The planetar has advantage on saving throws against spells and other magical effects., Innate Spellcasting: The planetars spellcasting ability is Charisma (spell save DC 20). The planetar can innately cast the following spells requiring no material components At will detect evil and good invisibility (self only) / 3/day each blade barrier dispel evil and good flame strike raise dead / 1/day each commune control weather insect plague}', 'Planetars are muscular and hairless and have opalescent green skin and white-feathered wings. They tower over most humanoids brandishing immense swords with grace.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/799/1000/1000/638061094132481081.png'),
('Solar', 21, 243, 26, 22, 26, 25, 25, 30, 21, '{Greatsword: Melee Weapon Attack +15 to hit reach 5ft one target. Hit 22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage., Slaying Longbow: Ranged Weapon Attack +13 to hit range 120/600ft one target. Hit 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 190 hit points or fewer it must succeed on a DC 15 Constitution saving throw or die., Flying Sword: Releases its greatsword to hover magically in an unoccupied space within 5ft of it. If the solar can see the sword the solar can mentally command it as a bonus action to fly up to 50ft and either make one attack against a target or return to the solars hands. If the hovering sword is targeted by any effect the solar is considered to be holding it. The hovering sword falls if the solar dies., Healing Touch: (4/Day). The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease poison blindness or deafness.}', '{Teleport: Magically teleports along with any equipment it is wearing or carrying up to 120ft to an unoccupied space it can see., Searing Burst: (Costs 2 Actions). The solar emits magical, divine energy. Each creature of its choice in a 10ft radius must make a DC 23 Dexterity saving throw taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save or half as much damage on a successful one., Blinding Gaze: (Costs 3 Actions). The solar targets one creature it can see within 30ft of it. If the target can see it the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness.}', 'The Solar resembles a towering powerfully built human with brilliant topaz eyes silvery (or golden) skin and gleaming white wings.', 'https://www.dndbeyond.com/avatars/thumbnails/30761/809/1000/1000/638061094428241214.png'),
('bob', 12, 13, 10, 14, 10, 11, 12, 11, 1/4, {'Talon': 'Melee Weapon Attack +4 to hit reach 5 ft. one target. Hit 4 (1d4 + 2) slashing damage.',	'Javelin': 'Melee or Ranged Weapon Attack +4 to hit reach 5 ft. or range 30/120 ft. one target. Hit 5 (1d6 + 2) piercing damage.'}, {'Dive Attack': 'If the aarakocra is flying and dives at least 30ft straight toward a target and then hits it with a melee weapon attack the attack deals an extra 3 (1d6) damage to the target.', 'Bite (Ex)': 'When grounded an aarakocra attacks with its beak (+1 melee) dealing 1d3 points of damage on a successful attack.', 'Summon Large Air Elemental (Su)': 'Five aarakocra within 30 feet of each other can magically summon an air elemental. Each of the five must use its action and movement on three consecutive turns to perform an aerial dance and must maintain concentration while doing so (as if concentrating on a spell). When all five have finished their third turn of the dance the elemental appears in an unoccupied space within 60ft of them. It is friendly toward them and obeys their spoken commands. It remains for 1 hour until it or all its summoners die or until any of its summoners dismisses it as a bonus action. A summoner can not perform the dance again until it finishes a short rest. When the elemental returns to the Elemental Plane of Air any aarakocra within 5 feet of it can return with it.'}, 'Aarakocra are bird-like humanoids with feathers and a beak. Their hands have three fingers and a thumb and they also have a pair of feathered wings. Aarakocra have lean legs ending in talons. Aarakocra look like large birds from below until they land. Aarakocra have advantage on saving throws against lightning and thunder damage as well as against spells or powers that manipulate air such as gust of wind wind wall or an air elementals whirlwind power. Aarakocra have lean lightweight bodies typically 80 to 100 pounds. Their skeletons are hollow and fragile. Their wings anchor in a bony chest plate that provides some slight natural protection.', 'https://www.dndbeyond.com/avatars/thumbnails/7/622/420/618/636286750209394240.png')`,
        (err, data) => {
            if(err){
                console.log("Insert failed");
            }else{
                console.log(data);
            }
        });

//close connection
pool.end();