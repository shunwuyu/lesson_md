const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;
// Schema 接收一个 JavaScript 对象来描述我们需要的数据结构和对应的数据类型，除了我们熟知的像 String、Number 等数据类型外，ObjectId 是一个特殊的数据类型，我们用它来定义我们的单个 MongoDB 文档的主键，用于标志存储数据的唯一性。

// ref 属性，这是 MongoDB 为我们提供的类似关系数据库的外键功能，允许我们创建一对多的数据文档，

const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  manufacturer: { type: ObjectId, ref: 'Manufacturer' }
});

const manufacturerSchema = Schema({
  id: ObjectId,
  name: String,
});
// model 来创建对于的数据模型，然后导出我们创建好的数据模型。 
// model 就是经典的 MVC 设计模式中的 Model
const Product = model('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);

module.exports = { Product, Manufacturer };