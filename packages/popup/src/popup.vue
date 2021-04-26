<!--
 * @Author: maggot-code
 * @Date: 2021-04-23 16:51:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-26 17:28:16
 * @Description: file content
-->
<template>
    <teleport to=".k-body" :disabled="!appendToBody">
        <transition name="dialog-fade">
            <k-mask v-bind="$attrs">
                <div ref="popupRef" class="k-popup">k-popup</div>
            </k-mask>
        </transition>
    </teleport>
</template>

<script lang='ts'>
import KMask from '../../mask'
import { defineComponent, ref } from 'vue'
import type { SetupContext } from '@vue/runtime-core'
import {
    default as usePopup,
    CLOSE_EVENT,
    CLOSED_EVENT,
    OPEN_EVENT,
    OPENED_EVENT,
} from './usePopup'

export default defineComponent({
    name: 'k-popup',
    props: {
        appendToBody: {
            type: Boolean,
            default: false,
        },
        zIndex: {
            type: Number,
            default: 2002,
        },
    },
    components: { KMask },
    emits: [OPEN_EVENT, OPENED_EVENT, CLOSE_EVENT, CLOSED_EVENT],
    setup(props, ctx: SetupContext) {
        const popupRef = ref(null)
        return {
            ...usePopup(props, ctx, popupRef),
            popupRef,
        }
    },
})
</script>