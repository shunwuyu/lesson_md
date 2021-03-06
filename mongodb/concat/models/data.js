'use strict';
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

const concatSchema = Schema({
  name: String,
  company: String,
  title: String,
  addresses: [{address: String, category: String}],
  groups: [{type: ObjectId, ref: 'Group' }]
})
const Concat = model('Concat', concatSchema);

const GroupSchema = Schema({
  id: ObjectId,
  name: String,
});
const Group = model('Group', GroupSchema);
module.exports = { Concat, Group };

// 'use strict';
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// // const ObjectId = mongoose.Schema.Types.ObjectId;
// const groupSchema = new Schema({
//   name: String,
// })
// const Group = mongoose.model('group', groupSchema);
// module.exports = Group;