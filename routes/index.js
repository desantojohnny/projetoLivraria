var express = require('express');
var router = express.Router();
var LoginController = require('../controllers/LoginControllers');
var ProdutoController = require('../controllers/ProdutoController');
var  CadastreSeController = require('../controllers/CadastreSeController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Livraria Martin' });
});

/* login page */
router.get('/login', LoginController.index);

/* Descrição do produto - page */
router.get('/produto', ProdutoController.index);


module.exports = router;
