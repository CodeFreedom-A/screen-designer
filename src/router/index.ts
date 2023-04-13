/*
 * @Author: sunheng
 * @Date: 2023-03-12 17:50:11
 * @LastEditors: sunheng
 * @LastEditTime: 2023-03-26 14:07:57
 * @Description: 请填写简介
 */
import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw,
    Router,
} from "vue-router";
import type { App } from "vue";
import { Layout } from "./eternity/index";
import { LoginRoute } from "./baseRouter";
import modules from "./modules/index";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/login",
        name: "root",
        component: Layout,
        children: [
            // 登录页
            LoginRoute,
            // project工作台
            modules.Project,
            modules.WorkSpace,
        ],
    },
];
const router: Router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export const setupRouter = async (app: App) => {
    app.use(router);
    await router.isReady()
};

//直接在这注册就不用导出了
// export default router;
