/*
 * @Author: Felicity💪
 * @Date: 2023-08-19 23:14:01
 * @LastEditTime: 2023-08-20 14:39:35
 */
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  // 把字符串转成数字数组
  n = n.toString()
  n = n.split('').map(item => +item)
  let flag = n.length
  for (let i = n.length; i > 0; i--) {
    if (n[i] < n[i - 1]) {
      n[i - 1]--
      n[i] = 9
      flag = i
    }
  }
  for (let i = flag; i < n.length; i++) {
    n[i] = 9
  }
  return n.join('')
};

console.log(monotoneIncreasingDigits(332))