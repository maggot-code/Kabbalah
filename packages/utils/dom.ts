/*
 * @Author: maggot-code
 * @Date: 2021-04-25 13:21:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-26 17:44:07
 * @Description: file content
 */
import isServer from './isServer';
import { camelize, trim, isObject } from './tool';

declare namespace KDom {
    type element = HTMLElement | Document | Window
    type handler = EventListenerOrEventListenerObject
}

function eachClasses(classes: string[], callback: KType.fn): void {
    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i]
        if (!clsName) continue

        callback(clsName)
    }
}

function stop(e: Event): void {
    e.stopPropagation()
}

function on(element: KDom.element, event: string, handler: KDom.handler, useCapture: boolean = false): void {
    element.addEventListener(event, handler, useCapture);
}

function off(element: KDom.element, event: string, handler: KDom.handler, useCapture: boolean = false): void {
    element.removeEventListener(event, handler, useCapture);
}

function hasClass(el: HTMLElement, cls: string): boolean {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('class name not contains space.');

    const classList = el.classList;
    const containsCls = classList.contains(cls);
    const firstCls = ` ${el.className} `.indexOf(` ${cls} `) > -1;

    return classList ? containsCls : firstCls;
}

function addClass(el: HTMLElement, cls: string): void {
    if (!el) return
    const classes = (cls || '').split(' ');
    let curClass = el.className;

    eachClasses(classes, (clsName) => {
        if (el.classList) {
            el.classList.add(clsName)
        } else if (!hasClass(el, clsName)) {
            curClass += ` ${clsName}`
        }
    })

    if (!el.classList) {
        el.className = curClass
    }
}

function removeClass(el: HTMLElement, cls: string): void {
    if (!el || !cls) return
    const classes = cls.split(' ');
    let curClass = ` ${el.className} `;

    eachClasses(classes, (clsName) => {
        if (el.classList) {
            el.classList.remove(clsName)
        } else if (hasClass(el, clsName)) {
            curClass = curClass.replace(` ${clsName} `, ' ')
        }
    })

    if (!el.classList) {
        el.className = trim(curClass)
    }
}

function getStyle(el: HTMLElement, styleName: string): string {
    if (isServer) return ""

    styleName = camelize(styleName)
    if (styleName === 'float') {
        styleName = 'cssFloat'
    }

    try {
        const style = el.style[styleName]
        if (style) return style
        if (!document) return "";

        const computed = document.defaultView!.getComputedStyle(el, "")

        return computed ? computed[styleName] : ''
    } catch (e) {
        console.log(e);
        return el.style[styleName]
    }
}

function setStyle(el: HTMLElement, styleName: string, value?: string) {
    if (isObject(styleName)) {
        Object.keys(styleName).forEach(prop => {
            setStyle(el, prop, styleName[prop])
        });
    } else {
        styleName = camelize(styleName)
        el.style[styleName] = value
    }
}

function removeStyle(el: HTMLElement, style: string): void {
    if (isObject(style)) {
        Object.keys(style).forEach(prop => {
            setStyle(el, prop, '')
        });
    } else {
        setStyle(el, style, '')
    }
}

function getOffsetTop(el: HTMLElement): number {
    let offset = 0
    let parent = el

    while (parent) {
        offset += parent.offsetTop
        parent = parent.offsetParent as HTMLElement
    }

    return offset
}

function getOffsetTopDistance(el: HTMLElement, boxEl: HTMLElement): number {
    return Math.abs(getOffsetTop(el) - getOffsetTop(boxEl))
}

export {
    stop,
    on,
    off,
    hasClass,
    addClass,
    removeClass,
    getStyle,
    setStyle,
    removeStyle,
    getOffsetTop,
    getOffsetTopDistance
}

export default {}