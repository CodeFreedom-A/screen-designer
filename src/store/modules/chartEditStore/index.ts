/*
 * @Author: sunheng
 * @Date: 2023-04-13 14:57:52
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-26 15:15:49
 * @Description: 请填写简介
 */
import { defineStore } from "pinia";
import { ChartOptionType } from "@/charts/index.d";
import { EidStoreStateType } from "./index.d";
export const useChartEditStore = defineStore({
    id: "useChartEditStore",
    state: (): any => ({
        componentList: [],
        ActiveId: null,
        DefaultId: null,
    }),
    getters: {
        getComponentList(): EidStoreStateType {
            return this.componentList;
        },
    },
    actions: {
        addtComponent(commponent: ChartOptionType) {
            this.componentList.push(commponent);
        },
        setComponentId(active_id: string) {
            this.ActiveId = active_id;
            this.DefaultId = active_id;
        },
        getComponentActive(id: number): boolean {
            return this.ActiveId == id;
        },
    },
});
