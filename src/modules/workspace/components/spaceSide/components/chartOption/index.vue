<!--
 * @Author: sunheng
 * @Date: 2023-04-11 15:23:20
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-23 16:19:22
 * @Description: 请填写简介
-->
<template>
    <div class="menu-item-list">
        <div class="menu-option">
            <n-menu :options="menuList.menuOptions" v-model:value="menuList.selectName"
                @update:value="handleClickItem"></n-menu>
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
import { isEqual, uniqWith, uniqBy, uniq } from 'lodash'
import chartDragInfo from "../chartDragInfo/index.vue"

const props = defineProps({
    selectOption: {
        type: Object,
        default: () => { }
    }
})

const handleClickItem = (item: string) => {
    // 他返回的是绑定的label
    console.log(menuList.selectName, 'item');
    menuList.selectOption=menuList.categorys[item]
    console.log(menuList.selectOption,'menuList.selectOption');
    
}

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
    selectName: null
})
watch(
    // @ts-ignore 
    () => props.selectOption,
    (val) => {
        if (val) {
            
            val.list.map((item: ConfigType) => {
                menuList.categorys.all.push(item)
                const value: ConfigType[] = menuList.categorys[item.cateType]
                menuList.categorys[item.cateType] = value && value.length ? [...value, item] : [item]
                menuList.categoryNames[item.cateType] = item.cateTypeName
            })
            for (const key in menuList.categorys) {
                  menuList.menuOptions.push({
                    key,
                    label:menuList.categoryNames[key]
                  })
            }
        }


    }, {
    immediate: true
})
</script>
<style lang="scss" scoped>
.menu-item-list {
    width: 100%;
    height: 100%;
    display: flex;

    .menu-option {
        flex: 1;
    }

    .menu-item-drag {
        flex: 2;
    }

    :deep(.n-menu-item-content) {
        padding-left: 15px !important;
    }
}
</style>
