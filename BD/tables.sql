CREATE DATABASE Zadanie;

CONNECT Zadanie;

CREATE TABLE People
    (id integer NOT NULL AUTO_INCREMENT,
    name char(10) NOT NULL,
    surname char(10) NOT NULL,
    company char(10) NOT NULL,
		PRIMARY KEY (id));

INSERT INTO People (id, name, surname, company)
    VALUES (1, 'Rufina', 'Valieva', 'TagaZ');

INSERT INTO People (id, name, surname, company)
    VALUES (2, 'Viktor', 'Kuzmenko', 'TagAz');

INSERT INTO People (id, name, surname, company)
    VALUES (3, 'Eduard', 'Kuznetsov', 'Home');

INSERT INTO People (id, name, surname, company)
    VALUES (4, 'Viktor', 'Surnev', 'CompaN');

INSERT INTO People (id, name, surname, company)
    VALUES (5, 'Evgeny', 'Danilov', 'Ukos');
