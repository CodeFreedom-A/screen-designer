/*
 * @Author: sunheng
 * @Date: 2023-04-03 11:09:12
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-05 23:02:56
 * @Description: 请填写简介
 */
import * as echarts from 'echarts';
const weigetChartList: Array<object> = [
    {
        type: "饼图",
        name: "饼图",
        width: "300",
        height: "300",
        config: {
            title: {
                text: "Traffic Sources",
                left: "center",
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)",
            },
            legend: {
                orient: "vertical",
                left: "left",
                data: [
                    "Direct",
                    "Email",
                    "Ad Networks",
                    "Video Ads",
                    "Search Engines",
                ],
            },
            series: [
                {
                    name: "Traffic Sources",
                    type: "pie",
                    radius: "55%",
                    center: ["50%", "60%"],
                    data: [
                        { value: 335, name: "Direct" },
                        { value: 310, name: "Email" },
                        { value: 234, name: "Ad Networks" },
                        { value: 135, name: "Video Ads" },
                        { value: 1548, name: "Search Engines" },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)",
                        },
                    },
                },
            ],
        },
    },
    {
        type: "折线图",
        name: "折线图",
        width: "400",
        height: "300",
        config: {
            xAxis: {
                type: "category",
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: "line",
                },
            ],
        },
    },
    {
        type: "热力图",
        name: "热力图",
        width: "400",
        height: "300",
        config: {
            color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
            title: {
                text: "Gradient Stacked Area Chart",
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "cross",
                    label: {
                        backgroundColor: "#6a7985",
                    },
                },
            },
            legend: {
                data: ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"],
            },
            toolbox: {
                feature: {
                    saveAsImage: {},
                },
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true,
            },
            xAxis: [
                {
                    type: "category",
                    boundaryGap: false,
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                },
            ],
            yAxis: [
                {
                    type: "value",
                },
            ],
            series: [
                {
                    name: "Line 1",
                    type: "line",
                    stack: "Total",
                    smooth: true,
                    lineStyle: {
                        width: 0,
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: "rgb(128, 255, 165)",
                            },
                            {
                                offset: 1,
                                color: "rgb(1, 191, 236)",
                            },
                        ]),
                    },
                    emphasis: {
                        focus: "series",
                    },
                    data: [140, 232, 101, 264, 90, 340, 250],
                },
                {
                    name: "Line 2",
                    type: "line",
                    stack: "Total",
                    smooth: true,
                    lineStyle: {
                        width: 0,
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: "rgb(0, 221, 255)",
                            },
                            {
                                offset: 1,
                                color: "rgb(77, 119, 255)",
                            },
                        ]),
                    },
                    emphasis: {
                        focus: "series",
                    },
                    data: [120, 282, 111, 234, 220, 340, 310],
                },
                {
                    name: "Line 3",
                    type: "line",
                    stack: "Total",
                    smooth: true,
                    lineStyle: {
                        width: 0,
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: "rgb(55, 162, 255)",
                            },
                            {
                                offset: 1,
                                color: "rgb(116, 21, 219)",
                            },
                        ]),
                    },
                    emphasis: {
                        focus: "series",
                    },
                    data: [320, 132, 201, 334, 190, 130, 220],
                },
                {
                    name: "Line 4",
                    type: "line",
                    stack: "Total",
                    smooth: true,
                    lineStyle: {
                        width: 0,
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: "rgb(255, 0, 135)",
                            },
                            {
                                offset: 1,
                                color: "rgb(135, 0, 157)",
                            },
                        ]),
                    },
                    emphasis: {
                        focus: "series",
                    },
                    data: [220, 402, 231, 134, 190, 230, 120],
                },
                {
                    name: "Line 5",
                    type: "line",
                    stack: "Total",
                    smooth: true,
                    lineStyle: {
                        width: 0,
                    },
                    showSymbol: false,
                    label: {
                        show: true,
                        position: "top",
                    },
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: "rgb(255, 191, 0)",
                            },
                            {
                                offset: 1,
                                color: "rgb(224, 62, 76)",
                            },
                        ]),
                    },
                    emphasis: {
                        focus: "series",
                    },
                    data: [220, 302, 181, 234, 210, 290, 150],
                },
            ],
        },
    },
];
export { weigetChartList };
