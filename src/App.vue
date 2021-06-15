<!--
 * @Author: maggot-code
 * @Date: 2021-06-08 14:57:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-06-09 13:20:40
 * @Description: file content
-->
<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@components/HelloWorld.vue";

export default defineComponent({
    name: "App",
    components: {
        HelloWorld,
    },
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
