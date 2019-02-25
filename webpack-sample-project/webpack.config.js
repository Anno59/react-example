/**
 * Created by 372025284@qq.com on 2019.02.24.
 */
module.exports = {
    devtool : 'eval-source-map',
    entry:__dirname + '/app/main.js',
    output : {
        path : __dirname + '/public',
        filename : 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:'babel-loader'
                },
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                use:[{
                        loader:'style-loader'
                    },{
                        loader:'css-loader',
                    options:{
                        modules:true,
                        localIdentName:'[name]__[local]--[hash:base64:5]'
                    }
                }]
            }
        ]
    }
};