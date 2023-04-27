
<!--
 * @Author: sunheng
 * @Date: 2023-03-25 20:00:21
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-26 14:50:53
 * @Description: 请填写简介
-->
<template>
    <div class="space-canvas" @dragover="(e) => e.preventDefault()" @drop="handleDrag">
        <CustomRule>
            <VueDragResize v-for="item in ChartEditStore.getComponentList" :key="item.id" class="vdom" :h="item.attr.height"
                :w="item.attr.width" :style="`transform: translate(${item.attr.x}px,${item.attr.y}px)`" @click="hanldeClick(item)" :isActive="getActiveItem(item.id)">
                <component :is="item.key" :option="item.option"  />
            </VueDragResize>
        </CustomRule>
    </div>
</template>
<script setup lang="ts">
import CustomRule from "./components/customRule/index.vue";
import VueDragResize from "vue-drag-resize/src/component/vue-drag-resize.vue";
import { handleDrag,hanldeClick,getActiveItem } from "./hooks/useDrag.hook";
import { useChartEditStore } from "@/store/modules/chartEditStore";
let ChartEditStore = useChartEditStore()

</script>
<style scoped lang="scss">
.space-canvas {
    height: 100%;
    position: relative;
}

.vdom {
    position: absolute;
}

.vdom:hover {
    outline: 1px dashed #51d4a7;
}

::v-deep.vdr.active:before {
    z-index: 100;
    outline: 1px solid #51d6a9;
}

:deep(.vdr-stick) {
    background: #51d6a9 !important;
    width: 14px !important;
}
</style>
