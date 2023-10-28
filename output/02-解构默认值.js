/*
 * @Author: Felicity💪
 * @Date: 2023-10-28 20:50:03
 * @LastEditTime: 2023-10-28 20:50:07
 */

const demo = { a: null }
const { a = '', b } = demo

console.log('a', a) // null
console.log('b', b) // undefined