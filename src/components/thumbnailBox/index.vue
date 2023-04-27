<!--
 * @Author: sunheng
 * @Date: 2023-04-27 11:32:30
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-27 13:47:42
 * @Description: 请填写简介
-->
<template>
    <div class="mac-btn">
        <template v-for="item in btnList">
            <div class="btn mini"></div>
        </template>
    </div>
</template>

<script lang="ts" setup>
const btnList: {
    title: string;
    key: "close" | "remove" | "resize" | "fullResize";
    icon: any;
}[] = [
    {
        title: "关闭",
        key: "close",
        icon: "CloseIcon",
    },
    {
        title: "缩小",
        key: "remove",
        icon: "RemoveIcon",
    },
    {
        title: "缩小",
        key: "remove",
        icon: "RemoveIcon",
    },
];
</script>
<style lang="scss" scoped>
.mac-btn {
    display: flex;

    .mini {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #fc625d;
        margin-left: 3px;
        &:nth-child(2) {
            background: #fcbc40;
        }
        &:nth-child(3){
            background: #34c749;
        }
    }
}
</style>
