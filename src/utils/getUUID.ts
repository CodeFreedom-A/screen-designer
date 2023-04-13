/*
 * @Author: sunheng
 * @Date: 2023-04-13 13:57:13
 * @LastEditors: sunheng
 * @LastEditTime: 2023-04-13 13:57:18
 * @Description: 请填写简介
 */
export const getUUID = (randomLength = 10) => {
  return Number(Math.random().toString().substring(2, randomLength) + Date.now()).toString(36)
}