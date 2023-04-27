/*
 * @Author: sunheng
 * @Date: 2023-04-12 16:25:00
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-26 15:15:25
 * @Description: 请填写简介
 */
import { ConfigType } from "./index.d";

// 图表
const indexModules = import.meta.globEager("./com/chartList/**/index.vue");
// 右侧图
const ImgModules = import.meta.globEager("../assets/charts/**");

export const fetchComponent = (componentName: string, type: string) => {
    const module = indexModules;
    for (const key in module) {
        const urlSplit = key.split("/");
        if (urlSplit[urlSplit.length - 2] === componentName) {
            return module[key];
        }
    }
};
// 获取图片
export const fetchImages = async (targetData?: ConfigType) => {
    if (!targetData) return "";
    // 新数据动态处理
    const { image } = targetData;
    for (const key in ImgModules) {
        const urlSplit = key.split("/");

        if (urlSplit[urlSplit.length - 1] === image) {
            return ImgModules[key]?.default;
        }
    }
};
// 拿到类型和key
export const getChartDom = (dropData: ConfigType) => {
    const { key } = dropData;
    return fetchComponent(key, "chart");
};

//去拿图表的config
export const createComponent = async (dropData: ConfigType) => {
    let { key, cateType } = dropData;
    const chart = await import(
        `./com/${dropData.package}/${cateType}/${key}/config.ts`
    );

    return new chart.default();
};
