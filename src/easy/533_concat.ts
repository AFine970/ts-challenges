/*
 * @Date: 2021-11-21 20:36:42
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-21 20:40:28
 * @Description: 实现Array.concat
 */

type Concat<T extends any[], K extends any[]> = [...T, ...K]

// test 
type Result = Concat<[1], [2]> // expected to be [1, 2]