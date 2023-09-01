/*
 * @Author: Felicity💪
 * @Date: 2023-09-01 23:24:57
 * @LastEditTime: 2023-09-01 23:45:17
 */


var nextGreaterElement = function (nums1, nums2) {
  let nums2Res = getNext(nums2)
  console.log('nums2Res', nums2Res)
  let map = new Map()
  for (let i = 0; i < nums2.length; i++) {
    map.set(nums2[i], nums2Res[i])
  }
  let res = new Array(nums1.length)
  for (let i = 0; i < nums1.length; i++) {
    res[i] = map.get(nums1[i])
  }
  return res
};

function getNext(arr) {
  let res = [], stack = []
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= arr[i]) {
      stack.pop()
    }
    res[i] = stack.length === 0 ? -1 : stack[stack.length - 1]
    stack.push(arr[i])
  }
  return res
}

const nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]
console.log(nextGreaterElement(nums1, nums2))