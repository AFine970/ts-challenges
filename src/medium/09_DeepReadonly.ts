/*
 * @Date: 2021-11-28 12:40:29
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-28 12:56:04
 * @Description: 实现一个通用的DeepReadonly<T>,它将对象的每个参数及其子对象递归地设为只读
 */

type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

// ts 循环语句 [K in keyof T]: T[K]

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type todo9 = DeepReadonly<X>; // should be same as `Expected`
