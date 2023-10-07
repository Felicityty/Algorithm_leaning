/*
 * @Author: Felicity💪
 * @Date: 2023-09-14 02:34:07
 * @LastEditTime: 2023-10-07 01:06:46
 */

// 递归
// 考虑数组 + 解决循环引用

function deepClone(target, map = new Map()) {
  if (typeof target === 'object') {
    let newTarget = Array.isArray(target) ? [] : {}
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, newTarget)
    for (let key in target) {
      // 这里也会改变map中的value
      newTarget[key] = deepClone(target[key], map)
    }
    return newTarget
  } else {
    return target
  }
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8]
};
target.target = target;

console.log(deepClone(target))