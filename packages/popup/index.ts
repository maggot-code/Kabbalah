/*
 * @Author: maggot-code
 * @Date: 2021-04-23 16:50:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-23 16:51:35
 * @Description: kabbalah popup
 */
import { App } from 'vue';
import type { SFCWithInstall } from '../utils/types';
import KPopup from './src/popup.vue';

KPopup.install = (app: App): void => {
    const { name } = KPopup;
    app.component(name, KPopup)
}

const _KPopup: SFCWithInstall<typeof KPopup> = KPopup;

export default _KPopup;