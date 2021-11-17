/*
 * @Date: 2021-11-17 20:05:35
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-17 20:20:58
 * @Description: 14 返回数组第一个元素的类型
 */

type arr1 = ['1', '2']
type arr2 = [3, 4]

type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// test
type test14 = First<arr1>

type test15 = First<arr2>