var express = require('express');
var router = express.Router();
const db = require ('../database/models')
/* PAGE PRODUTO */
router.get('/', async function (req, res, next){
   const books = await db.Book.findAll();
   res.send(books)
    /*res.render('produto', {title: 'Produto | Livraria Martin'});*/
})

module.exports = router;