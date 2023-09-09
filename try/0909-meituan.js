/*
 * @Author: Felicity💪
 * @Date: 2023-09-09 11:11:43
 * @LastEditTime: 2023-09-09 11:59:28
 */

const str = '11111'
const n = 5, k = 4
// const str = '00'
// const n = 2, k = 1

let count = 1, costNum = 0
for (let i = 1; i < n; i++) {
  if (str[i] === str[i - 1]) {
    count++
  } else {
    if (count % 2 !== 0) {
      costNum += Math.floor(count / 2) + 1
      count = 1
    }
  }
}

if (str[n - 1] !== str[n - 2]) costNum++
console.log('costNum', costNum)

if (costNum > 0) {
  if (costNum >= k * 2) {
    costNum = costNum - k * 2
  } else {
    costNum = 1
  }
} else {
  if (k % 2 === 0) {
    costNum = 1
  } else {
    costNum = 2
  }
}
console.log('res', costNum)


// if (k > costNum) {
//   console.log('res', n)
// } else {
//   console.log('res', n - (costNum - k) * 2)
// }