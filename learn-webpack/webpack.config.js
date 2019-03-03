const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // devtool:'source-map',
    entry: './main.js',
    devServer:{
        contentBase: './',
        historyApiFallback: true,//不跳转
        // inline: true,//实时刷新,
        hot: true
    },
    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:[{
                loader:'style-loader'
                },{
                    loader:'css-loader',
                    options:'minimize'
                }]
                // ExtractTextPlugin.extract({
                //     use:['css-loader']
                // })
        }],
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ]
}