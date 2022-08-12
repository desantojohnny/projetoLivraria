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
const DadosFormularioUserController = require('../controllers/DadosFormularioUserController');
const NovaRotaController = require('../controllers/NovaRotaController');
const logDBMiddleware = require('../middlewares/log.DB');


/* GET home page. */
router.get('/', ProdutoController.searchHighlightsProducts);

/* login page */
router.get('/login', LoginController.index);
// router.post('/login', LoginController.store);
// router.get('/logout', LoginController.logout);



/* Todos os produtos - page */
router.get('/produtos', ProdutoController.searchAllProducts);

/* Descrição do produto - page */
router.get('/produto/:id', ProdutoController.productDetail);


/* Página: Cadastre-se*/

router.get('/register', LoginController.index); 
router.post('/register', logDBMiddleware, LoginController.submit); //Inserido um Middleware - Entre rota e controller

/* Página: Endereço*/
router.get('/endereco', EnderecoController.index);

/* Página: Carrinho - Passo 1*/
// router.get('/carrinhoPasso1', CarrinhoPasso1Controller.index);

/* Página: Carrinho - Passo 2*/
router.get('/carrinhoPasso2', CarrinhoPasso2Controller.index);

/* Página: Carrinho - Passo 3*/
router.get('/carrinhoPasso3', CarrinhoPasso3Controller.index);

/* Página: Carrinho - Passo 4*/
router.get('/carrinhoPasso4', CarrinhoPasso4Controller.index);

/* Página: Pedido Finalizado*/
router.get('/pedidoFinalizado', PedidoFinalizadoController.index);

/* Página: Test Dados do Formulário*/
router.post('/dadosFormularioUser', DadosFormularioUserController.index);

/* Página: Pedido Finalizado*/
router.get('/novaRota', NovaRotaController.index);

module.exports = router;
