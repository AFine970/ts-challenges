/*
 * @Date: 2021-11-16 23:07:52
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-16 23:15:00
 * @Description: 04实现Pick
 */

type MyPick<T, K extends keyof T > = { [P in K]: T[P] } 

// test

interface Person {
    age: number,
    name: string
}

type Person1 = MyPick<Person, 'age'>

type Person2 = Pick<Person, 'age'>