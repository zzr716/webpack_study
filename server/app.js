var express = require('express')
var path = require('path')
var app = express()
var indexRouter = require('./routers/index')
var userRouter = require('./routers/users')

// 数据
// body-parser处理表单数据的插件，解析表单
var bodyParser = require('body-parser')
// 启用body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var session = require('express-session')
var cookieParser = require('cookie-parser')
// 在所有路由之前
app.use(cookieParser())
app.use(session({
        secret: 'demo_test',
        name: 'mydemo',
        // 30分钟
        maxAge: 30*60*1000,
        resave: false,
        saveUninitialized: true
}))

app.set('views', path.join(__dirname, 'views'))
// 设置要用的模板引擎 
app.set('view engine', 'ejs')
// 应用级别的路由设置
// request请求 response返回对象
// next对象，可以将中间件向下传递，将当前中间件结束传给下一个执行
//  error 对象 处理错误
// 中间件middleware处理函数
// express 是基于中间件的web server，串联方式来提供服务

// 如果这样太复杂 indexRouter\userRouter 用模块
// app.get('/', function (req, res) {
//     // 向浏览器发送信息 还能中止中间件传递
//     res.send('hello, express')
// })
// // '/api'应用级别路由
// app.get('/api', function (req, res) {
//     // 向浏览器发送信息 还能中止中间件传递
//     res.json(
//         {
//             username: '徐超'
//         })
// })

// 要在路由请求之前
app.all('*', function (req, res, next) {
    // Access-Control-Allow-Origin允许跨域访问
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with, X_Requested_With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('X-Powered-By', '3.2.1');
    res.header('Content-Type', 'application/json; charset=utf-8');

    if (req.method === 'OPTIONS') {
        res.end('options ok');
    } else {
        next();
    }
});


// 启动一个中间件
app.use('/', indexRouter)
app.use('/api', userRouter)
// app.listen(3000)
module.exports = app