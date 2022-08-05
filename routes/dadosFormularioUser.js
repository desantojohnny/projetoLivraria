var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); 



// body-parser//
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.jason());

/*Página Dados Formulário*/

router.get('/', 
function (req, res, next){
    res.render('dadosFormularioUser', {title: 'Dados Formulário | Livraria Martin'});
    // res.render('Nome: '+req.body.nome+' Sobrenome: '+req.body.sobrenome)
})  

module.exports = router;