<!--
 * @Author: sunheng
 * @Date: 2023-03-12 15:55:08
 * @LastEditors: sunheng
 * @LastEditTime: 2023-03-25 19:07:25
 * @Description: 请填写简介
-->
<template>
    <n-layout has-sider class="space">
    <layOutSide></layOutSide>
     <router-view></router-view>
    </n-layout>
</template>
<script setup lang="ts">
import layOutSide from "./components/LayoutSide/index.vue"
import { ref } from "vue";

</script>
<style scoped lang="scss">
.space {
    width: 100%;
    height: calc(100vh - 57px);
}
// .n-layout-sider {
//     background: #fafafc;
// }


</style>
