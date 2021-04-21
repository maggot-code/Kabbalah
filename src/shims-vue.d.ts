/*
 * @Author: maggot-code
 * @Date: 2021-04-21 15:04:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-21 18:10:27
 * @Description: file content
 */
/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}