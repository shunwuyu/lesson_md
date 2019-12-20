module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize;
  // console.log(app.model, '----------------')
  const Post = app.model.define('posts', {
    id: {
      type: INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
    title: {type: STRING(255)},// 用户id
    body: {type: STRING},// 关注者id
    created_at: {type: DATE, defaultValue: NOW},// 创建时间
    updated_at: {type: DATE, defaultValue: NOW}
  }, {
    freezeTableName: true 
  })

  return Post;
}

