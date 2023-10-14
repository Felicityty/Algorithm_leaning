/*
 * @Author: Felicity💪
 * @Date: 2023-10-14 23:26:18
 * @LastEditTime: 2023-10-15 01:00:55
 */

// T3 - 中文数字转阿拉伯数字

let chnNumChar = {
  零: 0,
  一: 1,
  二: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9
}

let chnNameValue = {
  十: { value: 10, secUnit: false },
  百: { value: 100, secUnit: false },
  千: { value: 1000, secUnit: false },
  万: { value: 10000, secUnit: true },
  亿: { value: 100000000, secUnit: true }
}

function ChineseToNumber(chnStr) {
  let res = 0
  let section = 0
  let number = 0
  let secUnit = false
  let str = chnStr.split('')

  for (let i = 0; i < str.length; i++) {
    let num = chnNumChar[str[i]]
    if (typeof num !== 'undefined') {
      // 数字
      number = num
      // 最后一位数字
      if (i === str.length - 1) {
        section += number
      }
    } else {
      // 非数字
      let unit = chnNameValue[str[i]].value
      secUnit = chnNameValue[str[i]].secUnit
      if (secUnit) {
        // 单位是万、亿
        section = (section + number) * unit
        res += section
        section = 0
      } else {
        // 其他单位
        section += (number * unit)
        if (i == 0 && unit === 10) { // 十开头
          section += 10
        }
      }
      number = 0
    }
  }
  return res + section
}

console.log(ChineseToNumber('十一'))
console.log(ChineseToNumber('五万四千零三十'))