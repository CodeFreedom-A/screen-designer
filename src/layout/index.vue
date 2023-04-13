<!--
 * @Author: sunheng
 * @Date: 2023-03-13 13:36:43
 * @LastEditors: sunheng
 * @LastEditTime: 2023-03-31 20:22:16
 * @Description: 请填写简介
-->
<template>
    <n-config-provider
        :theme="theme"
        :theme-overrides="theme == null ? ThemeOverrides : null"
    >
        <n-space vertical>
            <Header></Header>
        </n-space>
        <n-layout>
            <router-view></router-view>
        </n-layout>
    </n-config-provider>
</template>

<script lang="ts" setup>
import { useThemeOverrHook, useThemehook } from "@/hooks";
import Header from "./components/header/index.vue";
let theme = useThemehook();
let ThemeOverrides = useThemeOverrHook();
</script>
<style scoped lang="scss">
.n-layout-sider {
    background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
    background: rgba(128, 128, 128, 0.4);
}
</style>
