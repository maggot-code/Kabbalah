/*
 * @Author: maggot-code
 * @Date: 2021-04-26 14:00:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-27 09:31:42
 * @Description: file content
 */
import type { ObjectDirective } from 'vue';

interface KDirective extends ObjectDirective {
    name: string
}

function beforeMount(el: HTMLElement, binding: any) {
    const { value } = binding;
    console.log(el, value);
}

const Pop: KDirective = {
    name: "pop",
    beforeMount,
}

export default Pop