/*
 * @Author: maggot-code
 * @Date: 2021-04-22 09:40:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-22 09:41:00
 * @Description: file content
 */
import type { App } from 'vue'

export type AnyFunction<T> = (...args: any[]) => T

export type SFCWithInstall<T> = T & { install(app: App): void; }