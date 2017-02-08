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
        loaders: [{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    loader: "css-loader?minimize!postcss-loader!sass-loader",
                    fallbackloader: "style-loader"
                })
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: "file-loader"
            },
            {
                test: /\.html$/,
                loader: "html-loader?minimize"
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                loader: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader'
                    }
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