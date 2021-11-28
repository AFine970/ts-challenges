/*
 * @Date: 2021-11-28 13:09:40
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-28 13:38:54
 * @Description: 12可串联（Chainable/Pipeline）的函数构造一个对象，在 TypeScript 中合理的给他附上类型
 */

declare const config: Chainable;

const result12 = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

type test = typeof result12

// 期望 result 的类型是：
interface Result12 {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}

// class Chainable {
//   constructor() {
//     const obj = {};
//     this.obj = obj;
//   }

//   options(key: string, value: any) {
//     this.obj[key] = value;
//     return this;
//   }

//   get() {
//     return this.obj;
//   }
// }

type Chainable<T = {}> = {
    option<K extends string, V>(key: K, value: V): Chainable<T & {[key in K]: V}>,
    get(): T
}
