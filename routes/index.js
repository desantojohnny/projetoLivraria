var express = require('express');
var router = express.Router();
var LoginController = require('../controllers/LoginControllers');
var ProdutoController = require('../controllers/ProdutoController');
var CadastreSeController = require('../controllers/CadastreSeController');
var EnderecoController = require('../controllers/EnderecoController');
var CarrinhoController = require('../controllers/CarrinhoController');
var CarrinhoPasso2Controller = require('../controllers/CarrinhoPasso2Controller');
var CarrinhoPasso3Controller = require('../controllers/CarrinhoPasso3Controller');
var CarrinhoPasso4Controller = require('../controllers/CarrinhoPasso4Controller');
var PedidoFinalizadoController = require('../controllers/PedidoFinalizadoController');
const DadosFormularioUserController = require('../controllers/DadosFormularioUserController');
const NovaRotaController = require('../controllers/NovaRotaController');
const logDBMiddleware = require('../middlewares/log.DB'); //importando ...
const { body } = require('express-validator'); //importando ...
var auth = require("../middlewares/auth");


const validations = [                           //pegando informações pelo body (post) ...
    body('nome')
        .notEmpty().withMessage('O campo "Nome" não pode ser vázio!').bail()
        .isString().withMessage('Este não é um nome válido!'),
    body('sobrenome')
        .notEmpty().withMessage('O campo "Sobrenome" não pode ser vázio!').bail()
        .isString().withMessage('Este não é um sobrenome válido!'),
    body('endereco')
        .notEmpty().withMessage('O campo "Endereço" não pode ser vázio!').bail()
        .isString().withMessage('Este não é um endereço válido!'),
    body('cpf')
        .notEmpty().withMessage('O campo "CPF" não pode ser vázio!').bail()
        .isLength({min:14, max:14}).withMessage('O CPF deve ter apenas 11 dígitos!'),
    body('telefone')
        .notEmpty().withMessage('O campo "Telefone" não pode ser vázio!').bail()
        .isLength({min:11, max:12}).withMessage('O telefone deve ter entre 10 e 12 dígitos!'),
    body('email')
        .notEmpty().withMessage('O campo "Email" não pode ser vázio!').bail()
        .isEmail().withMessage('Por favor, insira um "e-mail" válido!'),
    body('senha')
        .notEmpty().withMessage('O campo "Senha" não pode ser vázio!').bail()
        .isLength({min:5, max:12}).withMessage('A senha deve ter entre 5 e 12 dígitos!')
];



/* GET home page. */
router.get('/', ProdutoController.searchHighlightsProducts);

/* login page */
router.get('/login', LoginController.index);
router.post('/login/register', validations, LoginController.submit);
router.post('/login', LoginController.store);


/* Todos os produtos - page */
router.get('/produtos', ProdutoController.searchAllProducts);

/* Descrição do produto - page */
router.get('/produto/:id', ProdutoController.productDetail);
router.post('/add-produto-ao-carrinho/:id', ProdutoController.addToCart);
router.post('/comprar-produto/:id', ProdutoController.shop);
router.delete('/removeCart/:id', CarrinhoController.destroy);




/* Página: Cadastre-se*/

//router.get('/register', LoginController.index); 
router.post('/register', logDBMiddleware, LoginController.submit); //Inserido um Middleware - Entre rota e controller ...


/* Página: Endereço*/
router.get('/endereco', EnderecoController.index);

/* Página: Carrinho - Passo 1*/
router.get('/carrinhoPasso1', auth, CarrinhoController.index);

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
