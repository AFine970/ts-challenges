/*
 * @Date: 2021-11-17 19:54:15
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-17 20:14:14
 * @Description: 11元组转换为对象
 */

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type TupleToObject<T extends readonly any[]> = {[P in T[number]]: P}

// test
const result: TupleToObject<typeof tuple> =  { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

