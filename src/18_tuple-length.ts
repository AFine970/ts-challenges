/*
 * @Date: 2021-11-17 20:23:19
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-17 20:28:13
 * @Description: 获取元祖长度
 */

const cars = ["长安", "长城"] as const;

type Length<T extends readonly any[]> = T['length'] extends number ? T['length'] : -1

type test18 = Length<typeof cars>