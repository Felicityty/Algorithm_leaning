/*
 * @Author: Felicity💪
 * @Date: 2023-10-09 22:32:02
 * @LastEditTime: 2023-10-09 22:37:03
 */

var a = ['1', '3', '你好']
var b = ['3', '你好', '1']
// var b = ['3', 'hello', '1']

let res = a.length === b.length && a.reduce((pre, cur) => {
  if (!b.includes(cur)) pre = false
  return pre
}, true)
console.log(res)