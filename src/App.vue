<!--
 * @Author: maggot-code
 * @Date: 2021-04-21 11:31:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-21 17:38:22
 * @Description: file content
-->
<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <popup />
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Popup from "@/../packages/popup";
import Popup from "@pkg/popup";
export default defineComponent({
    name: "App",
    components: { Popup },
});
</script>

<style>
@import "@/style/scss/app.scss";
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
