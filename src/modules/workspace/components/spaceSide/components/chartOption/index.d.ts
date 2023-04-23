/*
 * @Author: sunheng
 * @Date: 2023-04-11 17:57:21
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-23 14:52:40
 * @Description: 请填写简介
 */
import { ChatTypeEnum } from "@/charts/com/index.d";
const MenuOptionInfo = {
    [ChatTypeEnum.PIE]: {
        label: "饼图",
    },
    [ChatTypeEnum.LINE]: {
        label: "折线",
    },
};
export { MenuOptionInfo };
