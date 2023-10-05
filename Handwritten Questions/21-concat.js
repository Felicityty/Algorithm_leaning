/*
 * @Author: Felicity💪
 * @Date: 2023-08-23 15:41:35
 * @LastEditTime: 2023-10-05 17:37:43
 */

// 只要转换一层
Array.prototype.myConcat = function () {
  let arr = [...this]
  arguments = [...arguments] // 类数组转换为数组
  arguments.forEach(argument => Array.isArray(argument) ? argument.forEach(item => arr.push(item)) : arr.push(argument))
  return arr
}

const newArr = [1, 2].myConcat([1, 2], [4, 5, 9], 7, 5, 6)
console.log('newArr', newArr)