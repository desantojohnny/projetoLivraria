var express = require('express');
var router = express.Router();

/* Pedido Finalizado*/

router.get('/', function (req, res, next){
    res.render('pedidoFinalizado', {title: 'Pedido Finalizado Com Sucesso! | Livraria Martin'});
})  

module.exports = router;