/*
 * @Date: 2021-11-28 13:56:03
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-28 14:12:43
 * @Description: 键入函数PromiseAll，它接受PromiseLike对象数组，返回值应为Promise<T>，其中T是解析的结果数组。
 */

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

// expected to be `Promise<[number, number, string]>`
const p = Promise.all([promise1, promise2, promise3] as const);

type test20 = typeof p;

declare function PromiseAll<T extends any[]>(
  params: T
): Promise<{ [Index in keyof T]: Awaited<T[Index]> }>;
