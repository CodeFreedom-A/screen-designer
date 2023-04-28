/*
 * @Author: sunheng
 * @Date: 2023-04-27 17:59:52
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-28 15:03:25
 * @Description: 请填写简介
 */
import { defineStore } from "pinia";
import {PageConfiogType} from './index.d'
 export const usePageCongfigStore = defineStore({
    id: "usePageCongfigStore",
    state: () => ({
        PageConfiog: {
            width: 1920,
            height: 1080,
            imgurl:''
        },
    }),
    getters: {
        getPageConfiog():PageConfiogType {
            return this.PageConfiog;
        },
    },
    actions: {
        setPageConfig(key:string,value:number) {
            this.PageConfiog[key] = value;
        },
    },
});
