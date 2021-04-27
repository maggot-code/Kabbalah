<!--
 * @Author: maggot-code
 * @Date: 2021-04-26 15:22:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-27 15:10:03
 * @Description: file content
-->
<template>
    <div class="k-mask">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'k-mask',
    props: {},
    setup(props, ctx) {
        return {}
    },
})
</script>