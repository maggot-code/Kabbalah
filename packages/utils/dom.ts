/*
 * @Author: maggot-code
 * @Date: 2021-04-25 13:21:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-25 22:31:57
 * @Description: file content
 */
import { trim } from './tool';

// 绑定元素事件
const on: KDom.KEventener = function (element, event, handler, useCapture = false) {
    element.addEventListener(event, handler, useCapture);
}

// 解除元素事件
const off: KDom.KEventener = function (element, event, handler, useCapture = false) {
    element.removeEventListener(event, handler, useCapture);
}

// 是否存在 class name
const hasClass: KDom.KClassName = function (el, cls): boolean {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('class name not contains space.');

    const classList = el.classList;
    const containsCls = classList.contains(cls);
    const firstCls = ` ${el.className} `.indexOf(` ${cls} `) > -1;

    return classList ? containsCls : firstCls;
}

// 添加 class name
const addClass: KDom.KClassName = function (el, cls): void {
    if (!el) return
    let curClass = el.className;
    const classes = (cls || '').split(' ');

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i]
        if (!clsName) continue

        if (el.classList) {
            el.classList.add(clsName)
        } else if (!hasClass(el, clsName)) {
            curClass += ` ${clsName}`
        }
    }

    if (!el.classList) {
        el.className = curClass
    }
}

// 移除 class name
const removeClass: KDom.KClassName = function (el, cls): void {
    if (!el || !cls) return
    const classes = cls.split(' ');
    let curClass = ` ${el.className} `;

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i]
        if (!clsName) continue

        if (el.classList) {
            el.classList.remove(clsName)
        } else if (hasClass(el, clsName)) {
            curClass = curClass.replace(` ${clsName} `, ' ')
        }
    }

    if (!el.classList) {
        el.className = trim(curClass)
    }
}

export {
    on,
    off,
    hasClass,
    addClass,
    removeClass
}

export default {}