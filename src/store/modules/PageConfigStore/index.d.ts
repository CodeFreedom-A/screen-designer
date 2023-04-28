/*
 * @Author: sunheng
 * @Date: 2023-04-27 18:08:43
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-28 15:02:42
 * @Description: 请填写简介
 */
export enum PageConfiogEnum {
    WIDTH = "width",
    HEIGHT = "height",
    imgURL = "imgurl",
}
export interface PageConfiogType {
    [PageConfiogEnum.WIDTH]: number;
    [PageConfiogEnum.HEIGHT]: number;
    [PageConfiogEnum.imgURL]: string;
}
