const webpack = require('webpack')
module.exports = {
    // source-map源文件的映射
    devtool: 'source-map',
    entry: {
        filename: './app.js'
    },
    output: {
        filename: '_build/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
                // query: {
                //     // presets: ['es2015-native-modules']
                //     presets: [
                //         // 排除commonJS模块化方式
                //         ["es2015", {"modules": false}]
                //     ]
                // }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        })
    ]
}