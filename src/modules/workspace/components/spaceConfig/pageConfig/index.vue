<!--
 * @Author: sunheng
 * @Date: 2023-04-27 15:51:59
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-27 17:53:11
 * @Description: 请填写简介
-->
<template>
    <div style="width: 98%; margin: 0 auto">
        <div style="margin-top: 20px;">
        <n-tabs class="tabs-box" size="small" type="segment">
            <n-tab-pane name="signin" v-for="item in PegeConfig">
                <template #tab>
                    <n-space>
                        <span>{{ item.title }}</span>
                        <n-icon size="16" class="icon-position">
                            <Options></Options>
                        </n-icon>
                    </n-space>
                </template>
                <div style="margin-top: 10px;">
                <component :is="item.render"></component>
                </div>
            </n-tab-pane>
        </n-tabs>
    </div>
    </div>
</template>
<script setup lang="ts">
import { TabsEnum } from "./index.d";
import { Options } from "@vicons/ionicons5";
import { loadAsyncComponent } from "@/utils";
const PageCongfigCanvas = loadAsyncComponent(()=>import("./components/PageCongfigCanvas/index.vue"));
const PegeConfig = [
    {
        title: "页面配置",
        icon: "Options",
        key: TabsEnum.PAGE_CONFIG,
        render: PageCongfigCanvas,
    },
];
</script>
<style lang="scss" scoped></style>
