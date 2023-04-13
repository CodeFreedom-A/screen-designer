/*
 * @Author: sunheng
 * @Date: 2023-03-25 18:46:12
 * @LastEditors: sunheng
 * @LastEditTime: 2023-03-31 16:33:33
 * @Description: 请填写简介
 */
import { RouteRecordRaw } from "vue-router";
const projectRoutes: RouteRecordRaw = {
    path: "/project",
    name: "Project",
    redirect: { name: "myproject" },
    component: () => import("@/modules/project/project.vue"),
    children: [
        {
            path: "myproject",
            name: "myproject",
            component: () => import("@/modules/myproject/index.vue"),
        },
        {
            path: "mymodel",
            name: "mymodel",
            component: () => import("@/modules/myModel/index.vue"),
        },
    ],
};
export default projectRoutes;
