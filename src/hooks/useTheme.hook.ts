/*
 * @Author: sunheng
 * @Date: 2023-03-31 18:02:38
 * @LastEditors: sunheng
 * @LastEditTime: 2023-03-31 20:28:24
 * @Description: 请填写简介
 */
import { reactive, computed } from "vue";
import { GlobalThemeOverrides, darkTheme } from "naive-ui";
import { useThemeStore } from "@/store/modules/ThemeStore";

export const useThemeOverrHook = () => {
    const lightThemeOverrides: GlobalThemeOverrides = reactive({
        common: {},
    });
    return computed((): GlobalThemeOverrides => lightThemeOverrides);
};
export const useThemehook = () => {
    let ThemeStoredesk = useThemeStore();
    return computed(() => (ThemeStoredesk.GetThemType ? darkTheme : null));
};
