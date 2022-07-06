var express = require('express');
var router = express.Router();

/* PAGE LOGIN */
router.get('/', function (req, res, next){
    res.render('login', {title: 'Login | Livraria Martin'});
})

module.exports = router;