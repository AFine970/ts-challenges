/*
 * @Date: 2021-11-17 20:48:45
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-17 21:03:59
 * @Description: 实现Awaited,获取Promise<T>中描述的类型
 */

const promise: Promise<boolean> = Promise.resolve(true)

type Awaited<T extends Promise<any>> = T extends Promise<infer R> ? R : never

// test
type promise1 = Awaited<typeof promise>