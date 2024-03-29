/*
 * @Author: sunheng
 * @Date: 2023-04-13 11:05:28
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-28 17:04:17
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
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};
export default class Config extends ChartDeafultCofig implements ChartOptionType {
    public key = PieCommonConfig.key;
    public chartConfig = PieCommonConfig;
    public option = cloneDeep(option);
}
