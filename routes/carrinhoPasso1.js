var express = require('express');
var router = express.Router();

/* Carrinho - Passo 1*/

router.get('/', function (req, res, next){
    res.render('carrinhoPasso1', {title: 'Carrinho - Passo 1 | Livraria Martin'});
})  

module.exports = router;