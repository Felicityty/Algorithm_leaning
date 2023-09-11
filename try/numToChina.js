/*
 * @Author: Felicity💪
 * @Date: 2023-09-11 22:36:05
 * @LastEditTime: 2023-09-11 23:36:09
 */

function num2cn(num) {
  let arr = num.toString().split('').reverse().join('')
  let curr = 0
  let unit = [, '万', '亿']
  let res = []
  let answer = []
  while (curr < arr.length) {
    res.push(NumToChina(arr.slice(curr, curr + 4)))
    curr += 4
  }
  for (let i = res.length - 1; i >= 0; i--) {
    if (res[i] === '零') continue
    answer.push(i !== 0 ? res[i] + unit[i] : res[i])
  }
  return answer.join('')
}

function NumToChina(n) {
  let unit = [, '十', '百', '千']
  let number = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  let arr = n.toString().split('')
  let res = []
  res.unshift(number[arr[0]])
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === '0' && arr[i - 1] === '0') continue
    if (arr[i] === '0') {
      res.unshift(number[arr[i]])
    } else {
      res.unshift(unit[i])
      res.unshift(number[arr[i]])
    }
  }
  let len = res.length
  if (res[len - 1] === '零' && len !== 1) res.pop()
  if (arr.length === 2 && res[0] === '一') res.shift()
  return res.join('')
}

let n = 123000000009
let arr = num2cn(n)
console.log(arr)