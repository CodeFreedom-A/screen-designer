/*
 * @Author: sunheng
 * @Date: 2023-04-13 11:05:28
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-13 14:28:26
 * @Description: 请填写简介
 */
import { ChartOptionType, ConfigType } from "@/charts/index.d";
import cloneDeep from "lodash/cloneDeep";
import { PieCircleConfig } from "./index";
import { ChartDeafultCofig } from "@/charts/com/index";

const option = {
    tooltip: {
        show: true,
        trigger: "item",
    },
    legend: {
        show: true,
    },
    dataset: 0.25,
    title: {
        text: 25 + "%",
        x: "center",
        y: "center",
        textStyle: {
            color: "#56B9F8",
            fontSize: 30,
        },
    },
    series: [
        {
            type: "pie",
            radius: ["75%", "80%"],
            center: ["50%", "50%"],
            hoverAnimation: true,
            color: ["#00bcd44a", "transparent"],
            label: {
                show: false,
            },
            data: [
                {
                    value: [25],
                    itemStyle: {
                        color: "#03a9f4",
                        shadowBlur: 10,
                        shadowColor: "#97e2f5",
                    },
                },
                {
                    value: [75],
                    itemStyle: {
                        color: "#00bcd44a",
                        shadowBlur: 0,
                        shadowColor: "#00bcd44a",
                    },
                },
            ],
        },
    ],
};
export default class Config extends ChartDeafultCofig implements ChartOptionType {
    public key = PieCircleConfig.key;
    public chartConfig = PieCircleConfig;
    public option = cloneDeep(option);
}
