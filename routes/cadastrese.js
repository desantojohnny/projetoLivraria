var express = require('express');
var router = express.Router();

/* PAGE CADASTRESE */
router.get('/', function (req, res, next){
    res.render('cadastrese', {title: 'Cadastre-se | Livraria Martin'});
})  

module.exports = router;