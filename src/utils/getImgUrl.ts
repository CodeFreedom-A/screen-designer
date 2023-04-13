/*
 * @Author: sunheng
 * @Date: 2023-03-31 17:29:09
 * @LastEditors: sunheng
 * @LastEditTime: 2023-03-31 17:44:16
 * @Description: 请填写简介
 */
 interface IGetsrc {
    (name: string, folder: string): string;
}
export const GetImgSrc: IGetsrc = (name: string, folder: string) => {
    return new URL(`../assets/${folder}/${name}.png`, import.meta.url).href;
};
