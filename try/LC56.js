/*
 * @Author: Felicity💪
 * @Date: 2023-08-20 14:15:02
 * @LastEditTime: 2023-08-20 14:24:07
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals < 1) return intervals
  intervals.sort((a, b) => a[0] - b[0])
  let res = [], left = intervals[0][0], right = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > right) {
      console.log('cur', intervals[i][1])
      console.log('left', left, 'right', right)
      res.push([left, right])
      left = intervals[i][0]
      right = intervals[i][1]
    } else {
      right = Math.max(right, intervals[i][1])
    }
  }
  res.push([left, right])
  return res
};

const result = merge([[1, 3], [2, 6], [8, 10], [15, 18]])

console.log(result)