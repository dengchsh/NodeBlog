var ArticleModel = require('../models/ArticleModel')

var ArticleController = {
	query: function(rep, res){
		ArticleModel.fetch(function(err, articles) {
			if (err) {
				es.json({status: 200, message: "获取文章列表失败"})
			}
			res.json({status: 200, message: "获取文章列表成功", articles})
		})
	},
	add: function(rep, res) {
		var sam = new ArticleModel({
    title: "sam976",
    content: 'test'
	  });
	  sam.save(function(err, article) {
	  	if (err) {
	  		res.json({status: 200, message: "添加文章失败"})
	  	}
	  	res.json({status: 200, message: "添加文章成功", article})
	  });
	}
}

module.exports = ArticleController