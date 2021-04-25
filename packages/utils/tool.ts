/*
 * @Author: maggot-code
 * @Date: 2021-04-25 22:03:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-25 22:03:31
 * @Description: file content
 */
// 裁剪字符串
const trim = function (s: string): string {
    return (s || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

export {
    trim
}

export default {}