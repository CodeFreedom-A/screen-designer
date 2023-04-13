/*
 * @Author: sunheng
 * @Date: 2023-04-01 16:30:14
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-01 16:37:32
 * @Description: 请填写简介
 */
import { useThemeStore } from "@/store/modules/ThemeStore";
export const SetThemeDesign = () => {
    let { theme } = useThemeStore();
    if (theme) return document.body.setAttribute("data-theme", "dark");
    return document.body.setAttribute("data-theme", "light");
};
