var Mongoose = require('mongoose')
var ArticleSchema = require('../schemas/ArticleSchema')
var ArticleModel = Mongoose.model('ArticleModel', ArticleSchema)
module.exports = ArticleModel