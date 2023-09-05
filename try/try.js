/*
 * @Author: Felicity💪
 * @Date: 2023-09-05 14:11:51
 * @LastEditTime: 2023-09-05 17:54:11
 */

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

var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var read_line = __readline.prompt


void async function () {
  // Write your code here
  let [n, k] = read_line().split(' ').map(Number)
  const nums = read_line().split(' ').map(Number)
  let add = 0, sub = 0, sum = 0
  while (k--) {
    const [operation, x] = read_line().split(' ').map(Number)
    if (operation === 1) {
      add += x
    } else {
      if (x > add) {
        add = 0
        sub += x - add
      } else {
        add -= x
      }
    }
  }
  for (let i = 0; i < n; i++) {
    nums[i] = Math.max(nums[i] - sub, 0)
    sum = (sum + add + nums[i]) % (Math.pow(10, 9) + 7)
  }
  console.log(sum)
}()
