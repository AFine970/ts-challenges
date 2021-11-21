/*
 * @Date: 2021-11-21 21:05:33
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-21 21:11:42
 * @Description: 实现Array.unshift
 */

type Unshift<T extends unknown[], U> = [U, ...T]

// test
type Result2 = Unshift<[1, 2], 0> // [0, 1, 2]
