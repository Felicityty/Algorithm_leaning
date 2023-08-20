/*
 * @Author: Felicity💪
 * @Date: 2023-08-20 13:40:55
 * @LastEditTime: 2023-08-20 14:05:51
 */
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let map = new Map()
  let res = []
  let left = 0, right = 0
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i)
  }
  console.log('map', map)
  for (let i = 0; i < s.length; i++) {
    right = Math.max(right, map.get(s[i]))
    if (i === right) {
      res.push(right - left + 1)
      left = i + 1
    }
  }
  return res
};

console.log(partitionLabels("vhaagbqkaq"))
