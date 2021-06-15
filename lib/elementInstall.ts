/*
 * @Author: maggot-code
 * @Date: 2021-06-09 13:21:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-06-09 13:57:05
 * @Description: file content
 */
import type { App } from 'vue';

import 'element-plus/packages/theme-chalk/src/base.scss';

import {
    ElButton,
    ElButtonGroup,
} from 'element-plus';

const ElementInstall = (components: any, instructions: any) => (app: App) => {
    components.forEach((component: any) => app.component(component.name, component));

    instructions.forEach((instruction: any) => app.use(instruction));
}

export default ElementInstall([
    ElButton,
    ElButtonGroup,
], []);