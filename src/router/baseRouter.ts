/*
 * @Author: sunheng
 * @Date: 2023-03-25 19:13:07
 * @LastEditors: sunheng
 * @LastEditTime: 2023-03-25 19:16:40
 * @Description: 请填写简介
 */
import { RouteRecordRaw } from "vue-router";
// 登录页
export const LoginRoute: RouteRecordRaw = {
    path: "/login",
    name: "Login",
    component: () => import("@/modules/login/index.vue"),
    meta: {
        title: "登录",
    },
};
