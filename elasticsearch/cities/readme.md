[source](https://www.zcfy.cc/article/build-a-real-time-search-engine-with-node-vue-and-elasticsearch)

1. 拉取数据

2. GET _cat/indices

3. 全文检索
  覆盖所有字段
4. 删除索引
  DELETE  /scotch.io-tutorial
  数据
  http://ip:9200/index/type/_delete_by_query?pretty={
    "query": {
        "match_all": {
        }
    }
  }

GET scotch.io-tutorial/_search?q=Sant Julià de Lòria
GET scotch.io-tutorial/_search?q=Sant

https://www.cnblogs.com/sanduzxcvbnm/p/12091511.html


GET twitter/_search?q=user:张三
GET twitter/_search?q=city:"北京"&sort=DOB:desc
GET twitter/_search?q=city:"北京"&sort=DOB:desc&_source=city,age,DOB
GET twitter/_search?q=city:"北京"&sort=DOB:desc&_source=city,age,DOB&size=2
GET twitter/_search?q=city:("北京" or "上海") &sort=DOB:desc&_source=city,age,DOB&size=2
GET twitter/_search?q=city:"北京" OR user:"张三"
GET twitter/_search?q=NOT city:"上海"
GET twitter/_search?q=(age:20^5 OR city:"上海")
GET twitter/_search?q=张三

GET twitter/_search?q=age:[20 TO 30]

GET twitter/_search
{
    "query": {
        "match": {
            "user": {    
                "query": "张三",
                "operator": "AND"
            }
        }
    }
}