
/*
 * @Author: sunheng
 * @Date: 2023-03-31 18:33:36
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-01 16:07:24
 * @Description: 请填写简介
 */
import { defineStore } from "pinia";
import type { GlobalTheme } from "naive-ui";
import { ThemeStateType } from "./index.d";
import { darkTheme } from "naive-ui";
export const useThemeStore = defineStore({
    id: "useThemeStore",
    state: (): ThemeStateType => ({
        theme: darkTheme,
    }),
    getters: {
        GetThemType: (state): GlobalTheme | null => {
            return state.theme;
        },
    },
    actions: {
        handleChange(ThemeType: GlobalTheme | null) {
            if (ThemeType) {
                window.document.body.setAttribute("data-theme", "dark");
            } else {
                window.document.body.setAttribute("data-theme", "light");
            }
            this.theme = ThemeType;
        },
    },
});
