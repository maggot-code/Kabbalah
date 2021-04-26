<!--
 * @Author: maggot-code
 * @Date: 2021-04-26 15:22:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-26 16:26:44
 * @Description: file content
-->
<template>
    <div :class="maskClass">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import type { SetupContext } from '@vue/runtime-core'
import { default as useMask } from './useMask'

export default defineComponent({
    name: 'k-mask',
    props: {
        mask: {
            type: Boolean,
            default: true,
        },
        maskClassname: {
            type: [String, Array],
            default: [],
        },
        zIndex: {
            type: Number,
            default: 2001,
        },
    },
    setup(props: any, ctx: SetupContext) {
        return { ...useMask(props, ctx) }
    },
    beforeCreate() {},
    created() {
        console.log(this.zIndex)
    },
})
</script>