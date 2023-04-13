<!--
 * @Author: sunheng
 * @Date: 2023-03-20 16:22:20
 * @LastEditors: sunheng
 * @LastEditTime: 2023-03-25 19:26:37
 * @Description: 请填写简介
-->
<script setup lang="ts">
import { useRouter } from "vue-router";
import { Duplicate } from "@vicons/ionicons5";
import { GetMenuList } from "./menu";
import { MenuInst } from "naive-ui";
import { ref } from "vue";
const Router=useRouter()
// 侧边栏数据
const menuOptions = GetMenuList();
const menuInstRef = ref<MenuInst | null>(null);
menuInstRef.value?.showOption("");
const selectedKey = ref("all-project");

// 创建新的工作台空间
const handlerCreate=()=>{
    Router.push({name:"WorkSpace"})
}
</script>

<template>
    <n-layout-sider bordered>
        <div class="createBtn">
            <n-button type="primary" round @click="handlerCreate">
                <template #icon>
                    <n-icon>
                        <Duplicate />
                    </n-icon>
                </template>
                <span>新建</span>
            </n-button>
        </div>
        <div class="menu">
            <n-menu :options="menuOptions" v-model:value="selectedKey" />
        </div>
    </n-layout-sider>
</template>


<style>
.createBtn {
    font-size: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: solid 1px var(--n-border-color);
}
</style>
