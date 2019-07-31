const router = require('express').Router()
const article = require('../controllers/article.controller')
// console.log(article);
router
    .get('/articles',
        article.getArticles)

module.exports = router