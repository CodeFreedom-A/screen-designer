/*
 * @Author: sunheng
 * @Date: 2023-02-27 14:02:00
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-07 16:33:10
 * @Description: 请填写简介
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        // 配置路径别名
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@modules": path.resolve(__dirname, "./src/modules"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                javascriptEnabled: true,
                additionalData: `@import "src/style/common/index.scss";`,
            },
        },
    },
    server: {
        // ← ← ← ← ← ←
        host: "0.0.0.0", // ← 新增内容 ←
    },
});
