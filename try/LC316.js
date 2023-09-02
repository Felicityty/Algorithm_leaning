/*
 * @Author: Felicity💪
 * @Date: 2023-09-02 11:27:32
 * @LastEditTime: 2023-09-02 14:23:06
 */
/**
 * @param {string} s
 * @return {string}
 */

var removeDuplicateLetters = function (s) {
  /*
      计数器 count 感觉这里用map更好
      第一次遍历 拿到每个元素出现的次数
      第二次遍历
      inMap 维护当前数组中是否有这个元素
  */
  let stack = []
  let map = new Map(), inMap = new Map()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1)
  }
  console.log('map', map)
  for (let i = 0; i < s.length; i++) {
    let c = s[i]
    map.set(c, map.get(c) - 1)

    if (inMap.get(c)) continue

    while (!!stack.length && stack[stack.length - 1] > c) {
      if (map.get(stack[stack.length - 1]) === 0) {
        break
      }
      if (map.has(c)) inMap.set(stack.pop(), false)
    }
    inMap.set(c, true)
    stack.push(c)
  }
  return stack.join('')
};

const s = "cbacdcbc"

console.log(removeDuplicateLetters(s))