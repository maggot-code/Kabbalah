/*
 * @Author: maggot-code
 * @Date: 2021-04-25 15:22:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-26 13:15:40
 * @Description: file content
 */
declare namespace KDom {
    type el = HTMLElement
    type element = HTMLElement | Document | Window
    type handler = EventListenerOrEventListenerObject
    interface eventener {
        (element: element, event: string, handler: handler, useCapture?: boolean): void
    }
    interface className {
        (el: el, cls: string): boolean | void
    }
    interface style {
        (el: el, styleName: string): string | void
    }
    interface offsetDistance {
        (el: el, boxEl: el): number
    }
}
