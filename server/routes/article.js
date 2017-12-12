var express = require('express');
var router = express.Router();
var ArticleController = require('../controllers/ArticleController')
/* GET users listing. */

router.get('/query', ArticleController.query)

router.post('/add', ArticleController.add)

module.exports = router
