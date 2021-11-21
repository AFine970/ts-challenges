/*
 * @Date: 2021-11-21 21:01:42
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-21 21:05:03
 * @Description: 实现Array.push
 */

type Push<T extends unknown[], U> = [...T, U]

// test 
type Result1 = Push<[1, 2], '3'> // [1, 2, '3']
