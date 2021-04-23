/*
 * @Author: maggot-code
 * @Date: 2021-04-22 09:42:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-23 13:50:13
 * @Description: file content
 */
import { App } from 'vue';
import type { SFCWithInstall } from '../utils/types';
import KCount from './domain/index.vue';

KCount.install = (app: App): void => {
    const { name } = KCount;
    app.component(name, KCount)
}

const _KCount: SFCWithInstall<typeof KCount> = KCount;

export default _KCount;