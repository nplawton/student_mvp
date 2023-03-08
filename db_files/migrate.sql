CREATE TABLE type (
    type_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    description text
)

CREATE TABLE creature(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(200) NOT NULL,
    alignment_id integer,
    type_id integer,
    
    
)