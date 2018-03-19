"use strict";

var rootSourcesPath = './adminApp/sources/';
var distFolder = './adminApp/dist/';

const path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var helpers = require('./helpers');


module.exports = {
    devtool: 'source-map',
    entry: {
        app: rootSourcesPath + 'main.ts',
        libs: rootSourcesPath + 'libs.ts',
        polyfills: rootSourcesPath + 'polyfills.ts'
    },
    output: {
        filename: distFolder + '[name].js'
    },
    resolve: {
        extensions: [
            ".js", ".ts"
        ]
    },
    module: {
        rules: [
     {
         test: /\.ts$/,
         loaders: [
           {
               loader: 'awesome-typescript-loader',
               options: { configFileName: path.join(__dirname, 'tsconfig.json') }
           }, 'angular2-template-loader'
         ]
     },
     {
         test: /\.html$/,
         loader: 'html-loader'
     }/*,
     {
         test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
         loader: 'file-loader?name=assets/[name].[hash].[ext]'
     },*/
     /*{
         test: /\.css$/,
         exclude: './Scripts/src/app',
         loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
     },*/
     /*{
         test: /\.css$/,
         include: helpers.root('./Scripts/src/app'),
         loader: 'raw-loader'
     }*/
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)esm5/,
            helpers.root(rootSourcesPath), // location of your src
            {} // a map of your routes
        ),
        new CommonsChunkPlugin({
            names: ['polyfills', 'libs']
        }),
        new webpack.LoaderOptionsPlugin({
            htmlLoader: {
                minimize: false // workaround for ng2
            }
        })/*,
        new webpack.ProvidePlugin({
            Promise: 'es6-promise-promise'
        })/*
        new webpack.optimize.UglifyJsPlugin({include:'libs.js', minimize:true})*/
    ]
};