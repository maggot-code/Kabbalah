/*
 * @Author: maggot-code
 * @Date: 2021-06-09 11:03:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-06-09 13:02:22
 * @Description: file content
 */
import type { App } from 'vue';

export type AnyFunction<T> = (...args: any[]) => T

// export type SFCWithInstall<T> = T & { name: string, install(app: App): void }
export type SFCWithInstall<T> = T