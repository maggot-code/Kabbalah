/*
 * @Author: maggot-code
 * @Date: 2021-04-22 09:36:51
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-26 17:24:50
 * @Description: file content
 */
// import 'normalize.css';
import { addClass } from './utils/dom';
import type { App } from 'vue';

import KMask from './mask';
import KPopup from './popup';

import { Pop } from './directive';

const components = [KMask, KPopup];
const directives = [Pop];

const install = (app: App): void => {
    components.forEach(component => {
        const { name } = component;
        app.component(name, component);
    });

    directives.forEach(directive => {
        const { name } = directive;
        app.directive(name, directive);
    });
}

addClass(document.body, 'k-body');

export {
    install,
    KMask,
    KPopup,

    Pop,
}

export default {
    install
}