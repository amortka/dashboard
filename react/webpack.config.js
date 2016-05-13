var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.target;
console.log('Target event is:' + TARGET);

var common = {
    cache: true,
    debug: true,
    entry: './app/app.jsx',
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
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.js',
        sourceMapFilename: '[file].map'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.css$/,
            loaders: ['style', 'css']
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'autoprefixer', 'sass']
        }, {
            test: /\.less$/,
            loaders: ['style', 'css', 'less']
        }, {
            test: /\.woff$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
        }, {
            test: /\.woff2$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
        }, {
            test: /\.(eot|ttf|svg|gif|png)$/,
            loader: "file-loader"
        }]
    }
};

if (TARGET === 'dev' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval-source-map',
        devServer: {
            historyApiFallback: true
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                "window.jQuery": 'jquery'
            }),
            new NpmInstallPlugin({
                save: true // --save
            }),
            new HtmlWebpackPlugin({
                title: 'myApp',
                template: './app/index.html',
                inject: true,
                hash: true
            })
        ]
    });
}

if (TARGET === 'build') {
    module.exports = merge(common, {
        devtool: 'source-map',
        output: {
            path: './dist'
        }
    });
}