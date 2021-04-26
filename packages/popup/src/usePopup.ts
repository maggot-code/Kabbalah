/*
 * @Author: maggot-code
 * @Date: 2021-04-26 14:59:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-26 17:28:09
 * @Description: file content
 */
import { computed, ref, watch, nextTick, onMounted } from 'vue';
import isServer from '../../utils/isServer';

import type { Ref } from 'vue';
import type { SetupContext } from '@vue/runtime-core';

export const CLOSE_EVENT = 'close';
export const OPEN_EVENT = 'open';
export const CLOSED_EVENT = 'closed';
export const OPENED_EVENT = 'opened';

export default function (props: any, ctx: SetupContext, targetRef: Ref<HTMLElement | null>): object {
    const isShow = ref(false);
    return {}
}