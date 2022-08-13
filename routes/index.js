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
const logDBMiddleware = require('../middlewares/log.DB'); //importando ...
const { body } = require('express-validator'); //importando ...
var auth = require("../middlewares/auth");

const validacoes = [                           //pegando informações pelo body (post) ...
    body('nome').notEmpty().isString().withMessage('O campo "nome" não pode ser vázio!'),        //body = input do formulário name=nome ...
    body('email').notEmpty().isEmail().withMessage('Por favor, insira um "e-mail" válido!')         //body = input do formulário name=email ...
];



/* GET home page. */
router.get('/', ProdutoController.searchHighlightsProducts);

/* login page */
router.get('/login', LoginController.index);
router.post('/login/register', LoginController.submit);
router.post('/login', LoginController.store);


/* Todos os produtos - page */
router.get('/produtos', ProdutoController.searchAllProducts);

/* Descrição do produto - page */
router.get('/produto/:id', ProdutoController.productDetail);


/* Página: Cadastre-se*/

//router.get('/register', LoginController.index); 
router.post('/register', logDBMiddleware, LoginController.submit); //Inserido um Middleware - Entre rota e controller ...


/* Página: Endereço*/
router.get('/endereco', EnderecoController.index);

/* Página: Carrinho - Passo 1*/
// router.get('/carrinhoPasso1', auth, CarrinhoPasso1Controller.index);

/* Página: Carrinho - Passo 2*/
router.get('/carrinhoPasso2', auth, CarrinhoPasso2Controller.index);

/* Página: Carrinho - Passo 3*/
router.get('/carrinhoPasso3', auth, CarrinhoPasso3Controller.index);

/* Página: Carrinho - Passo 4*/
router.get('/carrinhoPasso4', auth, CarrinhoPasso4Controller.index);

/* Página: Pedido Finalizado*/
router.get('/pedidoFinalizado', auth, PedidoFinalizadoController.index);

/* Página: Test Dados do Formulário*/
router.post('/dadosFormularioUser', DadosFormularioUserController.index);

/* Página: Pedido Finalizado*/
router.get('/novaRota', NovaRotaController.index);

module.exports = router;
