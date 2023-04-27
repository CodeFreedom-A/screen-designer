/*
 * @Author: sunheng
 * @Date: 2023-04-27 17:37:54
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-27 17:45:01
 * @Description: 请填写简介
 */
import { defineAsyncComponent, AsyncComponentLoader } from "vue";

export const loadAsyncComponent = (loader: AsyncComponentLoader<any>) =>
    defineAsyncComponent({
        loader,
        delay: 20,
    });
