var express = require('express');
var router = express.Router();
const db = require ('../database/models')
/* PAGE HOME */
router.get('/', function (req, res, next){
    res.render('home', {title: 'Home | Livraria Martin'});
})

module.exports = router;