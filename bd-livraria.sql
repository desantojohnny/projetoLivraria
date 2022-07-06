DROP DATABASE IF EXISTS livraria;
CREATE DATABASE livraria;
USE livraria;

create table livros (
	id INT primary key auto_increment,
	titulo VARCHAR(200) NOT NULL,
	quantidade_paginas INT NOT NULL,
	autor VARCHAR(50) NOT NULL,
	ano_lancamento VARCHAR(50) NOT NULL,
	estoque INT NOT NULL
) CHARSET=utf8 COLLATE=utf8_unicode_ci;