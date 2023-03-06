CREATE TABLE type (
    type_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    description text
)

CREATE TABLE creature(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    hp integer,
    xp integer,
    attack  text,
    special text,
    description text,
    information text,
    images text,
    size VARCHAR(50),
    ac integer,
    stre integer,
    cons integer,
    dex integer,
    intel integer,
    wis integer,
    charisma integer,
    chal integer,
    type text
)