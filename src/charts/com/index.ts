/*
 * @Author: sunheng
 * @Date: 2023-04-13 14:21:00
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-13 14:23:44
 * @Description: 请填写简介
 */
import { getUUID } from "@/utils";
import { chartInitConfig } from "./public/index";
export class ChartDeafultCofig {
    public id = getUUID();
    public attr = { ...chartInitConfig, zIndex: -1 };
}
