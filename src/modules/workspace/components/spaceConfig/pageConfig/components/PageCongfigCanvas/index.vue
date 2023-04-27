<!--
 * @Author: sunheng
 * @Date: 2023-04-27 17:24:23
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-27 18:25:41
 * @Description: 请填写简介
-->
<template>
    <n-form
        ref="formRef"
        inline
        :label-width="40"
        :model="PageCongfig"
        label-placement="left"
    >
        <n-form-item label="宽" path="user.name">
            <n-input-number
                v-model:value="PageCongfig.width"
                placeholder="输入宽"
                size="small"
                @update:value="changeSizeHandle"
            />
        </n-form-item>
        <n-form-item label="高" path="user.name">
            <n-input-number
                v-model:value="PageCongfig.height"
                placeholder="输入高"
                size="small"
                @update:value="changeSizeHandle"
            />
        </n-form-item>
    </n-form>
</template>
<script lang="ts" setup>
import { usePageCongfigStore } from "@/store/modules/PageConfigStore";
let PageCongfigStore = usePageCongfigStore();
let PageCongfig = PageCongfigStore.getPageConfiog;
</script>
