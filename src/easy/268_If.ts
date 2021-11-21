/*
 * @Date: 2021-11-21 20:31:09
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-21 20:36:08
 * @Description: 268 实现if
 */

type If<C extends boolean, T extends any, F extends any> = C extends true ? T : F;

// test
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'