/*
 * @Author: Felicity💪
 * @Date: 2023-08-18 17:31:34
 * @LastEditTime: 2023-08-18 17:56:36
 */

// 手写node的util模块下的promisify
// 这个写得差点儿意思 先这样吧

// const fs = require('fs')
// const util = require('util')

// node util模块中的promisify方法
// const redFilePromise1 = util.promisify(fs.readFile)
// redFilePromise1('./Handwritten Questions/02-call.js', 'utf-8').then(data => {
//   console.log(data)
// })

const fs = require('fs')

function promisify(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, res) => {
        if (err) {
          reject(err)
          return
        }
        resolve(res)
      })
    })
  }
}

const readFilePromise = promisify(fs.readFile)
readFilePromise('./Handwritten Questions/02-call.js', 'utf-8').then(
  value => console.log(value)
)