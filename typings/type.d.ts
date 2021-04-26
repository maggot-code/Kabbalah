/*
 * @Author: maggot-code
 * @Date: 2021-04-26 10:41:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-26 10:48:03
 * @Description: file content
 */
declare namespace KType {
    interface fn {
        (...args: any[]): any
    }
    interface AnyObject {
        [key: string]: any
    }
}