/*
 * @Author: sunheng
 * @Date: 2023-04-11 10:49:01
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-12 16:24:46
 * @Description: 请填写简介
 */
import { chartsList } from "@/charts/com/chartList/index";
import { PackagesCategoryEnum } from "../index.d";
import { ConfigType } from "@/charts/index.d";
export type PackagesType = {
    [PackagesCategoryEnum.CHARTS]: ConfigType[];
};
export let packagesList = {
    [PackagesCategoryEnum.CHARTS]: chartsList,
};
