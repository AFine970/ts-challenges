/*
 * @Date: 2021-11-28 13:51:04
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-28 13:52:17
 * @Description: 实现一个通用Pop<T>，它接受一个数组T并返回一个没有最后一个元素的数组
 */

type arr16 = ['a', 'b', 'c', 'd']
type arr162 = [3, 2, 1]

type Pop<T extends any[]> = T extends [...infer A, infer B] ? A : never;

type re1 = Pop<arr16> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr162> // expected to be [3, 2]
