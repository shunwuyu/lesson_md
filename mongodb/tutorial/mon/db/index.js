const mongoose = require('./db')

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String
});


const MyModel = mongoose.model('user', userSchema);

class Mongodb {
  constructor () {
 
  }
// 查询
  query () {
     return new Promise((resolve, reject) => {
       console.log('-----------');
       MyModel.find({}, (err, res) => {
         console.log(err, res);
         if(err) {
           reject(err)
         }
         resolve(res)
       })
     })
  }
// 保存
  save (obj) {
     const m = new MyModel(obj)
     return new Promise((resolve, reject)=> {
       m.save((err, res) => {
         if (err) {
           reject(err)
         }
         resolve(res)
         console.log(res)
       })
     })
     
  }
}
module.exports = new Mongodb()
