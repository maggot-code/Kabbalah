<!--
 * @Author: maggot-code
 * @Date: 2021-04-23 16:51:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-26 11:16:27
 * @Description: file content
-->
<template>
    <div ref="popup" id="popup" class="k-popup">k-popup</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import {
    hasClass,
    addClass,
    removeClass,
    getOffsetTopDistance,
} from '../../utils/dom'
export default defineComponent({
    name: 'k-popup',
    components: {},
    setup() {
        return {}
    },
    beforeCreate() {},
    created() {},
    mounted() {
        this.$nextTick(() => {
            const appBox = <KDom.el>document.getElementById('#app')
            const el = <KDom.el>this.$refs.popup
            const a = getOffsetTopDistance(el, appBox)
            console.log(a)
        })
    },
})
</script>