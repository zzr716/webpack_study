var express = require('express')
var router = express.Router()

// 路径都是基于这个模块
router.get('/', function (req, res) {
    // res.send('Hello Express')
    // render()渲染模板
    // 数据库查询 promise json
    res.render('index', {
        name: '白熊'
    })
})
module.exports = router
// 模块路由
// /users /index /books /movies