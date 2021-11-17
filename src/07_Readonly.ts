/*
 * @Date: 2021-11-16 23:31:04
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-17 20:21:57
 * @Description: 07实现Readonly
 */

interface Todo {
    title: string,
    content: string
}

// type test = Readonly<Todo>

type MyReadonly<T> = {readonly [P in keyof T]: T[P]}

type test7 = MyReadonly<Todo>

const haha: test7 = {
    title: '笔记',
    content: '学习TS'
}

// test
haha.title = '修改笔记'
