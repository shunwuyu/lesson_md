const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
	user_name: String,
	password: String,
	id: Number,
	create_time: String,
	admin: {type: String, default: '管理员'},
	status: Number,  //1:普通管理、 2:超级管理员
	avatar: {type: String, default: 'default.jpg'},
	city: String, /*管理城市 */
})

adminSchema.index({id: 1}); //升序索引
const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin


