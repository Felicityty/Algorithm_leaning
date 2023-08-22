/*
 * @Author: Felicity💪
 * @Date: 2023-08-20 20:13:05
 * @LastEditTime: 2023-08-22 23:02:43
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

// ----------------------------------------------------------------------

// call apply bind
// bind 忘光光咯🥺

const Person1 = {
  name: 'aa',
  sayHi: function () {
    console.log(`I am ${this.name}`)
  }
}

const Person2 = {
  name: 'bb'
}

// Person1.sayHi.call(Person2)

Function.prototype.myCall = function (context = window, ...args) {
  if (this === Function.prototype) {
    return undefined
  }
  let fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}

// Person1.sayHi.myCall(Person2, 1, 2)

Function.prototype.myApply = function (context = window, args = []) {
  if (this === Function.prototype) {
    return undefined
  }
  let fn = Symbol()
  context[fn] = this
  let result
  // o 这样写就说明参数得是个数组，否则无效
  if (Array.isArray(args)) {
    result = context[fn](...args)
  } else {
    result = context[fn]()
  }
  delete context[fn]
  return result
}

// Person1.sayHi.myApply(Person2, [1, 2])

Function.prototype.myBind = function (context = window, ...args) {
  if (this === Function.prototype) {
    return undefined
  }
  const _this = this
  return function F(...args2) {
    if (this instanceof F) {
      return new _this(...args, ...args2)
    } else {
      return _this.apply(context, args.concat(args2))
    }
  }
}

const bindFunc2 = Person1.sayHi.myBind(Person2, 1, 2)

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

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'foo')
})
const promise4 = Promise.resolve(1213)
const promise5 = 42

Promise.all([promise3, promise4, promise5]).then((values) => {
  console.log(values)
})

Promise.all = function (promises) {
  let res = [], count = 0
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve(fulfilled)
    } else {
      promises.forEach((promise, index) => {
        Promise.resolve(promise).then(
          value => {
            count++
            res[index] = value
            if (count === promises.length) {
              resolve(res)
            }
          },
          reason => {
            reject(reason)
          }
        )
      })
    }
  })
}

Promise.allSettled = function (promises) {
  let res = [], count = 0
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        value => {
          count++
          res[index] = {
            status: 'fulfilled',
            value
          }
          if (count === promises.length) {
            resolve(res)
          }
        },
        reason => {
          count++
          res[index] = {
            status: 'rejected',
            reason
          }
          if (count === promises.length) {
            reject(res)
          }
        }
      )
    })
  })
}

Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise).then(
        value => {
          resolve(value)
        },
        reason => {
          reject(reason)
        }
      )
    })
  })
}

Promise.race([promise4, promise5]).then((value) => {
  console.log('222', value)
})

// 今天不在状态呀🤯 那就放松 调整调整呗