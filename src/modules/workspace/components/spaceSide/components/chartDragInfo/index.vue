<!--
 * @Author: sunheng
 * @Date: 2023-04-12 15:38:57
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-13 17:37:48
 * @Description: 请填写简介
-->
<template>
    <div class="drag-item">
        <div
            class="weigetItem"
            draggable="true"
            v-for="item in props.dragList.list"
            :key="item.key"
            @dragstart="ondragStart($event, item)"
        >
            <ChartBackImg :option="item"></ChartBackImg>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { componentInstall } from "@/utils/index";
import { getChartDom } from "@/charts/index";
import { DragKeyEnum, ConfigType } from "@/charts/index.d";
import ChartBackImg from "@/components/chartBackImg/index.vue";
let props = defineProps({
    dragList: {
        default: () => {},
        type: Object,
    },
});

const ondragStart = (e: DragEvent, item: ConfigType) => {
    const Canvas = reactive({
        ...item,
        weigetX: e.offsetX,
        weigetY: e.offsetY,
    });
    componentInstall(item.key, getChartDom(item));
    e!.dataTransfer!.setData(DragKeyEnum.CHARTS, JSON.stringify(Canvas));
};
</script>
<style lang="scss">
.weigetItem {
    width: 140px;
    height: 100px;
    margin: 0 auto;
     margin-top: 20px;
}
</style>
