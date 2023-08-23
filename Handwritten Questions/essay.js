/*
 * @Author: Felicity💪
 * @Date: 2023-08-20 20:13:05
 * @LastEditTime: 2023-08-23 15:09:53
 */
// 想到啥就写点儿

// 2023.8.20
// 手写Symbol ✅
// function mySymbol(obj) {
//   let unique = (Math.random() + new Date().getTime()).toString(32).slice(0, 8)
//   if (obj.hasOwnProperty(unique)) {
//     return mySymbol(unique)
//   } else {
//     return unique
//   }
// }

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

// function sum(a, b, c) {
//   return a + b + c
// }

// function curry(fn, ...args) {
//   if (args.length >= fn.length) {
//     return fn.apply(this, args)
//   } else {
//     return function (...args2) {
//       return curry.apply(this, [fn, ...args, ...args2])
//     }
//   }
// }

// const currySum = curry(sum)

// console.log(currySum(1, 2, 3))

// ----------------------------------------------------------------------

// call apply bind
// bind 忘光光咯🥺

// const Person1 = {
//   name: 'aa',
//   sayHi: function () {
//     console.log(`I am ${this.name}`)
//   }
// }

// const Person2 = {
//   name: 'bb'
// }

// // Person1.sayHi.call(Person2)

// Function.prototype.myCall = function (context = window, ...args) {
//   if (this === Function.prototype) {
//     return undefined
//   }
//   let fn = Symbol()
//   context[fn] = this
//   const result = context[fn](...args)
//   delete context[fn]
//   return result
// }

// Person1.sayHi.myCall(Person2, 1, 2)

// Function.prototype.myApply = function (context = window, args = []) {
//   if (this === Function.prototype) {
//     return undefined
//   }
//   let fn = Symbol()
//   context[fn] = this
//   let result
//   // o 这样写就说明参数得是个数组，否则无效
//   if (Array.isArray(args)) {
//     result = context[fn](...args)
//   } else {
//     result = context[fn]()
//   }
//   delete context[fn]
//   return result
// }

// Person1.sayHi.myApply(Person2, [1, 2])

// Function.prototype.myBind = function (context = window, ...args) {
//   if (this === Function.prototype) {
//     return undefined
//   }
//   const _this = this
//   return function F(...args2) {
//     if (this instanceof F) {
//       return new _this(...args, ...args2)
//     } else {
//       return _this.apply(context, args.concat(args2))
//     }
//   }
// }

// const bindFunc2 = Person1.sayHi.myBind(Person2, 1, 2)

// bindFunc2()

// ----------------------------------------------------------------------

// promise

// Promise.resolve = function (value) {
//   return new Promise((resolve, reject) => {
//     // console.log(resolve, reject)
//     if (value instanceof Promise) {
//       return value.then(resolve, reject)
//     } else {
//       return resolve(value)
//     }
//   })
// }

// const promise1 = Promise.resolve(123)
// console.log('promise1', promise1)

// Promise.reject = function (reason) {
//   return new Promise((resolve, reject) => {
//     reject(reason)
//   })
// }

// const promise2 = Promise.reject(123)
// console.log('promise2', promise2)

// ----------------------------------------------------------------------

// Promise.prototype.catch = function (onRejected) {
//   return this.then(null, onRejected)
// }

// Promise.prototype.finally = function (onFinally) {
//   return this.then(onFinally, onFinally)
// }

// ----------------------------------------------------------------------

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'foo')
// })
// const promise4 = Promise.resolve(1213)
// const promise5 = 42

// Promise.all([promise3, promise4, promise5]).then((values) => {
//   console.log(values)
// })

// Promise.all = function (promises) {
//   let res = [], count = 0
//   return new Promise((resolve, reject) => {
//     if (promises.length === 0) {
//       resolve(fulfilled)
//     } else {
//       promises.forEach((promise, index) => {
//         Promise.resolve(promise).then(
//           value => {
//             count++
//             res[index] = value
//             if (count === promises.length) {
//               resolve(res)
//             }
//           },
//           reason => {
//             reject(reason)
//           }
//         )
//       })
//     }
//   })
// }

// Promise.allSettled = function (promises) {
//   let res = [], count = 0
//   return new Promise((resolve, reject) => {
//     promises.forEach((promise, index) => {
//       Promise.resolve(promise).then(
//         value => {
//           count++
//           res[index] = {
//             status: 'fulfilled',
//             value
//           }
//           if (count === promises.length) {
//             resolve(res)
//           }
//         },
//         reason => {
//           count++
//           res[index] = {
//             status: 'rejected',
//             reason
//           }
//           if (count === promises.length) {
//             reject(res)
//           }
//         }
//       )
//     })
//   })
// }

// Promise.race = function (promises) {
//   return new Promise((resolve, reject) => {
//     promises.forEach(promise => {
//       Promise.resolve(promise).then(
//         value => {
//           resolve(value)
//         },
//         reason => {
//           reject(reason)
//         }
//       )
//     })
//   })
// }

// Promise.race([promise4, promise5]).then((value) => {
//   console.log('222', value)
// })

// ----------------------------------------------------------------------

// 2023.8.23

// const arr = [3, 4, 2, 5, 1, 2]

// 快排
// function quickSort(arr, left, right) {
//   if (left >= right) {
//     return
//   }
//   let l = left, r = right, target = arr[l]
//   while (l < r) {
//     while (l < r && arr[r] >= target) {
//       r--
//     }
//     arr[l] = arr[r]
//     while (l < r && arr[l] < target) {
//       l++
//     }
//     arr[r] = arr[l]
//   }
//   arr[l] = target
//   quickSort(arr, left, l - 1)
//   quickSort(arr, l + 1, right)
//   return arr
// }

