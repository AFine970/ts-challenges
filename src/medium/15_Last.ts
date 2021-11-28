/*
 * @Date: 2021-11-28 13:41:05
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-28 13:44:35
 * @Description: 实现一个通用Last<T>，它接受一个数组T并返回其最后一个元素的类型
 */

type arr15 = ['a', 'b', 'c']
type arr25 = [3, 2, 1]

type tail1 = Last<arr15> // expected to be 'c'
type tail2 = Last<arr25> // expected to be 1

type Last<T extends any[]> = T extends [...infer A, infer B] ? B : never;