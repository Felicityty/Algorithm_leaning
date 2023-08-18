/*
 * @Author: Felicity💪
 * @Date: 2023-08-18 15:49:10
 * @LastEditTime: 2023-08-18 17:55:57
 */

// 手写实现Promise.race 、 Promise.all 、 Promise.allSettled

const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'foo')
})

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values)
})

// 并行 聚合结果 快速失败（返回的结果顺序保持请求的顺序）
Promise.all = function (promises) {
  let res = [], count = 0
  return new Promise((resolve, reject) => {
    if (promises.length === 0) { // 只有这里是同步的
      resolve(fulfilled)
    } else {
      promises.forEach((promise, index) => {
        Promise.resolve(promise).then( // promise本身就是一个Promise对象，所以会直接返回本身
          value => {
            count++
            res[index] = value // 顺序不变
            if (count === promises.length) { // 都成功
              resolve(res)
            }
          },
          reason => {
            reject(reason) // 快速失败
          }
        )
      })
    }
  })
}

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values)
})

// -----------------------------------------------------

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one')
})

const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two')
})


Promise.race([promise4, promise5]).then((value) => {
  console.log(value)
})

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


// -----------------------------------------------------

// 和all其实真的差不多诶 但是allSettled居然不会失败🥰
Promise.allSettled = function (promises) {
  let res = [], count = 0
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        value => {
          count++
          res[index] = {
            status: 'fulfilled',
            value,
          }
          if (count === promises.length) {
            resolve(res)
          }
        },
        reason => {
          count++
          res[index] = {
            status: 'rejected',
            reason,
          }
          if (count === promises.length) {
            resolve(res)
          }
        }
      )
    })
  })
}

Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("一个错误")),
]).then((values) =>
  console.log(values)
)
