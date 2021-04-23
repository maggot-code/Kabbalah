/*
 * @Author: maggot-code
 * @Date: 2021-04-22 09:36:51
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-23 15:31:01
 * @Description: file content
 */
// import 'normalize.css';
import type { App } from 'vue';

import KCount from './k-count';

const components = [
    KCount
]

const install = (app: App): void => {
    components.forEach(component => {
        const { name } = component;
        app.component(name, component);
    });
}

export {
    KCount,
    install
}

export default {
    install
}