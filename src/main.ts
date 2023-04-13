/*
 * @Author: sunheng
 * @Date: 2023-02-27 14:02:00
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-12 18:22:30
 * @Description: 请填写简介
 */
import type { App } from "vue";
import { createApp } from "vue";
import { setupRouter } from "./router/index";
import naive from "naive-ui";
import AppDom from "./App.vue";
import plugin from "./plugin/index";
import "./style.css";
import "vue3-sketch-ruler/lib/style.css";
import { setupStore } from "@/store/index";
import { SetThemeDesign } from "./utils";
import DataVVue3 from "@kjgl77/datav-vue3";
import VChart from "vue-echarts";
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'
import PieCircle from "@/charts/com/chartList/Pies/PieCircle/index.vue"
const app = createApp(AppDom);

const InitDom = async (app: App) => {
    // 目前是全局引入Navie
    app.use(naive);

    // 引用的是datav,后期会更换成vue3的
    app.use(DataVVue3);
    // 右键事件
    app.use(ContextMenu)

    app.component("VChart", VChart);
    // app.component("PieCircle", PieCircle);
    // 注册全局公共组件
    plugin.InjectComponents(app);

    // 注册pinia
    await setupStore(app);

    // 默认样式
    SetThemeDesign();
    // 注册路由
    await setupRouter(app);

    app.mount("#app");
    // console.log(PieCircle,'PieCircle');
    
    // 挂在全局
    window['$vue'] = app
    // window['$vue'].component("PieCircle",PieCircle)
};

InitDom(app);
