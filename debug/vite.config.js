/*
 * @Author: maggot-code
 * @Date: 2021-04-25 10:57:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-25 11:08:19
 * @Description: file content
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://cn.vitejs.dev/config/#conditional-config
export default defineConfig({
    base: "./",
    plugins: [vue()],
    server: {
        port: 8848,
        strictPort: true,
        // proxy: {
        //     '/api': {
        //         target: "http://127.0.0.1:8080",
        //         changeOrigin: true,
        //         rewrite: path => path.replace(/^\/api/, '')
        //     }
        // }
    }
})