/*
 * @Date: 2021-11-21 21:12:35
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-21 21:35:46
 * @Description: 实现内置的 Parameters 类型
 */

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer U) => any ? [...U] : never

// test
type T1 = Parameters<(s: string) => void> // expect [s: string]

type T2 = MyParameters<(s: string) => void>