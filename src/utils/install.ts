/*
 * @Author: sunheng
 * @Date: 2023-04-12 16:09:05
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-26 15:14:50
 * @Description: 请填写简介
 */
 
export const componentInstall=<T>(key:string,node:T)=>{
    
    if(!window['$vue'].component(key) && node){
        window['$vue'].component(key,node.default)
        
    }
}
