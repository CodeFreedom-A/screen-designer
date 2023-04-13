/*
 * @Author: sunheng
 * @Date: 2023-04-11 10:38:46
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-11 14:13:46
 * @Description: 请填写简介
 */
export * from "@/charts/index.d";
import { PackagesType } from "@/charts/packages/index";
export interface PackagesList {
    packagesList: PackagesType;
}
export { PackagesType };
