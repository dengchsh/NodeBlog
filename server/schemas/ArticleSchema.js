var Mongoose = require('mongoose')
var ArticleSchema = new Mongoose.Schema({
  title: String,
  content: String,
  meta: {
  	createAt: {
  		type: Date,
  		default: Date.now()
  	},
  	updateAt: {
  		type: Date,
  		default: Date.now()
  	}
  }
})


ArticleSchema.pre('save', function(next) {
	if (this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now()
	} else {
		this.mete.updateAt = Date.now()
	}

	next()
})

ArticleSchema.statics = {
	fetch: function(cb) {
		return this.find({}).sort('meta.updateAt').exec(cb)

	},
	findById: function(id, cb) {
		return this.findOne({_id: id}).exec(cb)
	}
}

module.exports = ArticleSchema

