/*
 * @Author: maggot-code
 * @Date: 2021-04-22 09:40:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-26 17:19:11
 * @Description: file content
 */
import type { App } from 'vue'

export type SFCWithInstall<T> = T & { install(app: App): void; }