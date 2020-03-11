const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  title : { type:String, required : true },
  address : String,
  content : String,
  start: { type: Date, default: Date.now() },
  end: { type: Date, default: Date.now() },
  created_at : { type : Date, default : Date.now },
  update_at : { type : Date, default : Date.now }
})

const Todo = module.exports = mongoose.model('Todo', todoSchema)