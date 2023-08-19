/*
 * @Author: Felicity💪
 * @Date: 2023-08-19 23:14:01
 * @LastEditTime: 2023-08-19 23:15:26
 */
var monotoneIncreasingDigits = function (n) {
  // 把n转为一个全是数字的数组
  n = n.toString()
  n = n.split('').map(item => +item)
  let flag = Infinity
  for (let i = n.length - 1; i > 0; i--) {
    if (n[i - 1] > n[i]) {
      flag = i
      n[i - 1]--
      n[i] = 9
    }
  }
  // 像100这种 预期结果应该是99 而不是90 所以还要多遍历一下
  for (let i = flag; i < n.length; i++) {
    n[i] = 9
  }
  // 把数字数组的元素连接成一个字符串
  n = n.join('')
  // 字符串转换成数字
  return +n
};

console.log(monotoneIncreasingDigits(332))