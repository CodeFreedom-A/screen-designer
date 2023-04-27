/*
 * @Author: sunheng
 * @Date: 2023-02-27 14:02:00
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-27 09:50:16
 * @Description: 请填写简介
 */
import "./style.css";
import naive from "naive-ui";
import AppDom from "./App.vue";
import type { App } from "vue";
import { createApp } from "vue";
import VChart from "vue-echarts";
import plugin from "./plugin/index";
import "./assets/iconfont/iconfont.css";
import { SetThemeDesign } from "./utils";
import "vue3-sketch-ruler/lib/style.css";
import DataVVue3 from "@kjgl77/datav-vue3";
import { setupStore } from "@/store/index";
import { setupRouter } from "./router/index";
import ContextMenu from "@imengyu/vue3-context-menu";
import "@imengyu/vue3-context-menu/lib/vue3-context-menu.css";

const app = createApp(AppDom);

const InitDom = async (app: App) => {
    // 目前是全局引入Navie
    app.use(naive);

    // 引用的是datav,后期会更换成vue3的
    app.use(DataVVue3);
    // 右键事件
    app.use(ContextMenu);

    app.component("VChart", VChart);
    // 注册全局公共组件
    plugin.InjectComponents(app);

    // 注册pinia
    await setupStore(app);

    // 默认样式
    SetThemeDesign();
    // 注册路由
    await setupRouter(app);
    // 挂在全局
    window["$vue"] = app;
    // 挂在到全局的

    app.mount("#app");
};

InitDom(app);
