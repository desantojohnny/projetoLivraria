var express = require('express');
var router = express.Router();
var LoginController = require('../controllers/LoginControllers');
var ProdutoController = require('../controllers/ProdutoController');
var CadastreSeController = require('../controllers/CadastreSeController');
var EnderecoController = require('../controllers/EnderecoController');
var CarrinhoPasso1Controller = require('../controllers/CarrinhoPasso1Controller');
var CarrinhoPasso2Controller = require('../controllers/CarrinhoPasso2Controller');
var CarrinhoPasso3Controller = require('../controllers/CarrinhoPasso3Controller');
var CarrinhoPasso4Controller = require('../controllers/CarrinhoPasso4Controller');
var PedidoFinalizadoController = require('../controllers/PedidoFinalizadoController');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Livraria Martin' });
});

/* login page */
router.get('/login', LoginController.index);

/* Descrição do produto - page */
router.get('/produto', ProdutoController.index);

/* Descrição do produto - page */
router.get('/cadastrese', CadastreSeController.index);
/* Página: Cadastre-se*/
router.get('/cadastrese', CadastreSeController.index);

/* Página: Endereço*/
router.get('/endereco', EnderecoController.index);

/* Página: Carrinho - Passo 1*/
router.get('/carrinhoPasso1', CarrinhoPasso1Controller.index);

/* Página: Carrinho - Passo 2*/
router.get('/carrinhoPasso2', CarrinhoPasso2Controller.index);

/* Página: Carrinho - Passo 3*/
router.get('/carrinhoPasso3', CarrinhoPasso3Controller.index);

/* Página: Carrinho - Passo 4*/
router.get('/carrinhoPasso4', CarrinhoPasso4Controller.index);

/* Página: Pedido Finalizado*/
router.get('/pedidoFinalizado', PedidoFinalizadoController.index);

module.exports = router;