// console.log('quickSort', quickSort(arr, 0, 5))

// 堆排序
// function heapSort(arr) {
//   createHeap(arr)
//   for (let i = arr.length - 1; i > 0; i--) {
//     [arr[0], arr[i]] = [arr[i], arr[0]]
//     adjustFunc(arr, 0, i)
//   }
//   return arr
// }

// function createHeap(arr) {
//   let start = Math.floor(arr.length / 2) - 1
//   for (let i = start; i >= 0; i--) {
//     adjustFunc(arr, i, arr.length)
//   }
// }

// function adjustFunc(arr, targetIndex, len) {
//   for (let i = targetIndex * 2 + 1; i < len; i = i * 2 + 1) {
//     if (i + 1 < len && arr[i + 1] > arr[i]) {
//       i++
//     }
//     if (arr[i] > arr[targetIndex]) {
//       [arr[i], arr[targetIndex]] = [arr[targetIndex], arr[i]]
//       targetIndex = i
//     } else {
//       break
//     }
//   }
// }

// console.log('heapSort', heapSort(arr))

// ----------------------------------------------------------------------

// promise - all allSettled race

// all 并行处理 聚合结果 快速失败

// const promise1 = Promise.resolve(123)
// const promise2 = 23
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(reject, 1000, 'foo')
// })

// Promise.all([promise1, promise2, promise3]).then(values => {
//   console.log('all', values)
// })

// Promise.all = function (promises) {
//   let res = [], count = 0
//   return new Promise((resolve, reject) => {
//     if (promises.length === 0) {
//       resolve(fulfilled)
//     } else {
//       promises.forEach((promise, index) => {
//         Promise.resolve(promise).then(
//           value => {
//             count++
//             res[index] = value
//             if (count === promises.length) {
//               resolve(res)
//             }
//           },
//           reason => {
//             reject(reason)
//           }
//         )
//       })
//     }
//   })
// }

// Promise.all([promise1, promise2, promise3]).then(values => {
//   console.log('all', values)
// })

// Promise.allSettled([promise1, promise2, promise3]).then(values => {
//   console.log('allSettled', values)
// })

// Promise.allSettled = function (promises) {
//   let res = [], count = 0
//   return new Promise((resolve, reject) => {
//     if (promises.length === 0) {
//       resolve(fulfilled)
//     } else {
//       promises.forEach((promise, index) => {
//         Promise.resolve(promise).then(
//           value => {
//             count++
//             res[index] = {
//               status: 'fulfilled',
//               value
//             }
//             if (count === promises.length) {
//               resolve(res)
//             }
//           },
//           reason => {
//             count++
//             res[index] = {
//               status: 'rejected',
//               reason
//             }
//             if (count === promises.length) {
//               resolve(res)
//             }
//           }
//         )
//       })
//     }
//   })
// }

// Promise.allSettled([promise1, promise2, promise3]).then(values => {
//   console.log('allSettled', values)
// })

// Promise.race = function (promises) {
//   return new Promise((resolve, reject) => {
//     promises.forEach(promise => {
//       Promise.resolve(promise).then(
//         value => {
//           resolve(value)
//         },
//         reason => {
//           reject(reason)
//         }
//       )
//     })
//   })
// }

// Promise.race([promise1, promise2, promise3]).then(values => {
//   console.log('race', values)
// })

// 嘿嘿 我觉得这仨莫得问题了

// ----------------------------------------------------------------------

// promisify 试试呗

// const fs = require('fs')

// fs.readFile('./Handwritten Questions/02-call.js', (err, buf) => {
//   console.log(buf.toString('utf-8'))
// })

// const util = require('util')

// const readFilePromise = util.promisify(fs.readFile)
// readFilePromise('./Handwritten Questions/02-call.js', 'utf-8').then(value => {
//   console.log(value)
// })

// util.promisify = function (fn) {
//   return (...args) => {
//     return new Promise((resolve, reject) => {
//       fn(...args, (err, buf) => {
//         if (err) {
//           reject(err)
//           return
//         }
//         resolve(buf)
//       })
//     })
//   }
// }

// const readFilePromise = util.promisify(fs.readFile)
// readFilePromise('./Handwritten Questions/02-call.js', 'utf-8').then(value => {
//   console.log(value)
// })

// ↩️

// 1 没有promisify
// const fs = require('fs')
// fs.readFile('./Handwritten Questions/02-call.js', (err, buf) => {
//   console.log(buf.toString('utf-8'))
// })

// 2 用上promisify
// const fs = require('fs')
// const util = require('util')

// const readFilePromise = util.promisify(fs.readFile)

// readFilePromise('./Handwritten Questions/02-call.js', 'utf-8').then(value => {
//   console.log(value)
// })

// 3 手写promisify
// const fs = require('fs')
// const util = require('util')

// util.promisify = function (fn) {
//   return (...args) => {
//     return new Promise((resolve, reject) => {
//       fn(...args, (err, buf) => {
//         if (err) {
//           reject(err)
//           return
//         } else {
//           resolve(buf)
//         }
//       })
//     })
//   }
// }

// const readFilePromise = util.promisify(fs.readFile)
// readFilePromise('./Handwritten Questions/02-call.js', 'utf-8').then(value => {
//   console.log(value)
// })

// 应该没啥问题了