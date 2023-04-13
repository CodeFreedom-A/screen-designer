<!--
 * @Author: sunheng
 * @Date: 2023-04-11 15:23:20
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-13 16:18:41
 * @Description: 请填写简介
-->
<template>
    <div class="menu-item-list">
        <div class="menu-option">
        <n-menu :options="menuList.menuOptions" ></n-menu>
        </div>
        <div class="menu-item-drag">
         <chartDragInfo :dragList="menuList.selectOption"></chartDragInfo>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, watch } from 'vue';
import { ConfigType } from "@/charts/index.d"
import { MenuOptionInfo } from "./index.d"
import chartDragInfo from "../chartDragInfo/index.vue"

const props = defineProps({
    selectOption: {
        type: Object,
        default: () => { }
    }
})
const menuList = reactive<{
    [T: string]: any
}>({
    // 所有的数据
    categorys: {
        all: []
    },
    categoryNames: {
        all: '所有'
    },
    // 标题
    menuOptions: [],
    // 当前活跃的
    selectOption: {},

})
watch(
    // @ts-ignore 
    () => props.selectOption,
    (val) => {
        if (val) {
            menuList.selectOption=val
            val.list.map((item: ConfigType) => {
                menuList.menuOptions.push({
                    key: item.key,
                    // @ts-ignore
                    label: MenuOptionInfo[item.cateType].label
                })

            })
        }


    }, {
    immediate: true
})
</script>
<style lang="scss" scoped>
.menu-item-list{
    width:100%;
    height: 100%;
    display: flex;
    .menu-option{
        flex: 1;
    }
    
    .menu-item-drag{
        flex: 2;
    }
    :deep(.n-menu-item-content){
        padding-left: 15px !important;
    }
}
</style>
