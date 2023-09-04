/*
 * @Author: Felicity💪
 * @Date: 2023-09-04 18:24:25
 * @LastEditTime: 2023-09-04 23:45:34
 */

var longestPalindrome = function (s) {
  // 回溯找到所有回文字串 然后去找到最长的
  // 判断是否回文
  let res = [], path = []
  let maxLen = 0
  function backTracking(startIndex) {
    console.log('path', path.join(''))
    res.push(path.join(''))

    for (let i = startIndex; i < s.length; i++) {
      console.log('startIndex', startIndex)
      if (!isHuiWen(s, startIndex, i)) continue
      console.log('---------', s.slice(startIndex, i + 1))
      path.push(s[i])
      // res.push(s.slice(startIndex, i + 1))
      backTracking(i + 1)
      path.pop()
    }
  }
  backTracking(0)
  return res
}

function isHuiWen(arr, start, end) {
  // console.log(arr.slice(start, end + 1))
  for (let i = start, j = end; i < j; i++, j--) {
    if (arr[i] !== arr[j]) {
      return false
    }
  }
  console.log(true)
  return true
}

console.log(longestPalindrome("cbbd"))
