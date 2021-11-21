/*
 * @Date: 2021-11-17 20:31:34
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-17 20:40:55
 * @Description: 43实现内置函数Exclude
 */

interface Todo  {
    name: string,
    content: string
}

interface Todo2 {
    name: string
}

type test43 = Exclude<Todo, Todo2>

type MyExclude<T, U> = T extends U ? never : T

type test43_ = MyExclude<Todo, Todo2>