/*
 * @Author: sunheng
 * @Date: 2023-04-27 18:08:43
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-28 16:21:02
 * @Description: 请填写简介
 */
export enum PageConfiogEnum {
    WIDTH = "width",
    HEIGHT = "height",
    IMGURL = "imgurl",
    COLOR = "color",
    BACKTYPE = "backType",
}
export interface PageConfiogType {
    [PageConfiogEnum.WIDTH]: number;
    [PageConfiogEnum.HEIGHT]: number;
    [PageConfiogEnum.IMGURL]: string;
    [PageConfiogEnum.COLOR]: string;
    [PageConfiogEnum.BACKTYPE]: number;
}
