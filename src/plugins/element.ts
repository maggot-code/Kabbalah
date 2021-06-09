/*
 * @Author: maggot-code
 * @Date: 2021-06-08 17:57:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-06-08 18:11:45
 * @Description: file content
 */
import 'element-plus/packages/theme-chalk/src/base.scss';

import {
    ElButton,
    ElButtonGroup,
} from 'element-plus';

const ElementInstall = (components: any, instructions: any) => (app: any) => {
    components.forEach((component: any) => app.component(component.name, component));

    instructions.forEach((instruction: any) => app.use(instruction));
}

export default ElementInstall([
    ElButton,
    ElButtonGroup,
], []);