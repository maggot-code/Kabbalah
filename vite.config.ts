/*
 * @Author: maggot-code
 * @Date: 2021-06-08 14:57:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-06-08 17:31:15
 * @Description: file content
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

const pluginsMuster = [
    vue()
]

const folderAlias = [
    {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
    },
    {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets')
    },
    {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
    },
]

const serverProxy = {
    '^/api/v1/.*': {
        target: "http://127.0.0.1:9000",
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/fallback/, '')
    }
}

const serverOptions = {
    host: "127.0.0.1",
    port: 8848,
    strictPort: true,
    https: false,
    open: false,
    proxy: serverProxy,
    cors: true
}

const buildOptions = {
    target: "modules",
    outDir: "dist",
    assetsDir: "assets",
    assetsInlineLimit: 2048,
    cssCodeSplit: true,
    sourcemap: true,
    minify: true,
    brotliSize: true,
    chunkSizeWarningLimit: 500,
    watch: {}
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: pluginsMuster,
    cacheDir: 'node_modules/.vite',
    resolve: {
        alias: folderAlias
    },
    logLevel: "info",
    clearScreen: false,
    server: serverOptions,
    build: buildOptions
});
