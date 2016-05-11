var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './app/app.jsx',
    output: {
        path: path.join(__dirname, '../'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: /app/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    cacheDirectory: true
                }
            }, {
                test: /\.html$/,
                loader: 'html'
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.(png|jpg)$/,
                // loader: 'url'
                loader: 'file?name=img/[name].[ext]'
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.scss$/,
                loader: 'style!css!autoprefixer!sass'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.scss', '.html'],
        root: [
            path.join(__dirname, 'app'),
            path.join(__dirname, 'node_modules')
        ],
        moduleDirectories: [
            'node_modules'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'myApp',
            template: './app/index.html',
            inject: true,
            hash: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
