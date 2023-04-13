/*
 * @Author: sunheng
 * @Date: 2023-04-13 11:05:28
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-13 17:34:33
 * @Description: 请填写简介
 */
import { ChartOptionType, ConfigType } from "@/charts/index.d";
import cloneDeep from "lodash/cloneDeep";
import { PieCommonConfig } from "./index";
import { ChartDeafultCofig } from "@/charts/com/index";
import dataJson from "./data.json"
export enum PieTypeEnum {
  NORMAL = '常规图',
  RING = '环形图',
  ROSE = '玫瑰图'
}

export const PieTypeObject = {
  [PieTypeEnum.NORMAL]: 'nomal',
  [PieTypeEnum.RING]: 'ring',
  [PieTypeEnum.ROSE]: 'rose'
}

const option = {
  type: 'ring',
  tooltip: {
    show: true,
    trigger: 'item'
  },
  legend: {
    show: true
  },
  dataset: { ...dataJson },
  series: [
    {
      type: 'pie',
      radius: ['40%', '65%'],
      center: ['50%', '60%'],
      roseType: false,
      avoidLabelOverlap: false,
      itemStyle: {
        show: true,
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center',
        formatter: '{b}',
        fontSize:12
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      }
    }
  ]
}
export default class Config extends ChartDeafultCofig implements ChartOptionType {
    public key = PieCommonConfig.key;
    public chartConfig = PieCommonConfig;
    public option = cloneDeep(option);
}
