/*
 * @Author: sunheng
 * @Date: 2023-03-26 13:38:52
 * @LastEditors: sunheng
 * @LastEditTime: 2023-03-26 13:42:42
 * @Description: 请填写简介
 */
import { SketchRule } from 'vue3-sketch-ruler'
import type { App } from 'vue'

export const InjectComponents=(app:App)=>{
    app.component("SketchRule",SketchRule)
}
