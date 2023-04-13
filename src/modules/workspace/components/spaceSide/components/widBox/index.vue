<!--
 * @Author: sunheng
 * @Date: 2023-04-10 11:58:29
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-10 18:01:26
 * @Description: 右侧组件
-->
<template>
    <div class="left-side">
        <div class="side-top">
            <n-ellipsis>
                <n-text class="search">{{ title }}</n-text>
            </n-ellipsis>
            <div class="mt-1">
                <slot name="icon"></slot>
            </div>
        </div>

        <slot></slot>
    </div>
</template>
<script setup lang="ts">
defineProps({
    title: String,
    showTop: {
        type: Boolean,
        default: true
    },
    showBottom: {
        type: Boolean,
        default: false
    },
    flex: {
        type: Boolean,
        default: false
    },
    // back
    backIcon: {
        type: Boolean,
        default: true
    },
    // 背景深度
    depth: {
        type: Number,
        default: 1
    },
    // x 轴滚动
    xScroll: {
        type: Boolean,
        default: false
    },
    disabledScroll: {
        type: Boolean,
        default: false
    },
})
</script>
<style scoped lang="scss">
.search {
    height: 42px;
    margin-left: 2em;
    line-height: 42px;
}

.side-top {
    display: flex;
    align-items: center;

    .mt-1 {
        padding-top: 2px;
        margin-left: 10px;
    }
}
</style>