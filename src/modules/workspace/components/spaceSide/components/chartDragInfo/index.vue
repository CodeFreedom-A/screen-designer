<!--
 * @Author: sunheng
 * @Date: 2023-04-12 15:38:57
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-27 15:26:11
 * @Description: 请填写简介
-->
<template>
    <div class="drag-item">
        <n-card
            class="weigetItem"
            draggable="true"
            v-for="item in props.dragList"
            :key="item.key"
            @dragstart="ondragStart($event, item)"
        >
            
            <template #header>
               <MacBtn></MacBtn>
            </template>
            <template #header-extra>
                <div style="color: #767c82;">{{ item.title }}</div>
            </template>
            <div style="width: 120px; height: 90px;">
            <ChartBackImg :option="item"></ChartBackImg>
            </div>
        </n-card>
    </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { componentInstall } from "@/utils/index";
import { getChartDom } from "@/charts/index";
import { DragKeyEnum, ConfigType } from "@/charts/index.d";
import ChartBackImg from "@/components/chartBackImg/index.vue";
import MacBtn from "@/components/thumbnailBox/index.vue";
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
<style lang="scss" scoped>
.weigetItem {
    width: 170px;
    height: 130px;
    margin: 0 auto;
    margin-top: 30px;
     @include bgcard("card-background");
}
.n-card :deep(.n-card-header){
padding-top: 3px !important;
padding-left: 3px;
padding-right: 5px;
padding-bottom: 5px;
}
</style>
