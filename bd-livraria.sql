DROP DATABASE IF EXISTS livraria;
CREATE DATABASE livraria;
USE livraria;

create table BOOK (
	id INT primary key auto_increment,
	title VARCHAR(200) NOT NULL,
	release_year DATE NOT NULL,
	price DECIMAL(6,2) NOT NULL,
	pages INT NOT NULL,
	url_image VARCHAR(200) NOT NULL,
	authors VARCHAR(50) NOT NULL,
	category VARCHAR(20) NOT NULL,
	editora VARCHAR(50) NOT NULL,
	ISBN VARCHAR(50) NOT NULL,
	estoque INT NOT NULL
) CHARSET=utf8 COLLATE=utf8_unicode_ci;