/*
 * @Author: maggot-code
 * @Date: 2021-04-21 10:06:31
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-21 11:10:42
 * @Description: file content
 */
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProd ? 'production' : 'development',
    devtool: !isProd && 'eval-cheap-module-source-map',
    entry: './lib/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        // filename: 'kabbalah.package.js',
        filename: isProd ? '[name].[hash].js' : '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
        alias: {},
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    devServer: {
        stats: 'minimal',
        publicPath: '/',
        port: 8848,
        hot: true,
        inline: true,
        overlay: true,
        compress: true,
        contentBase: path.join(__dirname, "dist"),
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
};