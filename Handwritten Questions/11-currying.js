/*
 * @Author: Felicity💪
 * @Date: 2023-08-17 17:00:41
 * @LastEditTime: 2023-08-17 18:04:57
 */
// 柯里化 利用闭包存储参数 数量足够后执行原函数

function currying(fn, ...args) {
  console.log('------------------')
  console.log('args', args)
  if (args.length >= fn.length) {
    return fn.apply(this, args)
  } else {
    return function (...args2) {
      console.log('args2', args2)
      return currying.apply(this, [fn, ...args, ...args2])
    }
  }
}

function sum(a, b, c) {
  return a + b + c
}

let curryingSum = currying(sum)

console.log(curryingSum(1)(2, 3))