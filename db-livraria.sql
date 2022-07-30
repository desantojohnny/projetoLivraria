DROP DATABASE IF EXISTS db-livraria;
CREATE DATABASE db-livraria;
USE db-livraria;

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
),

create table ORDER (
	id INT primary key auto_increment,
	payment VARCHAR(20) NOT NULL,
	request_date DATE NOT NULL,
	client_id INT foreign key
),

create table CLIENT (
	id INT primary key auto_increment,
	full_name VARCHAR(200) NOT NULL,
	adress VARCHAR(200) NOT NULL,
	CPF INT NOT NULL,
	email VARCHAR(50) NOT NULL,
	phone INT NOT NULL,
	birthday DATE NOT NULL	
) CHARSET=utf8 COLLATE=utf8_unicode_ci;