/*
 * @Author: Felicity💪
 * @Date: 2023-09-05 14:11:51
 * @LastEditTime: 2023-09-10 23:22:34
 */

// 2023.9.5

// console.log(-19 % 10)

// var twoSum = function (nums, target) {
//   let left = 0, right = nums.length - 1
//   let res = []
//   while (left < right) {
//     let sum = nums[left] + nums[right]
//     console.log(sum)
//     if (sum === target) {
//       res = [nums[left], nums[right]]
//       break
//     } else if (sum > target) {
//       right--
//     } else {
//       left++
//     }
//   }
//   console.log(res)
//   // return res
// };

// console.log(twoSum([2, 7, 11, 15], 9))

// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// var __readline = require('readline-sync')
// __readline.setDefaultOptions({ prompt: '' })
// var read_line = __readline.prompt


// void async function () {
//   // Write your code here
//   let [n, k] = read_line().split(' ').map(Number)
//   const nums = read_line().split(' ').map(Number)
//   let add = 0, sub = 0, sum = 0
//   while (k--) {
//     const [operation, x] = read_line().split(' ').map(Number)
//     if (operation === 1) {
//       add += x
//     } else {
//       if (x > add) {
//         add = 0
//         sub += x - add
//       } else {
//         add -= x
//       }
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     nums[i] = Math.max(nums[i] - sub, 0)
//     sum = (sum + add + nums[i]) % (Math.pow(10, 9) + 7)
//   }
//   console.log(sum)
// }()

// ----------------------------------------------------------------------

// 2023.9.7

// const n = 6
// const nums = [1, 1, 4, 5, 1, 4]
// let sum = nums.reduce((a, b) => a + b);
// for (let i = 1; i < n; i++) {
//   sum = Math.max(
//     sum,
//     sum - nums[i - 1] - nums[i] + nums[i - 1] * nums[i]
//   );
// }
// console.log(sum);


// ----------------------------------------------------------------------

// 2023.9.8

// const x = 123, k = 2
// // const x = 80407, k = 4

// let len = x.toString().length
// let y = Math.floor(x / Math.pow(10, len - k))
// console.log(y)
// let res = 0
// while (y) {
//   res = res * 10 + y % 10
//   y = ~~(y / 10)
// }
// console.log(res)

// res = res * Math.pow(10, len - k) + x % Math.pow(10, len - k)
// console.log(res)


// ----------------------------------------------------------------------

// 2023.9.10

const n = 5, k = 2
// const arr = [4, 3, 1, 3, 2]
// [2, 1, -1, 1, 0]
const arr = [1, 3, 2, 4, 1]
// [-1, 1, 0, 2, -1]
let sum = 0, res = -1
let sumMp = new Map()
sumMp.set(0, 0)
console.log(sumMp)

for (let i = 0; i < n; i++) {
  sum += arr[i] - k;
  console.log('i', i, 'sum', sum)

  if (sumMp.has(sum)) {
    res = Math.max(res, i + 1 - sumMp.get(sum));
  } else {
    sumMp.set(sum, i + 1);
  }
  console.log('res', res)
  console.log(sumMp)
  console.log('-------------------')
}

console.log(res);