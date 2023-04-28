<!--
 * @Author: sunheng
 * @Date: 2023-03-09 17:50:19
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-28 16:17:19
 * @Description: 请填写简介
-->
<template>
    <div>
        <n-layout>
            <n-layout-header class="header">
                <div class="logo">SENUV</div>
                <n-switch
                    v-model:value="active"
                    size="medium"
                    @update:value="HandlerTheme"
                >
                    <!-- <template #icon> 🤔 </template> -->
                    <template #checked-icon> 🌛 </template>
                    <template #unchecked-icon> ☀️ </template>
                </n-switch>
            </n-layout-header>
        </n-layout>
    </div>
</template>
<script setup lang="ts">
import { ref, defineEmits, onMounted } from "vue";
import { SunnyOutline, Moon } from "@vicons/ionicons5";
import { useThemeStore } from "@/store/modules/ThemeStore";
import { usePageCongfigStore } from "@/store/modules/PageConfigStore";
import { darkTheme } from "naive-ui";
let active = ref<boolean>(false);
let PageCongfigStore = usePageCongfigStore();
let emits = defineEmits(["HandlerTheme"]);
const { handleChange } = useThemeStore();
const HandlerTheme = (e: boolean) => {
    if (
        (PageCongfigStore.getPageConfiog.color =
            "#232324" || PageCongfigStore.getPageConfiog.color == "#fafafc")
    ) {
        let BaseColor = e ? "#232324" : "#fafafc";
        PageCongfigStore.setPageConfig("color", BaseColor);
    }
    if (e) return handleChange(darkTheme);
    handleChange(null);
};

// 周期
onMounted(() => {
    active.value = true;
});
</script>
<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 54px;
    padding: 0 30px;
    border-bottom: solid 1px var(--n-border-color);

    .logo {
        color: rgb(72, 210, 183);
        font-size: 18px;
        font-weight: 600;
    }
}
</style>
