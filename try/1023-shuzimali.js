/*
 * @Author: Felicity💪
 * @Date: 2023-10-23 19:39:15
 * @LastEditTime: 2023-10-23 20:07:24
 */

// function matchesPattern(str) {
//   let flag = true
//   let strArr = str.split('-')
//   strArr.forEach(item => {
//     if (!(parseInt(item) == item)) {
//       flag = false
//     }
//   })
//   return flag
// }

// console.log(matchesPattern('800-555-1212'))


function rgb2hex(sRGB) {
  // 填写JavaScript
  let formatStr = sRGB.slice(0, 4)
  let endStr = sRGB[sRGB.length - 1]
  if (formatStr !== 'rgb(' || endStr !== ')') {
    console.log(1)
    return sRGB
  }
  let res = '#'
  let nums = sRGB.slice(4, -1).split(',').map(item => parseInt(item.trim()))
  let flag = true
  console.log(nums)
  nums.map(num => {
    if (num <= 255) {
      let temp = num.toString(16)
      res += (temp.length === 2) ? temp : '0' + temp
    } else {
      flag = false
    }
  })
  return flag ? res : sRGB
}

console.log(rgb2hex('rgb(0, 255, 255)'))