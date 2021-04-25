<!--
 * @Author: maggot-code
 * @Date: 2021-04-25 09:47:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-25 11:26:14
 * @Description: file content
-->
<template>
    <k-popup></k-popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { KPopup } from '../../packages/install'

export default defineComponent({
    name: 'App',
    components: {
        KPopup,
    },
})
</script>
