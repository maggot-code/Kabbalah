/*
 * @Author: maggot-code
 * @Date: 2021-04-25 15:22:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-25 22:31:39
 * @Description: file content
 */
declare namespace KDom {
    type KEl = HTMLElement
    type KElement = HTMLElement | Document | Window
    type KHandler = EventListenerOrEventListenerObject
    interface KEventener {
        (element: KElement, event: string, handler: KHandler, useCapture?: boolean): void
    }
    interface KClassName {
        (el: KEl, cls: string): any
    }
}
