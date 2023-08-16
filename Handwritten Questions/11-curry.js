/*
 * @Author: Felicity💪
 * @Date: 2023-08-16 16:45:25
 * @LastEditTime: 2023-08-16 17:41:13
 */

// 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
// 👉 通俗易懂的解释：接收一部分参数，返回一个函数接收剩余参数，接收足够参数后，执行原函数

// function curry(func) {
//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       }
//     }
//   };
// }

// 1 用apply改变this指向，apply后面是一个参数数组
function curry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn.apply(this, args)
  } else {
    return (...args2) => curry.apply(this, [fn, ...args, ...args2])
  }
}

// 2 最简洁的版本
function currying(fn, ...args) {
  if (args.length >= fn.length) {
    // 收集结束 执行原函数
    // 原来Function都能用上length啊
    // console.log('args', args)
    return fn(...args)
  } else {
    return (...args2) => {
      // console.log('args2', args2)
      return currying(fn, ...args, ...args2)
    }
  }
}

function sum(a, b, c) {
  return a + b + c
}

let curryingSum = curry(sum)
console.log('res1', curryingSum(1)(2)(3))
console.log('res2', curryingSum(1)(2, 3))
console.log('res3', curryingSum(1, 2, 3))