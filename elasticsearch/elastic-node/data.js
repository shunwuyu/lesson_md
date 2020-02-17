const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
  hosts: ['http://localhost:9200']
});
client.ping({
  requestTimeout: 30000,
}, function(error) {
  if (error) {
    console.error('Elasticsearch cluster is down!');
  } else {
    console.log('Everything is ok');
  }
})

// client.indices.create({
//   index: 'scotch.io-tutorial'
// }, function(error, response, status) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("created a new index", response)
//   }
// });

client.index({
  index: 'scotch.io-tutorial',
  id: '1',
  type: 'cities_list',
  body: {
      "Key1": "Content for key one",
      "Key2": "Content for key two",
      "key3": "Content for key three",
  }
}, function(err, resp, status) {
  console.log(resp);
});