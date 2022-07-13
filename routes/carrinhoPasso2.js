var express = require('express');
var router = express.Router();

/* Carrinho - Passo 2*/

router.get('/', function (req, res, next){
    res.render('carrinhoPasso2', {title: 'Carrinho - Passo 2 | Livraria Martin'});
})  

module.exports = router;