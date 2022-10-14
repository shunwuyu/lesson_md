const elasticsearch = require('elasticsearch');
const cities = require('./cities.json');
const client = new elasticsearch.Client({
  hosts: [ 'http://localhost:9200']
});

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

client.indices.create({
  index: 'scotch.io-tutorial'
}, function(error, response, status) {
  if (error) {
      console.log(error);
  } else {
      console.log("created a new index", response);
  }
});


var bulk = [];  //索引存储的地方
cities.forEach(city =>{
  bulk.push({
    index:{ 
      _index:"scotch.io-tutorial", 
      _type:"cities_list",
    }          
  })
  bulk.push(city)
})

client.bulk({body:bulk}, function( err, response  ){ 
  if( err ){ 
      console.log("Failed Bulk operation".red, err) 
  } else { 
      console.log("Successfully imported %s".green, cities.length); 
  } 
}); 