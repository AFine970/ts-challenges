/*
 * @Date: 2021-11-28 12:24:35
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-28 12:37:39
 * @Description: 实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K。
 * K指定应设置为Readonly的T的属性集。如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样
 */

interface Todo8 {
  title: string;
  description: string;
  completed: boolean;
}

type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> &
  Omit<T, K>;

const todo8: MyReadonly2<Todo8, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo8.title = "Hello"; // Error: cannot reassign a readonly property
todo8.description = "barFoo"; // Error: cannot reassign a readonly property
todo8.completed = true; // OK
