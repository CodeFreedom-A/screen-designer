<!--
 * @Author: sunheng
 * @Date: 2023-04-27 15:32:40
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-27 16:25:19
 * @Description: 请填写简介
-->
<template>
    <div class="space-right">
        <page-congfig></page-congfig>
    </div>
</template>
<script lang="ts" setup>
import { pageCongfig } from "./pageConfig";
</script>
<style lang="scss" scoped>
.space-right {
    height: 100%;
    @include bgcard("right-bg");
}
</style>
