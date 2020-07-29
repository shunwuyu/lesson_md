const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    index: 'text'
  }
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post