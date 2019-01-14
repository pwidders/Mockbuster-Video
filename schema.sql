-- Create database
DROP DATABASE IF EXISTS mockbuster_db;
CREATE DATABASE mockbuster_db;

-- initialize database
USE Mockbuster_db;

-- Create a table with ID, Name, in-stock, and price
CREATE TABLE IF NOT EXISTS `movies` (
  `id` tinyint(30) NOT NULL AUTO_INCREMENT,
  `movie_name` varchar(255) NOT NULL,
  'rating' varchar(255) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `in_stock` tinyint(30) NOT NULL,
  `price` decimal(5, 2) NOT NULL,
  PRIMARY KEY (`id`)
  );

-- Creates new rows containing data in all named columns --
INSERT INTO movies (movie_name, genre, in_stock, price, rating)
VALUES ("Deep Impact", Action, 3, 3.50, PG-13);

INSERT INTO movies (movie_name, genre, in_stock, price, rating)
VALUES ("Godzilla", Sci-fi, 3, 3.50, PG-13);

INSERT INTO movies (movie_name, genre, in_stock, price, rating)
VALUES ("The Truman Show", Drama, 3, 3.50, PG);

INSERT INTO movies (movie_name, genre, in_stock, price, rating)
VALUES ("The X-Files", Mystery, 3, 3.50, PG-13);

INSERT INTO movies (movie_name, genre, in_stock, price, rating)
VALUES ("Mulan", Animation, 3, 3.50, G);

INSERT INTO movies (movie_name, genre, in_stock, price, rating)
VALUES ("Dr. Dolittle", Comedy, 3, 3.50, PG-13);

INSERT INTO movies (movie_name, genre, in_stock, price, rating)
VALUES ("Armageddon", Action, 3, 3.50, PG-13);

INSERT INTO movies (movie_name, genre, in_stock, price, rating)
VALUES ("Lethal Weapon 4", Comedy, 3, 3.50, R);

INSERT INTO movies (movie_name, genre, in_stock, price, rating)
VALUES ("Small Soldiers", Adventure, 3, 3.50, PG-13);

INSERT INTO movies (movie_name, genre, in_stock, price, rating)
VALUES ("The Mask of Zorro", Action, 3, 3.50, PG-13);

INSERT INTO movies (movie_name, genre, in_stock, price, rating)
VALUES ("There's Something About Mary", Comedy, 3, 3.50, R);

INSERT INTO movies (movie_name, genre, in_stock, price, rating)
VALUES ("Saving Private Ryan", Drama, 3, 3.50, R);