/*
 * @Author: sunheng
 * @Date: 2023-04-11 10:29:02
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-17 16:21:50
 * @Description: 请填写简介
 */
import { defineStore } from "pinia";
import { ConfigType, PackagesList, PackagesType } from "./AsideStore.d";
import { packagesList } from "@/charts/packages";

const useAsideStore = defineStore({
    id: "useAsideStore",
    state: (): PackagesList => ({
        // 禁止修改
        packagesList: Object.freeze(packagesList),
    }),
    getters: {
        getPackagesList(): PackagesType {
            return this.packagesList;
        },
    },
});
export {
  useAsideStore  
}