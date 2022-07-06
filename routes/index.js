var express = require('express');
var router = express.Router();
var LoginController = require('../controllers/LoginControllers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Livraria Martin' });
});

/* login page */
router.get('/login', LoginController.index)





module.exports = router;
