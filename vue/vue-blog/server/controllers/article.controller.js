const mongoose = require('mongoose')
const Article = mongoose.model('Article')
console.log(Article);
exports.getArticles = async (req, res, next) => {
  const total = (await Article.find({
    isPublish: true,
  }).exec()).length

  const data = await Article.find({
    isPublish: true,
  })
  let arts = JSON.parse(JSON.stringify(data))
  res.json({
    success: true,
    data: arts,
    total,
  })
};