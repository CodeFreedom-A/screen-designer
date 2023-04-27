<!--
 * @Author: sunheng
 * @Date: 2023-03-25 19:50:33
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-26 16:49:32
 * @Description: 请填写简介
-->
<template>
    <div>
        <wid-box title="组件">
            <template #icon>
                <n-icon :component="BarChart" />
            </template>
        </wid-box>
        <!-- chart -->
        <aside>
            <div class="menu">
                <n-menu class="packge-item" :options="menuOptions" v-model:value="DefauletValue" default-value="1"
                    @update:value="clickItemHandle" />
                <div class="menu-children">
                    <chart-option :selectOption="DefauletObject"></chart-option>
                </div>
            </div>
        </aside>
    </div>
</template>
<script setup lang="ts">
import WidBox from "../widBox/index.vue";
import ChartOption from "../chartOption/index.vue";
import { BarChart } from "@vicons/ionicons5";
import { menuOptions, DefauletValue, DefauletObject, clickItemHandle } from "../../hooks/useAside.hook";
</script>
<style scoped lang="scss">
.weigetItem {
    width: 100px;
    height: 100px;
    margin: 24px;
    font-size: 20px;
    line-height: 100px;
    text-align: center;
    outline: 1px solid red;
}

.menu {
    width: 100%;
    display: flex;

    .packge-item {
        width: 86px;
        height: calc(872px - 42px);
        overflow: hidden !important;
    }

    .menu-children {
        flex: 1;
        height: calc(872px - 42px);
    }
}
</style>
