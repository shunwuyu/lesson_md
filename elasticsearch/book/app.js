const express = require('express');
const elasticsearch = require('elasticsearch');
const fs = require('fs')
const esClient = new elasticsearch.Client({
  host: '127.0.0.1:9200',
  log: 'error'
});
const bulkIndex = function bulkIndex(index, type, data) {
  let bulkBody = [];

  data.forEach(item => {
    bulkBody.push({
      index: {
        _index: index,
        _type: type,
        _id: item.id
      }
    })
    bulkBody.push(item);
  })
  esClient.bulk({body: bulkBody})
  .then(response => {
    let errorCount = 0;
    response.items.forEach(item => {
      if (item.index && item.index.error) {
        console.log(++errorCount, item.index.error);
      }
    })
  }).catch(console.error);
}

const test = function test() {
  const books = fs.readFileSync('books.json');
  const book = JSON.parse(books);
  console.log(`${book.length} items parsed from books file`);
  bulkIndex('books', 'book', book);
}
const app = express();
app.get('/', (req, res)=> {
    // test();
    var responseText = 'Hello world!';
    res.send(responseText);
})
app.listen(3000, ()=> {
    console.log('服务已启动 - 3000');
})
