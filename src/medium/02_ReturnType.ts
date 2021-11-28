/*
 * @Date: 2021-11-28 11:55:54
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-28 12:07:41
 * @Description: 02不使用 ReturnType 实现 TypeScript 的 ReturnType<T> 范型。
 */

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

// 仅条件类型的 "extends" 子句中才允许 "infer" 声明
// type h = infer R;

type MyReturnType<T extends (...args: any) => any> = T extends (...args: []) => infer R ? R : never 

type a = MyReturnType<typeof fn>; // 应推导出 "1 | 2"
