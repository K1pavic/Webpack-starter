var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var webpack = require("webpack");
var path = require("path");

var config = {
    entry: ["./src/index.js"],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: ""
    },
    module: {
        rules: [{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract([ // not working with "use" keyword
                    { loader: "css-loader", options: { minimize: true } },
                    { loader: "postcss-loader" },
                    { loader: "sass-loader" }
                ])
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: "file-loader"
            },
            {
                test: /\.html$/,
                use: [
                    { loader: "html-loader", options: { minimize: true } }
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: [
                    { loader: "file-loader" },
                    { loader: "image-webpack-loader" }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: "bundle.css" }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebpackPlugin({
            title: "test App!!",
            template: "index.html"
        }),
        new UglifyJSPlugin({})
    ]
};

module.exports = config;