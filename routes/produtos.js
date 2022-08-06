var express = require('express');
var router = express.Router();
const db = require ('../database/models')
/* PAGE HOME */
router.get('/produtos', function (req, res, next){
    res.render('produtos', {title: 'Todos os produtos | Livraria Martin'});
})

module.exports = router;