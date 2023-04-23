/*
 * @Author: sunheng
 * @Date: 2023-04-23 14:11:18
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-23 14:25:47
 * @Description: 请填写简介
 */
import {
    ConfigType,
    PackagesCategoryEnum,
    ChartSourceEnum,
} from "@/charts/index.d";
import { ChatTypeEnum, ChatTypeEnumName } from "@/charts/com/index.d";
export const LinesBaseConfig: ConfigType = {
    key: "LineBase",
    chartKey: "VLineBase",
    conKey: "VLineBase",
    title: "线形-基础",
    cateType: ChatTypeEnum.LINE,
    cateTypeName: ChatTypeEnumName.LINE,
    package: PackagesCategoryEnum.CHARTS,
    chartFrame: ChartSourceEnum.ECHARTS,
    image: "line.png",
};
