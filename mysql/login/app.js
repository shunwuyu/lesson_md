const fs = require('fs');
const express = require('express');
const app = express();
const { query } = require('./query-db');

app.get('/', function(req, res) {
    let file = fs.readFileSync('./index.html');
    let _data = file.toString();

    res.setHeader('Content-type','text/html;charset=UTF-8')
    res.send(_data);
})

app.post('/login', function(req, res) {
    let reqData = "";
    res.setHeader('Content-type','text/json;charset=UTF-8')
    req.on('data', function(data){
        reqData += data
    });

    req.on('end', async function(){
        let dataOb = JSON.parse(reqData);
        let word = "select * from userlist where username='";
        word += dataOb.username + "'";
        word += " and password='";
        word += dataOb.password + "'";

        let result = await query(word);
    
        if(result && result.length > 0) {
            // 如果要在express里面使用session需安装express-session
            res.setHeader('Set-Cookie', 'username='+result[0].username)
            res.send(JSON.stringify({
                success: true,
                message: '登录成功！'
            }))
        }else{
            res.send(JSON.stringify({
                success: false,
                message: '登录失败！'
            }))
        }
        
    })
})

app.get('/welcome', function(req, res) {
    res.send('Login success!')
})

app.listen(7777);