var express = require('express');
var router = express.Router();

/* Carrinho - Passo 4*/

router.get('/', function (req, res, next){
    res.render('carrinhoPasso4', {title: 'Carrinho - Passo 4 | Livraria Martin'});
})  

module.exports = router;