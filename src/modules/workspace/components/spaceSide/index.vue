<!--
 * @Author: sunheng
 * @Date: 2023-03-25 19:32:10
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-13 17:10:22
 * @Description: 请填写简介
-->
<template>
     <n-layout-sider bordered>
        <div>
            <WidgetList></WidgetList>
        </div>
   </n-layout-sider>
</template>
<script setup lang="ts">
import  WidgetList  from "./components/widgetList/index.vue";
</script>
<style scoped lang="scss">
</style>
