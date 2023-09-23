/*
 * @Author: Felicity💪
 * @Date: 2023-08-20 20:13:05
 * @LastEditTime: 2023-09-23 22:47:55
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

// 2023.8.24
// Array.prototype.myConcat = function () {
//   let arr = [...this]
//   arguments = [...arguments]
//   arguments.forEach(argument => {
//     Array.isArray(argument) ? argument.forEach(item => arr.push(item)) : arr.push(argument)
//   })
//   return arr
// }
// const newArr = [1, 2].myConcat([1, 2], [4, 5, 9], 7, 5, 6)
// console.log('newArr', newArr)

// ----------------------------------------------------------------------

// 2023.8.26

// jsonp
// (function (window, document) {
//   function jsonp(options) {
//     const { url, data, callback } = options

//     // url
//     let params = []
//     for (let key in data) {
//       params.push(key + '=' + data[key])
//     }
//     url += url.indexOf('?') === -1 ? '?' : '&'
//     url += params.join('&')

//     // callback
//     let cbName = 'jsonp' + Math.random().toString().replace('.', '')
//     url += `&callback=${cbName}`

//     // script
//     let scriptEle = document.createElement('script')
//     scriptEle.src = url

//     // window挂载
//     window[cbName] = function (data) {
//       callback(data)
//       document.body.removeChild(scriptEle)
//     }

//     document.body.appendChild(scriptEle)
//   }

//   window.$jsonp = jsonp

// })(window, document)

// $jsonp({
//   url: 'www.example.com',
//   data: { name: 'ttt' },
//   callback: function (res) {
//     console.log('res', res)
//   }
// })

// 数组去重
// let arr = [1, 3, 3, 2, 4, 4, 5, 3, 2, 5, 6]

// let newArr = arr.reduce((pre, cur) => {
//   if (!pre.includes(cur)) {
//     pre.push(cur)
//   }
//   return pre
// }, [])
// console.log('newArr', newArr)

// ----------------------------------------------------------------------

// 2023.8.27

// 手写new

// function _new(fn, ...args) {
//   // 基于fn的原型创建一个新对象
//   const obj = Object.create(fn.prototype)
//   // 通过this把对象和属性添加到新对象上，并获取函数的执行结果
//   const res = fn.apply(obj, args)
//   // 如果执行结果有返回值并且是一个对象，返回执行的结果，否则返回新创建的对象
//   return res instanceof Object ? res : obj
// }

// function Person(a, b) {
//   this.a = a
//   this.b = b
// }

// const person = _new(Person, 'aa', 'bbb')
// console.log('person', person)

// ----------------------------------------------------------------------

// 2023.8.29 💪 review

// 1 - call apply bind

// const Person1 = {
//   name: 'fff',
//   sayHi() {
//     console.log('sayHi', this.name)
//   }
// }

// const Person2 = {
//   name: 'ttt'
// }

// Person1.sayHi.call(Person2)

// Function.prototype.myCall = function (context = window, ...args) {
//   if (this === Function.prototype) {
//     return undefined
//   }
//   let fn = Symbol()
//   context[fn] = this
//   let result = context[fn](...args)
//   delete context[fn]
//   return result
// }

// Person1.sayHi.myCall(Person2)

// Person1.sayHi.apply(Person2)

// Function.prototype.myApply = function (context = window, args = []) {
//   if (this === Function.prototype) {
//     return undefined
//   }
//   let fn = Symbol()
//   context[fn] = this
//   let result = context[fn](...args)
//   delete context[fn]
//   return result
// }

// Person1.sayHi.myApply(Person2)

// Person1.sayHi.bind(Person2)()

// Function.prototype.myBind = function (context = window, ...args) {
//   if (this === Function.prototype) {
//     throw new Error('error')
//   }
//   let _this = this
//   return function F(...args2) {
//     if (this instanceof F) {
//       return new _this(...args, ...args2)
//     } else {
//       return _this.apply(context, args.concat(args2))
//     }
//   }
// }

// Person1.sayHi.myBind(Person2)()

// 4 - flatten

// const arr = [1, 2, [3, 4, [5, 6], [7, 8]]]

// function flatten(arr, depth) {
//   return arr.reduce((pre, cur) => {
//     if (Array.isArray(cur) && depth > 1) {
//       return pre.concat(flatten(cur, depth - 1))
//     } else {
//       return pre.concat(cur)
//     }
//   }, [])
// }

// console.log(flatten(arr, 1))

// 5 - getKeyByValue

// const subjectType = {
//   'LB': '综合',
//   'XW': '消委',
//   'GA': '公安',
//   'GT': '国土',
//   'CG': '城管',
//   'GJJ': '公积金',
//   'ZH': '综合',
// }

// function getKeyByValue(map, value, compare = (a, b) => a === b) {
//   return Object.keys(map).filter(key => compare(value, map[key]))
// }

// console.log(getKeyByValue(subjectType, '综合'))

// 6 - 柯里化

// function curry(fn, ...args) {
//   if (args.length >= fn.length) {
//     return fn(...args)
//   } else {
//     return function (...args2) {
//       return curry(fn, ...args, ...args2)
//     }
//   }
// }

// function sum(a, b, c) {
//   return a + b + c
// }

// let currySum = curry(sum)

// console.log(currySum(1)(2)(3))

// 7 - promise

// const promise1 = Promise.resolve(123)
// console.log('promise1', promise1)

// Promise.myResolve = function (value) {
//   return new Promise((resolve, reject) => {
//     if (value instanceof Promise) {
//       value.then(resolve, reject)
//     } else {
//       resolve(value)
//     }
//   })
// }

// const promise2 = Promise.myResolve(123)
// console.log('promise2', promise2)

// const promise3 = Promise.reject(1213)

// Promise.prototype.catch = function (onRejected) {
//   return this.then(null, onRejected)
// }

// Promise.prototype.finally = function (onFinally) {
//   return this.then(onFinally, onFinally)
// }

// promise3.catch(reason => {
//   console.log(reason)
// })

// promise3.finally(final => {
//   console.log(final)
// })

// const promise1 = Promise.resolve(3)
// const promise2 = 42
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'foo')
// })

// Promise.race([promise1, promise2, promise3]).then(values => {
//   console.log(values)
// })

// Promise.myRace = function (promises) {
//   return new Promise((resolve, reject) => {
//     promises.forEach((promise) => {
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

// Promise.myRace([promise1, promise2, promise3]).then(values => {
//   console.log(values)
// })

// // const promise4 = Promise.reject(3)

// Promise.all([promise1, promise2, promise3]).then(values => {
//   console.log(values)
// })

// Promise.myAll = function (promises) {
//   let res = [], count = 0
//   return new Promise((resolve, reject) => {
//     promises.forEach((promise, index) => {
//       Promise.resolve(promise).then(
//         value => {
//           count++
//           res[index] = value
//           if (count === promises.length) {
//             resolve(res)
//           }
//         },
//         reason => {
//           reject(reason)
//         }
//       )
//     })
//   })
// }

// Promise.myAll([promise1, promise2, promise3]).then(values => {
//   console.log(values)
// })

// Promise.allSettled([promise1, promise2, promise3]).then(values => {
//   console.log(values)
// })

// Promise.myAllSettled = function (promises) {
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
//             resolve(res)
//           }
//         }
//       )
//     })
//   })
// }

// Promise.myAllSettled([promise1, promise2, promise3]).then(values => {
//   console.log(values)
// })

// 8 - promisify

// const fs = require('fs')
// fs.readFile('./Handwritten Questions/02-call.js', (err, buf) => {
//   console.log(buf.toString('utf-8'))
// })

// const util = require('util')
// const readFilePromise = util.promisify(fs.readFile)
// readFilePromise('./Handwritten Questions/02-call.js', 'utf-8').then(value => {
//   console.log(value)
// })

// util.myPromisify = function (fn) {
//   return function (...args) {
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

// const readFilePromise = util.myPromisify(fs.readFile)
// readFilePromise('./Handwritten Questions/02-call.js', 'utf-8').then(value => {
//   console.log(value)
// })

// 9 - map

// Array.prototype.myMap = function (fn, thisArg) {
//   let res = []
//   if (fn instanceof Function === false) {
//     throw new Error('function error')
//   }
//   if ([undefined, null].includes(this)) {
//     throw new Error('this error')
//   }
//   let arr = Object(this)
//   for (let i = 0; i < arr.length; i++) {
//     res[i] = fn.call(thisArg, arr[i], i, arr)
//   }
//   return res
// }

// const array1 = [1, 4, 9, 16]

// const map1 = array1.myMap((x) => x * 2)

// console.log(map1)

// 10 - sleep

// async function sleep(delay) {
//   await new Promise((resolve, reject) => {
//     setTimeout(resolve, delay)
//   })
// }

// sleep(1000).then(() => console.log(222))

// 11 - concat

// Array.prototype.myConcat = function () {
//   let arr = [...this]
//   arguments = [...arguments]
//   arguments.forEach(argument => Array.isArray(argument) ? argument.forEach(item => arr.push(item)) : arr.push(argument))
//   return arr
// }

// const newArr = [1, 2].myConcat([1, 2], [4, 5, 9], 7, 5, 6)
// console.log('newArr', newArr)

// 12 - “a=1&b=2“ 转换为 {a: 1, b: 2}

// const str = 'a=1&b=2'

// function formatToObject(str) {
//   let obj = {}
//   str.split('&').forEach(item => {
//     const [key, value] = item.split('=')
//     obj[key] = value
//   })
//   return obj
// }
// console.log('formatToObject', formatToObject(str))

// 13 - new

// function Person(a, b) {
//   this.a = a
//   this.b = b
//   this.get = function () {
//     console.log(`${this.a} + ${this.b}`)
//   }
// }

// const alice = new Person('a', 'l')
// alice.get()

// function _new(fn, ...args) {
//   const obj = Object.create(fn.prototype)
//   const result = fn.apply(obj, args)
//   return result instanceof Object ? result : obj
// }

// const bob = _new(Person, 'b', 'o')
// bob.get()

// ----------------------------------------------------------------------

// 2023.9.3

// let initArr = [123, "webank", [1, 2, 3], "123", { a: 1 }, "tencent", 123, [1, 2, 3], { a: 2 }]
// function deal(arr) {
//   let map = new Map()
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     let x = typeof arr[i] == 'object' ? arr[i].toString() : arr[i]
//     if (map.get(x)) continue    //map里存在了,不操作
//     map.set(x, 1)
//     newArr.push(arr[i])
//   }
//   return newArr
// }
// let newArr = deal(initArr)
// console.log(newArr)

// ----------------------------------------------------------------------

// 2023.9.6

// const Person1 = {
//   name: 'aaaa',
//   sayHi: function () {
//     console.log('hey', this.name)
//   }
// }
// const Person2 = {
//   name: 'bbbb'
// }
// Person1.sayHi.call(Person2)

// Function.prototype.myCall = function (context = window, ...args) {
//   if (this === Function.prototype) {
//     return undefined
//   }
//   let fn = Symbol()
//   context[fn] = this
//   const res = context[fn](...args)
//   delete context[fn]
//   return res
// }

// Person1.sayHi.myCall(Person2)

// Person1.sayHi.apply(Person2)

// Function.prototype.myApply = function (context = window, args = []) {
//   if (this === Function.prototype) {
//     return undefined
//   }
//   let fn = Symbol()
//   context[fn] = this
//   const res = context[fn](...args)
//   delete context[fn]
//   return res
// }

// Person1.sayHi.myApply(Person2)

// Person1.sayHi.bind(Person2)()

// Function.prototype.myBind = function (context = window, ...args) {
//   if (this === Function.prototype) {
//     return undefined
//   }
//   let _this = this
//   return function F(...args2) {
//     if (_this instanceof F) {
//       return new _this(...args, ...args2)
//     } else {
//       return _this.apply(context, args.concat(args2))
//     }
//   }
// }

// Person1.sayHi.myBind(Person2)()

// ----------------------------------------------------------------------

// 2023.9.7

// function flatten1(nums) {
//   return nums.reduce((pre, cur) => {
//     if (Array.isArray(cur)) {
//       return pre.concat(flatten1(cur))
//     } else {
//       return pre.concat(cur)
//     }
//   }, [])
// }

// function flatten2(nums, depth) {
//   return nums.reduce((pre, cur) => {
//     if (Array.isArray(cur) && depth > 1) {
//       return pre.concat(flatten2(cur, depth - 1))
//     } else {
//       return pre.concat(cur)
//     }
//   }, [])
// }

// const arr = [1, 2, [3, 4], [5, 6, [7, 8]]]
// const flatArr1 = flatten1(arr)
// console.log(flatArr1)

// const flatArr2 = flatten2(arr, 1)
// console.log(flatArr2)

// ----------------------------------------------------------------------

// 2023.9.9

// function debounce(fn, delay) {
//   let timer = null
//   return function (...args) {
//     if (timer !== null) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       fn.apply(this, args)
//     }, delay)
//   }
// }

// function throttle(fn, delay) {
//   let timer = null
//   return function (...args) {
//     if (timer === null) {
//       timer = setTimeout(() => {
//         fn.apply(this, args)
//         timer = null
//       }, delay)
//     }
//   }
// }

// const subjectType = {
//   'LB': '劳保',
//   'XW': '消委',
//   'GA': '公安',
//   'GT': '国土',
//   'CG': '城管',
//   'GJJ': '公积金',
//   'ZH': '综合',
// }

// function getKeyByValue(obj, value) {
//   return Object.keys(obj).filter(key => obj[key] === value)
// }

// console.log(getKeyByValue(subjectType, '综合'))

// curry
// function curry(fn, ...args) {
//   if (args.length >= fn.length) {
//     return fn.apply(this, args)
//   } else {
//     return function (...args2) {
//       return curry.apply(this, [fn, ...args, ...args2])
//     }
//   }
// }

// function sum(a, b, c) {
//   return a + b + c
// }

// let currySum = curry(sum)

// console.log(currySum(1)(2, 3))

// Promise.all = function (promises) {
//   let res = [], count = 0
//   return new Promise((resolve, reject) => {
//     if (promises.length === 0) {
//       resolve(fulfilled)
//     } else {
//       promises.forEach((promise, index) => {
//         Promise.resolve(promise).then(
//           value => {
//             res[index] = value
//             count++
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

// const promise1 = Promise.resolve(3)
// const promise2 = 42
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'foo')
// })

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values)
// })

// Promise.allSettled = function (promises) {
//   let res = [], count = 0
//   return new Promise((resolve, reject) => {
//     promises.forEach((promise, index) => {
//       Promise.resolve(promise).then(
//         value => {
//           res[index] = {
//             status: 'fulfilled',
//             value
//           }
//           count++
//           if (count === promises.length) {
//             resolve(res)
//           }
//         },
//         reason => {
//           res[index] = {
//             status: 'rejected',
//             reason
//           }
//           count++
//           if (count === promises.length) {
//             reject(res)
//           }
//         }
//       )
//     })
//   })
// }

// Promise.allSettled([promise1, promise2, promise3]).then((values) => {
//   console.log(values)
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

// Promise.race([promise1, promise2, promise3]).then((values) => {
//   console.log(values)
// })

// 快排

// const arr = [3, 4, 2, 5, 1, 2]

// function quickSort(nums, left, right) {
//   if (left >= right) {
//     return
//   }
//   let l = left, temp = nums[l], r = right
//   while (l < r) {
//     while (l < r && nums[r] >= temp) {
//       r--
//     }
//     nums[l] = nums[r]
//     while (l < r && nums[l] < temp) {
//       l++
//     }
//     nums[r] = nums[l]
//   }
//   nums[l] = temp
//   quickSort(nums, left, l - 1)
//   quickSort(nums, l + 1, right)
//   return nums
// }

// console.log(quickSort(arr, 0, 5))


// ----------------------------------------------------------------------

// 2023.9.18

// extends

// es5
// function A(name) {
//   this.name = name
// }
// A.prototype.getName = function () {
//   console.log(this.name)
// }

// function B(name, age) {
//   A.call(this, name)
//   this.age = age
// }
// B.prototype = Object.create(A.prototype)
// B.prototype.constructor = B
// B.prototype.getAge = function () {
//   console.log(this.age)
// }
// let b = new B('fff', 18)
// b.getName()
// b.getAge()

// es6

// class A {
//   constructor(name) {
//     this.name = name
//   }
//   getName() {
//     console.log(this.name)
//   }
// }
// class B extends A {
//   constructor(name, age) {
//     super(name)
//     this.age = age
//   }
//   getAge() {
//     console.log(this.age)
//   }
// }
// let b = new B('ttt', 20)
// b.getName()
// b.getAge()

// const sleep = function (delay, i) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(i), delay)
//   })
// }

// const start = async function () {
//   for (let i = 0; i < 10; i++) {
//     let res = await sleep(1000, i)
//     console.log(res)
//   }
// }

// start()

// function deepClone(target) {
//   if (Object.prototype.toString.call(target).slice(8, -1) !== 'Object' &&
//     Object.prototype.toString.call(target).slice(8, -1) !== 'Array') {
//     return target
//   }
//   const res = Array.isArray(target) ? [] : {}
//   Object.keys(target).forEach(key => res[key] = (target[key] instanceof Object || target[key] instanceof Array) ? deepClone(target[key]) : target[key])
//   return res
// }

// const a = {
//   b: 1,
//   c: 2,
//   d: {
//     e: 3
//   }
// }

// console.log(deepClone(a))

// class EventEmitter {
//   constructor() {
//     this._events = {}
//   }

//   // 订阅
//   on(eventName, cb) {
//     // 事件中心存在的订阅者添加订阅时，触发这个钩子
//     if (this._events[eventName]) {
//       if (eventName !== 'newListener') {
//         this.emit('newListener', eventName)
//       }
//     }
//     const cbs = this._events[eventName] || []
//     cbs.push(cb)
//     this._events[eventName] = cbs
//   }

//   // 发布
//   emit(eventName, ...args) {
//     const cbs = this._events[eventName] || []
//     cbs.forEach(cb => cb(...args))
//   }

//   // 取消订阅
//   off(eventName, cb) {
//     const cbs = this._events[eventName] || []
//     const newCbs = cbs.filter(item => item !== cb && item.initialCb !== cb)
//     this._events[eventName] = newCbs
//   }

//   // once
//   once(eventName, cb) {
//     const one = (...args) => {
//       cb(...args)
//       this.off(eventName, one)
//     }
//     one.initialCb = cb
//     this.on(eventName, one)
//   }
// }

// const events = new EventEmitter()

// events.on('newListener', function (eventName) {
//   console.log('eventName', eventName)
// })

// events.on('hey', function () {
//   console.log('hey1')
// })
// let cb = function () {
//   console.log('hey2')
// }
// events.on('hey', cb)
// events.emit('hey')

// console.log('--------')

// events.off('hey', cb)
// events.emit('hey')

// console.log('--------')

// function once() {
//   console.log("once")
// }
// events.once("hey", once)

// console.log('events', events)

// events.emit("hey")

// console.log('events', events)


// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000)
// }


// ----------------------------------------------------------------------

// 2023.9.23

const students = [
  { "group": 8, "class": "y", "school": "B", "grade": "2nd" },
  { "group": 7, "class": "r", "school": "A", "grade": "3rd" },
  { "group": 2, "class": "f", "school": "B", "grade": "2nd" },
  { "group": 8, "class": "w", "school": "B", "grade": "3rd" },
  { "group": 8, "class": "o", "school": "B", "grade": "2nd" },
  { "group": 2, "class": "c", "school": "B", "grade": "2nd" },
  { "group": 4, "class": "v", "school": "C", "grade": "2nd" },
  { "group": 7, "class": "s", "school": "B", "grade": "2nd" },
  { "group": 10, "class": "q", "school": "B", "grade": "2nd" },
  { "group": 6, "class": "b", "school": "B", "grade": "2nd" },
  { "group": 6, "class": "r", "school": "B", "grade": "2nd" },
  { "group": 10, "class": "d", "school": "A", "grade": "2nd" },
  { "group": 2, "class": "u", "school": "A", "grade": "3rd" },
  { "group": 2, "class": "t", "school": "A", "grade": "1st" },
  { "group": 2, "class": "r", "school": "C", "grade": "2nd" },
  { "group": 2, "class": "x", "school": "B", "grade": "2nd" },
  { "group": 3, "class": "r", "school": "A", "grade": "2nd" },
  { "group": 7, "class": "h", "school": "A", "grade": "2nd" },
  { "group": 2, "class": "b", "school": "B", "grade": "1st" },
  { "group": 7, "class": "t", "school": "B", "grade": "3rd" }
]

const divide = (list, key) => {
  return list.reduce((pre, cur) => {
    const keyValue = cur[key]
    if (!pre[keyValue]) {
      pre[keyValue] = [cur]
    } else {
      pre[keyValue].push(cur)
    }
    return pre
  }, {})
}

const divideN = (list, keys) => {
  if (keys.length === 0) {
    return list
  }
  const [key, ...restKeys] = keys
  const divided = divide(list, key)
  for (let groupKey in divided) {
    divided[groupKey] = divideN(divided[groupKey], restKeys)
  }
  return divided
}

const res = divideN(students, ['school', 'grade'])
console.log('res', res)