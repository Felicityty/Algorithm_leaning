/*
 * @Author: Felicity💪
 * @Date: 2023-08-18 17:31:34
 * @LastEditTime: 2023-10-02 22:35:05
 */

// 手写node的util模块下的promisify
// 这个写得差点儿意思 先这样吧

// 1 没有promisify
// const fs = require('fs')
// fs.readFile('./Handwritten Questions/02-call.js', 'utf-8', (err, buf) => {
//   console.log('buf', buf)
// })

// 2 使用promisify
// const fs = require('fs')
// const util = require('util')

// node util模块中的promisify方法
// const redFilePromise1 = util.promisify(fs.readFile)
// redFilePromise1('./Handwritten Questions/02-call.js', 'utf-8').then(data => {
//   console.log(data)
// })

// 3 手写promisify
const fs = require('fs')
const util = require('util')

util.promisify = function (fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, buf) => {
        if (err) {
          reject(err)
          return
        }
        resolve(buf)
      })
    })
  }
}

const readFilePromise = util.promisify(fs.readFile)
readFilePromise('./Handwritten Questions/02-call.js', 'utf-8').then(value => {
  console.log(value)
})