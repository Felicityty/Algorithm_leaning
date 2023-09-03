/*
 * @Author: Felicity💪
 * @Date: 2023-09-03 19:20:26
 * @LastEditTime: 2023-09-03 21:10:08
 */

// 1
// arr = [1, 2, 3, 4, 5]
// let map = new Map()
// for (let i = 0; i < arr.length; i++) {
//   if (map.has(arr[i])) {
//     console.log(i)
//     break
//   }
//   map.set(arr[i], 1)
//   if (i === arr.length - 1) console.log(arr.length)
// }


// 2 不懂还要在哪里优化

// const nums = [1, 1, 2, 3, 3]
// nums.sort((a, b) => a - b)
// let operationNum = 0

// for (let i = 1; i < nums.length; i++) {
//   if (nums[i] <= nums[i - 1]) {
//     let diff = nums[i - 1] - nums[i] + 1
//     operationNum += diff
//     nums[i] += diff
//     console.log(nums)
//   }
// }

// console.log(operationNum)

// function increaseArray(arr) {
//   const set1 = new Set()
//   let count = 0
//   for (let i = 0; i < arr.length; i++) {
//     let w = arr[i]
//     while (set1.has(w)) {
//       w++
//       count++
//     }
//     set1.add(w)
//     console.log(set1)
//   }
//   return count
// }
// console.log(increaseArray(nums))

// 3 前缀和 + 倍数滑动窗口

// const nums = [2, 4, 1, 3, 2, 3], u = 5, v = 2
// let num = 0
// for (let i = 0; i < nums.length; i++) {
//   let sum = 0
//   for (let j = i; j < nums.length; j += v - 1) {
//     let path = nums.slice(i, j + 1)
//     sum += nums[j]
//     console.log('sum', sum / path.length, u / v)
//     if (sum / path.length == u / v) num++
//   }
// }

// console.log(num)