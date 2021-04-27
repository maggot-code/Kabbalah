/*
 * @Author: maggot-code
 * @Date: 2021-04-22 09:40:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-27 10:00:02
 * @Description: file content
 */
import type { App } from 'vue'

export type SFCWithInstall<T> = T & { install(app: App): void; }