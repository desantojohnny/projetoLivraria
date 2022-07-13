var express = require('express');
var router = express.Router();

/* Carrinho - Passo 3*/

router.get('/', function (req, res, next){
    res.render('carrinhoPasso3', {title: 'Carrinho - Passo 3 | Livraria Martin'});
})  

module.exports = router;