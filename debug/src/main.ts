/*
 * @Author: maggot-code
 * @Date: 2021-04-25 09:47:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-26 14:16:14
 * @Description: file content
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Kabbalah from '../../packages/install';
import '../../packages/theme/index.scss'

createApp(App).use(Kabbalah).mount('#app')
