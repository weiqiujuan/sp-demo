const express = require('express')
// 初始化一个 express 实例
const app = express();

const log = console.log.bind(console)

// 配置 cors
const cors = require('cors')
app.use(cors())

// server 核心代码
app.get('/api/coisini', function (req, res) {
    log('访问后端 api/coisini')
    res.send('api/coisini 返回字符串')
})


app.get('/api/coisiniTwo', function (req, res) {
    log('访问后端api/coisiniTwo')
    res.send('我觉得该添加一些数据了')
})

const run = (port = 3000, host = '') => {
    const server = app.listen(port, host, () => {
        const address = server.address()
        host = address.address
        port = address.port
        log(`****debug mode\nserver started at http://${host}:${port}`)
    })
}

if (require.main === module) {
    const port = 4000
    // host 参数指定为 '0.0.0.0' 可以让别的机器访问你的代码
    const host = '127.0.0.1'
    run(port, host)
}


//连接MongoDB

/*
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
var url = 'mongodb://localhost:27017';
MongoClient.connect(url, function () {
    assert.equal(null, err);
    console.log('Connection successfully to server');

});*/

var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/admin');
var db=mongoose.connection

db.on('open',function () {
    log('Successfully to connect');
})
db.on('error',function () {
    log('failed to connect');
})

var bodyParser=require('body-parser')
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extend:false}))