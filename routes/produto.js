var express = require('express');
var router = express.Router();

/* PAGE PRODUTO */
router.get('/produto/:id', function (req, res, next){
    res.render('produto', {title: 'Produto | Livraria Martin'});
})

module.exports = router;