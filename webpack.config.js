var path = require('path')
var webpack = require('webpack')

// webpack 配置文件
// webpack 打包css js template器---将一切前端任务打包
//     插件化 启动服务器

module.exports = {
    entry: './src/main.js', // 单点入口
    output: {
        // 出口
        path: path.resolve(__dirname, './dist'),  // 最后生成的文件，目标目录
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                // $正则结束标识符 \用来转义 //正则格式
                test: /\.js$/,
                // 匹配的文件加loader
                loader: 'babel-loader',
                // 排除node_modules
                exclude: /node_modules/
            },
            {
                // 在vue里面一个组件一个文件
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    // logo.png?v1/v2.. 版本号
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // 规范loader
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
}