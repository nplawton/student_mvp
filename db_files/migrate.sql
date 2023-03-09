CREATE TABLE type (
    type_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    description text
)

CREATE TABLE descrip (
    descrip_id SERIAL PRIMARY KEY NOT NULL,
    size text,
    speed text,
    d_descrip text,
    info text,
    mon_img text
)

CREATE TABLE stats (
    stat_id SERIAL PRIMARY KEY NOT NULL,
    armor INTEGER NOT NULL,
    strength INTEGER NOT NULL,
    cons INTEGER NOT NULL,
    dex INTEGER NOT NULL,
    intel INTEGER NOT NULL,
    wis INTEGER NOT NULL,
    charisma INTEGER NOT NULL,

)

CREATE TABLE creature(
    id SERIAL PRIMARY KEY NOT NULL,
    c_name VARCHAR(200) NOT NULL,
    alignment_id INTEGER NOT NULL,
    type_id INTEGER NOT NULL REFERENCES type (type_id),
    health INTEGER NOT NULL,
    exp INTEGER NOT NULL,
    chal INTEGER,
    descrip_id INTEGER NOT NULL REFERENCES descrip (descrip_id),
    stat_id INTEGER NOT NULL REFERENCES stats (stat_id),
    attack_id INTEGER NOT NULL,
    spattack_id INTEGER NOT NULL
)