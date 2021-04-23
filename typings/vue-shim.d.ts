/*
 * @Author: maggot-code
 * @Date: 2021-04-22 16:22:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-22 16:22:43
 * @Description: file content
 */
declare module '*.vue' {
    import { App, defineComponent } from 'vue'
    const component: ReturnType<typeof defineComponent> & {
        install(app: App): void
    }
    export default component
}