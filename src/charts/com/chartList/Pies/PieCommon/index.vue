<!--
 * @Author: sunheng
 * @Date: 2023-04-12 16:43:25
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-13 17:23:39
 * @Description: 请填写简介
-->
<template>
    <v-chart class="chart" :option="props.option" autoresize />
</template>

<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent
} from "echarts/components";
import VChart from "vue-echarts";
import { ref } from "vue";

use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent
]);

let props = defineProps({
    option: {
        default: () => { },
        type: Object
    }
})



</script>

<style scoped>
.chart {}
</style>
