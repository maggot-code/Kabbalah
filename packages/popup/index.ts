/*
 * @Author: maggot-code
 * @Date: 2021-04-21 15:37:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-21 17:42:06
 * @Description: file content
 */
import { App } from 'vue';
import KPopup from './components/index.vue';

KPopup.install = (app: App): void => {
    const { name } = KPopup;
    app.component(name, KPopup);
}

export default KPopup;