/*
 * @Author: maggot-code
 * @Date: 2021-04-25 22:03:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-26 13:31:30
 * @Description: file content
 */
import { camelize } from '@vue/shared'
import isServer from './isServer';

const trim = function (s: string): string {
    return (s || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

function isIE(): boolean {
    return !isServer && navigator.userAgent.toLowerCase().indexOf('trident') > -1;
}

function isEdge(): boolean {
    return !isServer && navigator.userAgent.toLowerCase().indexOf('edge') > -1;
}

function isFirefox(): boolean {
    return !isServer && !isServer && !!window.navigator.userAgent.match(/firefox/i);
}

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}

export {
    camelize,
    trim,
    isIE,
    isEdge,
    isFirefox,
    getRandomInt
}

export default {}