/*
 * @Author: sunheng
 * @Date: 2023-03-31 18:25:33
 * @LastEditors: sunheng
 * @LastEditTime: 2023-03-31 18:31:16
 * @Description: 请填写简介
 */
// 创建根存储
import { createPinia } from "pinia";
import type { App } from "vue";
const pinia = createPinia();
// 直接和路由一样导出注册方法
export async function setupStore(app: App<Element>) {
   await app.use(pinia);
}
