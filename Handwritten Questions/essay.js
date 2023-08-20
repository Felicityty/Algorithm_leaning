/*
 * @Author: Felicity💪
 * @Date: 2023-08-20 20:13:05
 * @LastEditTime: 2023-08-20 21:51:21
 */
// 想到啥就写点儿

// 2023.8.20
// 手写Symbol ✅
function mySymbol(obj) {
  let unique = (Math.random() + new Date().getTime()).toString(32).slice(0, 8)
  if (obj.hasOwnProperty(unique)) {
    return mySymbol(unique)
  } else {
    return unique
  }
}

// ----------------------------------------------------------------------

/* 
  基础数据类型：string number boolean symbol null undefined bigint
  引用数据类型：object array function
*/

// ----------------------------------------------------------------------

// 跨快访问
// {
//   var i = 0
// }
// console.log('i', i)

// ----------------------------------------------------------------------

// 暂时性死区
// console.log(a)
// let a

// ----------------------------------------------------------------------

// 柯里化来一下

function sum(a, b, c) {
  return a + b + c
}

function curry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn.apply(this, args)
  } else {
    return function (...args2) {
      return curry.apply(this, [fn, ...args, ...args2])
    }
  }
}

const currySum = curry(sum)

// console.log(currySum(1, 2, 3))
