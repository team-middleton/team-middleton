DROP DATABASE IF EXISTS moving;

CREATE DATABASE moving;

USE moving;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  zipcodefrom integer NOT NULL,
  zipcodeto integer NOT NULL,
  totalbudget integer,
  PRIMARY KEY (id)
);

CREATE TABLE todos (
  id int NOT NULL AUTO_INCREMENT,
  user integer NOT NULL REFERENCES users(id),
  task varchar(255) NOT NULL,
  price int,
  complete boolean NOT NULL default 0,
  search_term varchar(255),
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

-- want to have default tasks populate to user upon creation
-- create default template for user creation
