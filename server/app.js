var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var Mongoose = require('mongoose')
// var debug = require('debug')("mydebug:work")

var index = require('./routes/index')
// 引入用户路由
var user = require('./routes/user')
// 引入文章路由
var article = require('./routes/article')

var app = express()

// 不加这个会有一个warning，看着别扭，找到一个解决办法，之后会研究一下这里
Mongoose.Promise = global.Promise

// useMongoClient这个选项也是防止一个连接数据库的warning出现（Mongoose的open函数不被推荐使用警告）
Mongoose.connect('mongodb://localhost:27017/blog', {
	useMongoClient: true
})
// view engine setup，使用jade模板引擎，当然我这个项目没有用到
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
// 使用用户路由
app.use('/api/user', user)
// 使用文章路由
app.use('/api/article', article)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

// 导出app模块，供bin下的www调用，其实www才是入口文件
module.exports = app
