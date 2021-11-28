/*
 * @Date: 2021-11-28 12:08:28
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-28 12:22:08
 * @Description: 不使用 Omit 实现 TypeScript 的 Omit<T, K> 范型
 */

interface Todo3 {
  title: string;
  description: string;
  completed: boolean;
}

type MyOmit<T, U extends string | number | symbol> = {
  [P in Exclude<keyof T, U>]: T[P];
};

type TodoPreview = Omit<Todo3, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
