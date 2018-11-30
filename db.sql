CREATE TABLE member(
id SERIAL PRIMARY KEY NOT NULL,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL
);

INSERT INTO member(first_name, last_name) VALUES ('Irina', 'OHara');
INSERT INTO member(first_name, last_name) VALUES ('Sean', 'OHara');