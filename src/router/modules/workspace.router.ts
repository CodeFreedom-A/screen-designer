/*
 * @Author: sunheng
 * @Date: 2023-03-25 19:17:50
 * @LastEditors: sunheng
 * @LastEditTime: 2023-03-25 19:20:17
 * @Description: 请填写简介
 */
import { RouteRecordRaw } from "vue-router";
const WorkSpaceRouter: RouteRecordRaw = {
    path: "/workspace",
    name: "WorkSpace",
    component: () => import("@/modules/workspace/index.vue"),
};
export default WorkSpaceRouter;
