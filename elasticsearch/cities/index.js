const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  hosts: [ 'http://localhost:9200']
});

const express = require( 'express' );
// 实例化一个表达式的实例并将其保存在一个名为app的常量中
const app     = express();
// 引入body-parser库。将用于解析主体请求
const bodyParser = require('body-parser')
//require the path library
const path    = require( 'path' );

client.ping({
  requestTimeout: 30000,
}, function(error) {
// 此时，eastic搜索已关闭，请检查您的Elasticsearch服务
  if (error) {
      console.error('elasticsearch cluster is down!');
  } else {
      console.log('Everything is ok');
  }
});


app.use(bodyParser.json())
// 设置应用程序侦听的端口
app.set( 'port', process.env.PORT || 3001 );
// 设置路径来提供静态文件
app.use( express.static( path.join( __dirname, 'public' )));
// 启用CORS 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// 定义了基本路线并返回一个名为tempate.html的HTML文件
app.get('/', function(req, res){
  res.sendFile('template.html', {
     root: path.join( __dirname, 'views' )
   });
})

app.get('/search', function (req, res){
  let body = {
    size: 200,
    from: 0, 
    _source: [
      "user", "message"
    ],
    query: { //老
      bool: {
          must: {
              multi_match: {    
                  query: req.query['q'],
                  fields: ["user", "message"]
              }
          }
      }
    }
    // query: {
    //   match: {
        
    //       // user: req.query['q'],
    //       // messge: req.query['q']
    //       // 老刘
    //     // "user": {    
    //     //   "query": req.query['q'],
    //     //   "operator": "AND"
    //     // }
    //   }
    // }
  }
  console.log(body);

  client.search({index:'twitter',  body:body, type:'users_list'})
  .then(results => {
    console.log(results);
    res.send(results.hits.hits);
  })
  .catch(err=>{
    console.log(err)
    res.send([]);
  });

})

app .listen( app.get( 'port' ), function(){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
} );