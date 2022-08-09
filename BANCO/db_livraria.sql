DROP DATABASE IF EXISTS db_livraria;

CREATE DATABASE db_livraria;

USE db_livraria;

DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `release_year` year NOT NULL,
  `price` decimal(6, 2) NOT NULL,
  `pages` int(10) unsigned DEFAULT NULL,
  `url_image` varchar(30) DEFAULT NULL,
  `authors` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `category` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `editora` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ISBN` varchar(20) DEFAULT NULL,
  `estoque` int(10) unsigned NOT NULL,
  `destaque` int(10) unsigned NOT NULL,
  `best` int(10) unsigned NOT NULL,
  `releasing` int(10) unsigned NOT NULL,
  `sinopse` varchar(1500) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `books` WRITE;

INSERT INTO
  `books`
VALUES
(1, 'Redes de Computadores', 2021, 216.75, 624, '/images/livro_imagem1.jpg', 'Andrew Tanenbaum, Nick Feamster', 'Redes', 'Bookman', '978-8582605608', 3, 0, 0, 1, 'Nesta que é a bíblia de redes de computadores, Tanenbaum, Feamster & Wetherall explicam o funcionamento das redes de dentro para fora. Isto é, começam com a camada física das redes, dos computadores e dos sistemas de transmissão e vão até às aplicações. Os capítulos  apresentam os conceitos-chave e são ilustrados por exemplos de redes reais: Internet, redes sem fio, incluindo LANs sem fio; banda larga sem fio e Bluetooth. Esta 6ª edição de Redes de computadores traz muitas mudanças. Todos os capítulos foram atualizados e o Capítulo 8, que trata de segurança, foi completamente reformulado, priorizando a segurança de redes.'),
(2, 'Sistema de Banco de Dados', 2020, 245.07, 754, '/images/livro_imagem2.jpg', 'Abraham SILBERSCHATZ, S. KORTH Henry F. SUDARSHAN', 'Engenharia', 'LTC', '978-8595157330', 2, 0, 1, 0, 'Tudo sobre sistema de banco de dados: dos fundamentos aos novos conceitos. Com questões práticas e teóricas, este livro apresenta aplicação, gerenciamento e implementação de banco de dados e inclui os assuntos recentes da área, como Big Data e blockchain. Como diferencial, Sistema de Banco de Dados apresenta conceitos e algoritmos em um ambiente geral, não ligados a um sistema de dados específico, o que flexibiliza a aplicação da teoria a cenários diversos. Além disso, oferece variedade de exercícios em diferentes níveis de complexidade e ferramentas de suporte ao aprendizado.'),
(3, 'Algoritmos - Teoria e Prática', 2012, 318.99, 944, '/images/livro_imagem3.jpg', 'Thomas Thomas Cormen', 'Programação', 'LTC', '978-8535236996'
, 1, 0, 0, 0, 'Este livro apresenta um texto abrangente sobre o moderno estudo de algoritmos para computadores. É uma obra clássica, cuja primeira edição tornou-se amplamente adotada nas melhores universidades em todo o mundo, bem como padrão de referência para profissionais da área. Nesta terceira edição, totalmente revista e ampliada, as mudanças são extensivas e incluem novos capítulos, exercícios e problemas; revisão de pseudocódigos e um estilo de redação mais claro.A edição brasileira conta ainda com nova tradução e revisão técnica do Prof. Arnaldo Mandel, do Departamento de Ciência da Computação do Instituto de Matemática e Estatística da Universidade de São Paulo.'),
(4, 'Engenharia de software', 2021, 199.80, 704, '/images/livro_imagem4.jpg', 'Roger S. Pressman, Bruce R. Maxim', 'Programação', 'Bookman', '978-6558040101', 5, 1, 0, 0, 'A nova edição do livro-texto líder de mercado em engenharia de software traz uma série de novidades. O livro foi totalmente revisado e reestruturado para melhorar seu fluxo pedagógico.Traz novos e importantes processos e práticas da área, dentre eles o uso de inteligência artificial e machine learning para garantir velocidade e qualidade nas entregas. O autor enfatiza aspectos de qualidade de software, principalmente no uso de métodos ágeis. Segurança é outro item que ganhou destaque.'),
(5, 'Arquitetura e Organização de Computadores', 2017, 166.04, 864, '/images/livro_imagem5.jpg', 'William Stallings', 'Engenharia', 'Pearson', '978-8543020532', 4, 1, 0, 0, 'Arquitetura e organização de computadores, de William Stallings, além de apresentar as principais mudanças, inovações e melhorias na área de computação por meio de uma abordagem ampla e abrangente da área de arquitetura de computadores, também promove uma profunda reflexão sobre os fundamentos da área, estabelecendo relações com questões contemporâneas de design computacional.'),
(6, 'Introdução a Teoria da Computação', 2005, 80.16, 488, '/images/livro_imagem6.jpg', 'Michael Sipser', 'Programação', 'Cengage Learning', '978-8522104994', 2, 0, 1, 0, 'Esta obra apresenta a teoria da computação por meio de teoremas e provas, sempre com a preocupação do autor em mostrar a intuição por trás de cada resultado e em amenizar a leitura destas últimas, apresentando, para cada teorema, uma ideia da prova. Com este livro, através da prática de resolução de problemas, os alunos, nos exercícios, revisarão definições e conceitos da área e, nos problemas, irão se deparar com atividades que exigem maior engenhosidade.'),
(7, 'Introdução ao MongoDB', 2015, 40.55, 168, '/images/livro_imagem7.jpg', 'David Hows, Peter Membrey, Eelco Plugge', 'Programação', 'Novatec', '978-8575224229', 6, 0, 0, 1, 'Você precisa de uma introdução rápida e fácil aos bancos de dados MongoDB e NoSQL? O livro Introdução ao MongoDB, mostra como um sistema de banco de dados orientado a documentos difere de um banco de dados relacional, explica como instalá-lo e começar a usá-lo. Você também conhecerá o básico sobre o design do MongoDB, incluindo a indexação geoespacial, aprenderá a navegar, a visualizar e a fazer consultas em seu banco de dados e a usar o GridFS com um pouco de Python.'),
(8, 'Código limpo: Habilidades práticas do Agile Software', 2009, 75.44, 425, '/images/livro_imagem8.jpg', 'Robert C. Martin', 'Programação', 'Alta Books', '978-8576082675', 10, 0, 0, 0, 'Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito. Mas não precisa ser assim.O renomado especialista em software, Robert C. Martin, apresenta um paradigma revolucionário com Código limpo: Habilidades Práticas do Agile Software. Martin se reuniu com seus colegas do Mentor Object para destilar suas melhores e mais ágeis práticas de limpar códigos “dinamicamente” em um livro que introduzirá gradualmente dentro de você os valores da habilidade de um profissional de softwares e lhe tornar um programador melhor –mas só se você praticar.'),
(9, 'Estatística prática para cientistas de dados: 50 conceitos essenciais', 2019, 52.55, 392, '/images/livro_imagem9.jpg', 'Andrew Bruce, Peter Bruce', 'Matemática', 'Alta Books', '978-8550806037', 4, 0, 0, 1, 'Métodos estatísticos são uma parte crucial da ciência de dados; ainda assim, poucos cientistas de dados têm formação estatística. Os cursos e livros sobre estatística básica raramente abordam os tópicos sob a perspectiva da ciência de dados. Este guia prático explica como aplicar diversos métodos estatísticos em ciência de dados, ensina a evitar seu mau uso e aconselha sobre o que é importante e o que não é. Muitos recursos da ciência de dados incorporam métodos estatísticos, mas carecem de uma perspectiva estatística aprofundada. Se você está familiarizado com a linguagem de programação R e tem algum conhecimento estatístico, este guia fará a ponte de forma fácil e acessível.'),
(10, 'Criptografia e Segurança de Redes: Princípios e Práticas', 2014, 167.68, 560, '/images/livro_imagem10.jpg', 'William Stallings', 'Redes', 'Pearson', '978-8543005898', 7, 0, 1, 0, 'Este livro se destaca por seu viés prático e sua abordagem dinâmica. Com conteúdo abrangente e profundo e mais de 300 problemas propostos (de diferentes níveis de dificuldade), oferece aos estudantes e profissionais da área de TI uma perspectiva atualizada do mundo real e da indústria de tecnologia. Esta 6a edição traz importantes avanços tecnológicos, principalmente sobre segurança de redes e dados, que envolvem a criptografia por meio de definições detalhadas, sendo indicada para cursos de graduação e pós-graduação em análise e desenvolvimento de sistemas, redes de computadores e segurança da informação.'),
(11, 'Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes', 2016, 33.86, 144, '/images/livro_imagem11.jpg', 'Thomas Nield', 'Programação', 'Novatec', '978-8575225011', 3, 0, 1, 0, 'Atualmente as empresas estão coletando dados a taxas exponenciais e mesmo assim poucas pessoas sabem como acessá-los de maneira relevante. Se você trabalha em uma empresa ou é profissional de TI, este curto guia prático lhe ensinará como obter e transformar dados com o SQL de maneira significativa. Você dominará rapidamente os aspectos básicos do SQL e aprenderá como criar seus próprios bancos de dados.'),
(12, 'Sistemas Distribuídos: Princípios e Paradigmas', 2007, 193.14, 416, '/images/livro_imagem12.jpg', 'Andrew Tanenbaum, Maarten Van Steen', 'Engenharia', 'Pearson', '978-8576051428', 8, 1, 0, 0, 'Nesta segunda edição, melhorada e atualizada, Tanenbaum e Van Steen apresentam os detalhes de funcionamento dos sistemas distribuídos, bem como as tecnologias subjacentes. Ao separar princípios de paradigmas, os autores mostram como os princípios se relacionam uns com os outros, discutindo quatro classes diferentes de sistemas distribuídos, o que permite uma percepção ainda mais abrangente do conteúdo apresentado.');

UNLOCK TABLES;

DROP TABLE IF EXISTS `clients`;
CREATE TABLE `clients` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `first_name` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
    `last_name` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
    `adress` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
    `CPF` varchar(20) DEFAULT NULL,
    `phone` varchar(20) DEFAULT NULL,
    `birthday` date DEFAULT NULL,
    `email_login` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
    `password` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,   
    PRIMARY KEY (`id`)
) CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `clients` WRITE;

INSERT INTO
  `clients`
VALUES
(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

UNLOCK TABLES;

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `payment` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
    `request_date` date DEFAULT NULL,
    `client_id` int(10) unsigned DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `orders_client_id_foreign` (`client_id`),
    CONSTRAINT `orders_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`)
) CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `orders` WRITE;

INSERT INTO
  `orders`
VALUES
(1, NULL, NULL, NULL),
(2, NULL, NULL, NULL),
(3, NULL, NULL, NULL),
(4, NULL, NULL, NULL),
(5, NULL, NULL, NULL),
(6, NULL, NULL, NULL),
(7, NULL, NULL, NULL),
(8, NULL, NULL, NULL),
(9, NULL, NULL, NULL),
(10, NULL, NULL, NULL);

UNLOCK TABLES;  