var express = require('express');
var router = express.Router();
var LoginController = require('../controllers/LoginControllers');
var ProdutoController = require('../controllers/ProdutoController');
var  CadastreSeController = require('../controllers/CadastreSeController')
var EnderecoController = require('../controllers/EnderecoController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Livraria Martin' });
});

/* login page */
router.get('/login', LoginController.index);

/* Descrição do produto - page */
router.get('/produto', ProdutoController.index);

/* Página: Cadastre-se*/
router.get('/cadastrese', CadastreSeController.index);

/* Página: Endereço*/
router.get('/endereco', EnderecoController.index);

module.exports = router;
