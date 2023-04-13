/*
 * @Author: sunheng
 * @Date: 2023-04-11 11:43:29
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-13 17:27:48
 * @Description: 请填写简介
 */
import {ConfigType,PackagesCategoryEnum,ChartSourceEnum} from "@/charts/index.d"
import {ChatTypeEnumName,ChatTypeEnum} from "@/charts/com/index.d"
export const PieCommonConfig: ConfigType = {
  key: 'PieCommon',
  chartKey: 'VPieCommon',
  conKey: 'VCPieCommon',
  title: '饼图-基础',
  cateType: ChatTypeEnum.PIE,
  cateTypeName: ChatTypeEnumName.PIE,
  package: PackagesCategoryEnum.CHARTS,
  chartFrame: ChartSourceEnum.ECHARTS,
  image: 'pie.png'
}
