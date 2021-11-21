/*
 * @Date: 2021-11-21 20:41:19
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-21 20:50:44
 * @Description: 实现Array.includes
 */

type Includes<T extends any[], U> = T extends [infer K, ...infer R] ? (Equal<U, K> extends true ? true : Includes<R, U>) : false 

// test
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
