var express = require('express');
var router = express.Router();
const db = require ('../database/models')
/* PAGE PRODUTO */
router.get('/produto/:id', function (req, res, next){
    res.render('detalhe-produto', {title: 'Produto | Livraria Martin'});
})

module.exports = router;