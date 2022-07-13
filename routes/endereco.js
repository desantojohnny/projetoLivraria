var express = require('express');
var router = express.Router();

/* PAGE ENDEREÇO 
(OBS.: O professor pediu para juntar as páginas (Novo Enderço + Endereço)
 e fazer uma só, chamada "Endereço". */

router.get('/', function (req, res, next){
    res.render('endereco', {title: 'Endereço | Livraria Martin'});
})  

module.exports = router;