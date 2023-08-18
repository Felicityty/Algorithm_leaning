/*
 * @Author: Felicity💪
 * @Date: 2023-08-18 15:03:57
 * @LastEditTime: 2023-08-18 15:39:06
 */

// 手写实现Promise.resolve 和 Promise.reject
const promise1 = Promise.resolve(123)
console.log('promise1', promise1)

Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      // 如果参数是一个Promise，就返回这个Promise的结果 【链式调用的感觉】
      return value.then(resolve, reject)
    } else {
      return resolve(value)
    }
  })
}

const promise2 = Promise.resolve(123)
console.log('promise2', promise2)

// -----------------------------------------------------

const promise3 = Promise.reject(456)
console.log('promise3', promise3)

Promise.reject = function (value) {
  return new Promise((resolve, reject) => {
    return reject(value)
  })
}

const promise4 = Promise.reject(456)
console.log('promise4', promise4)
