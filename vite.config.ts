/*
 * @Author: maggot-code
 * @Date: 2021-06-08 14:57:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-06-09 09:58:24
 * @Description: file content
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import { resolve } from 'path';

const pathResolve = (pathStr: string): string => resolve(__dirname, pathStr);

const pluginsMuster = [
    vue(),
    styleImport({
        libs: [{
            libraryName: 'element-plus',
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: (name) => {
                name = name.slice(3)
                return `element-plus/packages/theme-chalk/src/${name}.scss`;
            },
            resolveComponent: (name) => {
                return `element-plus/lib/${name}`;
            },
        }]
    })
]

const folderAlias = [
    {
        find: '@',
        replacement: pathResolve('src')
    },
    {
        find: '@plugins',
        replacement: pathResolve('src/plugins')
    },
    {
        find: '@assets',
        replacement: pathResolve('src/assets')
    },
    {
        find: '@components',
        replacement: pathResolve('src/components')
    },
]

const serverProxy = {
    '^/api/v1/.*': {
        target: "http://127.0.0.1:9000",
        changeOrigin: true,
        ws: false,
        secure: false,
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
    cors: true,
    hmr: {
        overlay: true,
    },
}

const buildOptions = {
    target: "modules",
    outDir: "dist",
    assetsDir: "assets",
    assetsInlineLimit: 2048,
    cssCodeSplit: false,
    sourcemap: true,
    minify: true,
    brotliSize: true,
    chunkSizeWarningLimit: 500,
    watch: {},
    terserOptions: {
        compress: {
            drop_console: true,
            drop_debugger: true,
        },
    },
    rollupOptions: {
        output: {
            manualChunks: {},
        },
    },
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: pluginsMuster,
    cacheDir: 'node_modules/.vite',
    resolve: {
        extensions: ['.api.ts', '.conf.ts', '.ts', '.js'],
        alias: folderAlias
    },
    logLevel: "info",
    clearScreen: false,
    server: serverOptions,
    build: buildOptions,
    // 强制预先构建插件包
    optimizeDeps: {
        include: [],
    },
});
