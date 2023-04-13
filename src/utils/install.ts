/*
 * @Author: sunheng
 * @Date: 2023-04-12 16:09:05
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-12 18:21:56
 * @Description: 请填写简介
 */
 
export const componentInstall=<T>(key:string,node:T)=>{
    console.log(node,'default');
    
    if(!window['$vue'].component(key) && node){
        window['$vue'].component(key,node.default)
        
    }
}
