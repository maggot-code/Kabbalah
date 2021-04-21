/*
 * @Author: maggot-code
 * @Date: 2021-04-21 13:30:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-21 13:33:05
 * @Description: file content
 */
const resolves = dir => require('path').join(__dirname, dir);

module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false,
    css: {
        // 查看CSS属于哪个css文件
        sourceMap: process.env.NODE_ENV === 'development',
        extract: process.env.NODE_ENV === 'production'
    },
    chainWebpack: config => {
        config.resolve.alias.set('@', resolves('src'));
        config.resolve.alias.set('@img', resolves('src/assets/images'));
        // 移除prefetch插件，避免加载多余的资源
        config.plugins.delete('prefetch');
        // 移除 preload 插件，避免加载多余的资源
        config.plugins.delete('preload');
    },
    configureWebpack: config => {
        // 调试JS
        if (process.env.NODE_ENV === 'development') {
            config.devtool = 'source-map';
        }
        config.mode = process.env.NODE_ENV;
    }
}