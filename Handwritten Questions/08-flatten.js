/*
 * @Author: Felicity💪
 * @Date: 2023-08-17 15:39:55
 * @LastEditTime: 2023-08-17 15:45:55
 */
function flatten(arr) {
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return pre.concat(flatten(cur))
    } else {
      return pre.concat(cur)
    }
  }, [])
}

function flatten2(arr, depth) {
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur) && depth > 1) {
      return pre.concat(flatten(cur, depth - 1))
    } else {
      return pre.concat(cur)
    }
  }, [])
}

const arr = [1, 2, [3, 4], [5, 6, [7, 8]]]
const flatArr = flatten2(arr, 1)
console.log(flatArr)