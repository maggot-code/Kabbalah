/*
 * @Author: maggot-code
 * @Date: 2021-06-08 14:57:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-06-09 10:04:21
 * @Description: file content
 */
import { createApp } from 'vue'
import App from '@/App.vue'

import { default as ElementInstall } from '@plugins/element';

const app = createApp(App);

ElementInstall(app);

app.mount('#app')
