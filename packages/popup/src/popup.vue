<!--
 * @Author: maggot-code
 * @Date: 2021-04-23 16:51:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-27 15:09:34
 * @Description: file content
-->
<template>
    <teleport to=".k-body">
        <transition name="dialog-fade">
            <k-mask>
                <div ref="popupRef" class="k-popup">k-popup</div>
            </k-mask>
        </transition>
    </teleport>
</template>

<script lang='ts'>
import KMask from '../../mask'
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'k-popup',
    props: {},
    components: { KMask },
    setup(props, ctx) {
        return {}
    },
})
</script>