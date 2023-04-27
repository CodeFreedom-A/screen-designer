/*
 * @Author: sunheng
 * @Date: 2023-04-26 17:26:54
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-27 11:29:25
 * @Description: 请填写简介
 */

import { getCurrentInstance, ComponentInternalInstance } from "vue";

export const getProxy = (): Object | null => {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance;

    return proxy;
};
export const onContextMenu = (e: MouseEvent, proxy: Object | null) => {
    e.preventDefault();
    // @ts-ignore
    proxy!.$contextmenu({
        theme: "mac dark",
        x: e.x,
        y: e.y,
        items: [
            {
                icon: "icon-zhiding-04-04-copy",
                label: "置 顶",
                onClick: () => {
                    console.log(1231);
                },
            },
            {
                icon: "icon-zhiding-04-04-copy-copy",
                label: "置 底",
                onClick: () => {
                    console.log(1231);
                },
            },
            {
                icon: "icon-fuzhi",
                label: "复 制",
                onClick: () => {
                    console.log(1231);
                },
            },
            {
                icon: "icon-niantie",
                label: "粘 贴",
                onClick: () => {
                    console.log(1231);
                },
            },
            {
                icon: "icon-jianqiewenjian",
                label: "剪 切",
                onClick: () => {
                    console.log(1231);
                },
            },
            {
                icon: "icon-shangyi",
                label: "上 移",
                onClick: () => {
                    console.log(1231);
                },
            },
            {
                icon: "icon-xiayi",
                label: "下 移",
                onClick: () => {
                    console.log(1231);
                },
            },
            {
                icon: "icon-shanchu",
                label: "删 除",
                onClick: () => {
                    console.log(1231);
                },
            },
            {
                icon: "icon-yincangbukejian",
                label: "隐 藏",
                onClick: () => {
                    console.log(1231);
                },
            },
            {
                icon: "icon-suoding",
                label: "锁 定",
                onClick: () => {
                    console.log(1231);
                },
            },
            {
                icon: "icon-qingkong",
                label: "清空画布",
                onClick: () => {
                    console.log(1231);
                },
            },
        ],
    });
};
