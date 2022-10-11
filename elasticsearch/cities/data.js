const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
  hosts: [ 'http://localhost:9200']
});

const users = require('./users.json');
// console.log(cities);

client.ping({
  requestTimeout: 30000,
}, function(error) {
// 此时，eastic搜索已关闭，请检查您的Elasticsearch服务
  if (error) {
      console.error('Elasticsearch cluster is down!');
  } else {
      console.log('Everything is ok');
  }
});


// client
//   .indices
//   .create({
//     index: 'twitter'
//   }, function(error, response, status) {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log("created a new index", response);
//     }
//   })

// client.index({
//   index: 'scotch.io-tutorial',
//   id: '1',
//   type: 'cities_list',
//   body: {
//     "Key1": "Content for key one",
//     "Key2": "Content for key two",
//     "key3": "Content for key three",
//   }
// }, function(err, resp, status) {
//   console.log(resp);
// })

var bulk = [];
users.forEach(user =>{
  // console.log(city);
  bulk.push({index:{ 
                _index:"twitter", 
                _type:"users_list",
            }          
        })
  bulk.push(user)
})

client.bulk({body:bulk}, function( err, response  ){ 
  if( err ){ 
    console.log("Failed Bulk operation".red, err) 
  } else { 
    console.log(response)
  }
});
