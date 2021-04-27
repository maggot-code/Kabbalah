/*
 * @Author: maggot-code
 * @Date: 2021-04-25 22:03:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-27 11:00:41
 * @Description: file content
 */
import { camelize } from '@vue/shared'
import isServer from './isServer';

const trim = (s: string) => (s || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')

const isArray = Array.isArray;

const isString = (val: any): boolean => typeof val === 'string'

const isObject = (obj: any): boolean => obj !== null && typeof obj === 'object'

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
    isArray,
    isString,
    isObject,
    isIE,
    isEdge,
    isFirefox,
    getRandomInt
}

export default {}