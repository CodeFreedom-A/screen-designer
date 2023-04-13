/*
 * @Author: sunheng
 * @Date: 2023-04-13 14:57:52
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-13 16:05:37
 * @Description: 请填写简介
 */
import { defineStore } from "pinia";
import { ChartOptionType } from "@/charts/index.d";
import { EidStoreStateType } from "./index.d";
export const useChartEditStore = defineStore({
    id: "useChartEditStore",
    state: (): any => ({
        componentList: []
    }),
    getters: {
        getComponentList():EidStoreStateType {
            return this.componentList;
        },
    },
    actions: {
        addtComponent(commponent: ChartOptionType) {
            this.componentList.push(commponent);
        },
    },
});
