DROP DATABASE IF EXISTS moving;

CREATE DATABASE moving;

USE moving;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  password varchar(100) NOT NULL,
  zipcodefrom integer NOT NULL,
  totalbudget integer,
  PRIMARY KEY (id)
);

-- 'todos' table has 'one-to-many' relationship to a user: 
-- one user has many todos, each todo is unique to one user.
-- on signup, 'default' todo rows are created for the new user

CREATE TABLE todos (
  id int NOT NULL AUTO_INCREMENT,
  user integer NOT NULL REFERENCES users(id),
  task varchar(255) NOT NULL,
  price int,
  complete boolean NOT NULL default 0,
  searchterm varchar(255),
  PRIMARY KEY (id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
