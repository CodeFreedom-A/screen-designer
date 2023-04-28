/*
 * @Author: sunheng
 * @Date: 2023-04-28 14:41:43
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-28 14:42:50
 * @Description: 请填写简介
 */
export const fileToUrl=(file: File):string=>{
    const Url = URL || window.URL || window.webkitURL
    let imgURL= Url.createObjectURL(file)
    return imgURL

}
