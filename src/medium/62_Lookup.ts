/*
 * @Date: 2021-11-28 14:15:24
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-28 14:22:13
 * @Description: 62实现LookUp，根据type属性在并集中查找类型
 */
interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type MyDog = LookUp<Cat | Dog, "dog">; // expected to be `Dog`

type LookUp<T, K> = T extends { type: string }
  ? K extends T["type"]
    ? T
    : never
  : never;
