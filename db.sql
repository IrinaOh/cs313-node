CREATE TABLE member(
id SERIAL PRIMARY KEY NOT NULL,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL
);

INSERT INTO member(first_name, last_name) VALUES ('Irina', 'OHara');
INSERT INTO member(first_name, last_name) VALUES ('Sean', 'OHara');
INSERT INTO member(first_name, last_name) VALUES ('Rachelle', 'OHara');

CREATE TABLE event(
event_id SERIAL PRIMARY KEY NOT NULL,
event_name VARCHAR(100) NOT NULL,
event_date VARCHAR(100) NOT NULL,
event_location VARCHAR(100) NOT NULL,
event_host INTEGER references member(id)
);

INSERT INTO event
	(event_name, event_date, event_location, event_host) 
VALUES 
	('Thanksgiving', 'November 24', 'Bountiful', 3),
	('Christmas Dinner', 'December 25', 'Bountiful', 3);

-- CREATE TABLE food_item(
-- item_id SERIAL PRIMARY KEY NOT NULL,
-- item_name VARCHAR(100) NOT NULL,
-- event_id INTEGER references event(event_id),
-- member_id INTEGER references member(id)
-- );

CREATE TABLE comment(
comment_id SERIAL PRIMARY KEY NOT NULL,
comment_text VARCHAR(300) NOT NULL,
member_id INTEGER references member(id),
event_id INTEGER references event(event_id)
);

INSERT INTO comment
	(comment_text, member_id, event_id) 
VALUES 
	('Thanksgiving was awesome last year. Cannot wait for one this year!', 1, 1),
	('Christmas Dinner is the best', 2, 2);

