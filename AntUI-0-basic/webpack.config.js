//import HtmlWebpackPlugin from 'html-webpack-plugin';
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //devtool: 'cheap-module-eval-source-map',
    entry: {
        index: './assets/index.web.js'
    },
    output: {
        path: './build',
        filename: 'bundle-[name].js'
    },
    module: {
        loaders: [
            {test: /\.js/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.web.html',
            template: './index.web.html'
        })
    ]
};
