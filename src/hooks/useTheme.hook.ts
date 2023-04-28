/*
 * @Author: sunheng
 * @Date: 2023-03-31 18:02:38
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-28 16:01:43
 * @Description: 请填写简介
 */
import { reactive, computed } from "vue";
import { GlobalThemeOverrides, darkTheme } from "naive-ui";
import { useThemeStore } from "@/store/modules/ThemeStore";

let ThemeStoredesk = useThemeStore();
export const useThemeOverrHook = () => {
    const lightThemeOverrides: GlobalThemeOverrides = reactive({
        common: {},
    });
    const DarkThemeOverrides: GlobalThemeOverrides = reactive({
        Card: {
            backgroundColor: "red",
        },
    });
    return computed(
        (): GlobalThemeOverrides =>
            ThemeStoredesk.GetThemType
                ? DarkThemeOverrides
                : lightThemeOverrides
    );
};
export const useThemehook = () => {
    return computed(() => (ThemeStoredesk.GetThemType ? darkTheme : null));
};
