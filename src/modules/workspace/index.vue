<!--
 * @Author: sunheng
 * @Date: 2023-03-25 19:18:46
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-27 15:39:54
 * @Description: 请填写简介
-->
<template>
    <n-space vertical>
        <n-layout has-sider class="works-space">
            <n-layout-sider bordered>
                <space-side></space-side>
            </n-layout-sider>
            <n-layout>
              <space-canvas></space-canvas>
            </n-layout>
             <n-layout-sider bordered>
               <space-config></space-config>
            </n-layout-sider>
        </n-layout>
    </n-space>
</template>
<script lang="ts" setup>
import SpaceSide from "./components/spaceSide/index.vue";
import SpaceCanvas from "./components/spaceCanvas/index.vue";
import SpaceConfig from "./components/spaceConfig/index.vue"
</script>
<style lang="scss" scoped>
.works-space{
    width: 100%;
    height: calc(100vh - 57px);
}
:deep(.n-layout-sider){
max-width: 380px !important;
width: 380px !important;
}
</style>

