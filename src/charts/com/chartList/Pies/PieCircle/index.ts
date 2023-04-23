/*
 * @Author: sunheng
 * @Date: 2023-04-11 11:43:29
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-23 14:02:23
 * @Description: 请填写简介
 */
import {ConfigType,PackagesCategoryEnum,ChartSourceEnum} from "@/charts/index.d"
import {ChatTypeEnumName,ChatTypeEnum} from "@/charts/com/index.d"
export const PieCircleConfig: ConfigType = {
  key: 'PieCircle',
  chartKey: 'VPieCircle',
  conKey: 'VCPieCircle',
  title: '饼图-环形',
  cateType: ChatTypeEnum.PIE,
  cateTypeName: ChatTypeEnumName.PIE,
  package: PackagesCategoryEnum.CHARTS,
  chartFrame: ChartSourceEnum.ECHARTS,
  image: 'pie-circle.png'
}
