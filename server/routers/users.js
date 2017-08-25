var express = require('express')
var router = express.Router()

// 路径都是基于这个模块
router.get('/', function (req, res) {
    // res.json(
    //     {
    //         name: '鲤鱼王'
    //     }
    // )
    if (req.session.views) {
        req.session.views++
        res.json({
            msg: '第' + req.session.views + '次访问'
        })
    } else {
        req.session.views = 1
        res.json({
            msg: '欢迎您的到来'
        })
    }
})
router.get('/home', (req, res) => {
    console.log(req)
    console.log(req.session.id)
    if (req.session.token) {
        res.json({
            token: req.session.token
        })
    } else {
        res.json({
            msg: '授权过期，重新登录'
        })
        // res.send('授权过期，重新登录')
    }
})
// 后端接到前端的请求进行响应
router.post('/login', function (req, res) {
    // 账号密码验证？ 数据库检查
    // router -> req -> controller -> model[取数据] ->json|html ->res -> 200
    console.log(req.body)
    let data = req.body,
        pwd = data.pwd?data.pwd.toString():'', //有可能未输入
        phone = data.telphone?data.telphone.toString():''
    if (phone === '') {
        res.json({
            code: 3003,
            errmsg: '手机号为空'
        })
    }
    if (pwd === '') {
        res.json({
            code: 3004,
            errmsg: '密码为空'
        })
    }
    let tphone = '10086',
        tpwd = '10086'
    if (phone != tphone) {
        res.json(
            {
                code: -1,
                errmsg: '账号不存在'
            }
        )
    }
    if (pwd != tpwd) {
        res.json(
            {
                code: -2,
                errmsg: '密码错误'
            }
        )
    }
    // if (phone == tphone && pwd == tpwd) {
    //     res.json(
    //         {
    //             code: 200,
    //             msg: '登录成功'
    //         }
    //     )
    // }
    req.session.token = tphone + '_' + randomToken()
    res.json(
        {
            code: 200,
            token: req.session.token,
            msg: '登录成功'
        }
    )
    function randomToken () {
        var len = len || 32
        var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
        var maxpos = chars.length
        var str = ''
        for (var i = 0; i < len ; i++) {
            str += chars.charAt(Math.floor(Math.random()*maxpos))
        }
        return str
    }
})

router.post('/signout', (req, res) => {
    req.session.token = null
    res.json({
        code: 200,
        msg: '感谢使用!'
    })
})
module.exports = router
// 模块路由
// /users /index /books /movies