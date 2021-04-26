/*
 * @Author: maggot-code
 * @Date: 2021-04-26 15:21:07
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-26 15:21:44
 * @Description: file content
 */
import { App } from 'vue';
import type { SFCWithInstall } from '../utils/types';
import KMask from './src/mask.vue';

KMask.install = (app: App): void => {
    const { name } = KMask;
    app.component(name, KMask)
}

const _KMask: SFCWithInstall<typeof KMask> = KMask;

export default _KMask;