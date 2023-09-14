/*
 * @Author: Felicity💪
 * @Date: 2023-09-14 02:34:07
 * @LastEditTime: 2023-09-14 12:14:13
 */

// 递归

function deepClone(target) {
  if (Object.prototype.toString.call(target).slice(8, -1) !== 'Object' &&
    Object.prototype.toString.call(target).slice(8, -1) !== 'Array') {
    return target
  }
  const newTarget = Array.isArray(target) ? [] : {}
  Object.keys(target).forEach(key => newTarget[key] = (target[key] instanceof Object || target[key] instanceof Array) ? deepClone(target[key]) : target[key])
  return newTarget
}

const a = {
  b: 1,
  c: 2,
  d: {
    e: 3
  }
}

const b = [1, 2, 3, 4]

console.log(deepClone(b))