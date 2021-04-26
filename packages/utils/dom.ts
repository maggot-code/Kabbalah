/*
 * @Author: maggot-code
 * @Date: 2021-04-25 13:21:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-26 13:21:37
 * @Description: file content
 */
import { isObject } from 'lodash';
import isServer from './isServer';
import { camelize, trim } from './tool';

function eachClasses(classes: string[], callback: KType.fn): void {
    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i]
        if (!clsName) continue

        callback(clsName)
    }
}

function getOffsetTop(el: KDom.el): number {
    let offset = 0
    let parent = el

    while (parent) {
        offset += parent.offsetTop
        parent = parent.offsetParent as KDom.el
    }

    return offset
}

const stop = (e: Event) => e.stopPropagation()

const on: KDom.eventener = function (element, event, handler, useCapture = false) {
    element.addEventListener(event, handler, useCapture);
}

const off: KDom.eventener = function (element, event, handler, useCapture = false) {
    element.removeEventListener(event, handler, useCapture);
}

const hasClass: KDom.className = function (el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('class name not contains space.');

    const classList = el.classList;
    const containsCls = classList.contains(cls);
    const firstCls = ` ${el.className} `.indexOf(` ${cls} `) > -1;

    return classList ? containsCls : firstCls;
}

const addClass: KDom.className = function (el, cls) {
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

const removeClass: KDom.className = function (el, cls) {
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

const getStyle: KDom.style = function (el, styleName) {
    if (isServer) return ""

    styleName = camelize(styleName)
    if (styleName === 'float') {
        styleName = 'cssFloat'
    }

    try {
        const style = el.style[styleName]
        if (style) return style
        if (!document) return "";

        const computed = document.defaultView?.getComputedStyle(el, "")

        return computed ? computed[styleName] : ''
    } catch (e) {
        console.log(e);
        return el.style[styleName]
    }
}

const setStyle = function (el: KDom.el, styleName: string, value?: string) {
    if (isObject(styleName)) {
        Object.keys(styleName).forEach(prop => {
            setStyle(el, prop, styleName[prop])
        });
    } else {
        styleName = camelize(styleName)
        el.style[styleName] = value
    }
}

const removeStyle: KDom.style = function (el, style) {
    if (isObject(style)) {
        Object.keys(style).forEach(prop => {
            setStyle(el, prop, '')
        });
    } else {
        setStyle(el, style, '')
    }
}

const getOffsetTopDistance: KDom.offsetDistance = function (el, boxEl) {
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