/*
 * @Author: sunheng
 * @Date: 2023-04-11 10:59:56
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-13 15:55:17
 * @Description: 请填写简介
 */
import { chartInitConfigType } from "./com/public/index.d"
// 图表类型
export enum ChartSourceEnum {
    DATA_V = "dataV",
    ECHARTS = "echarts",
    NAIVE_UI = "naiveUI",
    COMMON = "common",
}
// 图表数据
export type ConfigType = {
    key: string;
    chartKey: string;
    conKey: string;
    title: string;
    cateType: string;
    cateTypeName: string;
    package: string;
    chartFrame?: ChartSourceEnum;
    image: string;
    weigetX?: number;
    weigetY?: number
};
// 一级菜单
export enum PackagesCategoryEnum {
    CHARTS = "chartList",
    TABLES = "Tables",
    INFORMATIONS = "Informations",
    DECORATES = "Decorates",
}
// 一级菜单名称
export enum PackagesCategoryName {
  CHARTS = '图表',
  TABLES = '列表',
  INFORMATIONS = '信息',
  DECORATES = '小组件'
}
//拖拽传参
export enum DragKeyEnum{
    CHARTS="charts",
    COMMON="common"
}
//默认的
export interface ChartOptionType {
  key:string
  id: string
  option:object,
  chartConfig:ConfigType,
  attr: { x: number; y: number; width: number; height: number; zIndex: number; }
}