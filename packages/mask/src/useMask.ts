/*
 * @Author: maggot-code
 * @Date: 2021-04-26 15:43:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-26 17:20:49
 * @Description: file content
 */
import { computed, ref, watch, nextTick, onMounted } from 'vue';
import isServer from '../../utils/isServer';
import { isString } from 'lodash';

import type { Ref } from 'vue';
import type { SetupContext } from '@vue/runtime-core';

declare namespace KMask {
    interface MaskProps {
        maskClassname: string | string[]
    }
}

const DEF_CLASS = 'k-mask';

export default function (props: KMask.MaskProps, { slots, emit }: SetupContext): object {
    const { maskClassname } = props;

    const maskClass = computed(() => {
        const classname = isString(maskClassname) ? [maskClassname] : maskClassname;

        return [DEF_CLASS, classname];
    })

    return {
        maskClass
    }
}