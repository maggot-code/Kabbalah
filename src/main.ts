/*
 * @Author: maggot-code
 * @Date: 2021-06-08 14:57:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-06-08 15:43:35
 * @Description: file content
 */
import { createApp } from 'vue'
import App from './App.vue'

const a = import.meta.env;
console.log(a);

createApp(App).mount('#app')
