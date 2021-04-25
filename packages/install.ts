/*
 * @Author: maggot-code
 * @Date: 2021-04-22 09:36:51
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-25 11:15:04
 * @Description: file content
 */
// import 'normalize.css';
import type { App } from 'vue';
import KPopup from './popup';

const components = [KPopup]

const install = (app: App): void => {
    components.forEach(component => {
        const { name } = component;
        app.component(name, component);
    });
}

export {
    install,
    KPopup,
}

export default {
    install
}