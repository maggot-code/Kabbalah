<!--
 * @Author: maggot-code
 * @Date: 2021-04-23 16:51:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-25 22:35:35
 * @Description: file content
-->
<template>
    <div class="k-popup">k-popup</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { hasClass, on } from '../../utils/dom'
export default defineComponent({
    name: 'k-popup',
    components: {},
    setup() {
        return {}
    },
    beforeCreate() {},
    created() {
        console.log(hasClass)
        console.log(on)
    },
})
</script>