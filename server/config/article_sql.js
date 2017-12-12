var articleSql = {
	// 添加文章
	insert: 'INSERT INTO article (title, content) values(?, ?)',
	// 遍历文章
	queryAll: 'SELECT * FROM article'
}
module.exports = articleSql;