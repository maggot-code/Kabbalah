/*
 * @Author: maggot-code
 * @Date: 2021-06-09 13:19:31
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-06-15 15:11:50
 * @Description: file content
 */
import type { App } from 'vue';

// import { default as ElementInstall } from './elementInstall';

// import { default as _KaText } from '@pkg/text';

const components: any[] = [];

const KabbalahInstall = (app: App) => {
    components.forEach((component: any) => app.component(component.name, component));
}

export { }

export default {
    // ElementInstall,
    KabbalahInstall,
}