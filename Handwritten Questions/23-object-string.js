/*
 * @Author: Felicity💪
 * @Date: 2023-08-24 20:47:28
 * @LastEditTime: 2023-08-24 21:36:34
 */

// 👉 起因是这样一道题 实现一个函数将字符串“a=1&b=2“ 转换为 {a: 1, b: 2}

const str = 'a=1&b=2'

function formatToObject(str) {
  let obj = {}
  str.split('&').forEach(item => {
    const [key, value] = item.split('=')
    obj[key] = Number(value) || value
  })
  return obj
  // return JSON.stringify(obj) // 把key变成字符串
}
console.log('formatToObject', formatToObject(str))


// 👉 如何使用正则表达式将“a=1&b=2”转换为“a:1,b:2”的格式？

const transformedString = str.replace(/([^=&]+)=([^&]+)/g, '$1:$2').replace(/&/g, ',')
console.log(transformedString)
