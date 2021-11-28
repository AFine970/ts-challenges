/*
 * @Date: 2021-11-28 12:40:29
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-28 13:07:12
 * @Description: 实现泛型TupleToUnion<T>，它覆盖元组的值与其值联合。
 */

type Arr = ["1", "2", "3"];

// ts 数组循环语句 K in T[number]

type TupleToUnion<T extends unknown[]> = T extends [infer K, ...infer P]
  ? K | TupleToUnion<P>
  : never;

type aaa = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
