// 数组扁平化

// const flat = (arr, initVal) => {
//   let startVal = initVal || []
//   console.log('---------startVal', startVal)
//   return arr.reduce((preRes, item) => {
//     if (Array.isArray(item)) {
//       console.log('---------preRes', preRes)
//       console.log('item1', item)
//       return flat(item, preRes)
//     } else {
//       console.log('item2', item)
//       return preRes.concat(item)
//     }
//   }, startVal)
// }

// const arr = [1, 2, [3, 4], [5, 6, [7, 8]]]
// const flatArr = flat(arr)

// console.log('flatArr', flatArr) // [1, 2, 3, 4, 5, 6, 7, 8]

function flat(arr, initVal) {
  let startVal = initVal || []
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return flat(cur, pre)
    } else {
      return pre.concat(cur)
    }
  }, startVal)
}

function flatten(array) {
  return array.reduce((target, current) => {
    if (Array.isArray(current)) {
      return target.concat(flatten(current))
    } else {
      return target.concat(current)
    }
  }, [])
}

function flatten(array) {
  return array.reduce((target, current) => {
    if (Array.isArray(current)) {
      return target.concat(flatten(current))
    } else {
      return target.concat(current)
    }
  }, [])
}


const arr = [1, 2, [3, 4], [11, 13], [5, 6, [7, 8]]]
const flatArr = flatten(arr)

console.log(flatArr)

function flattenWithDepth(arr, depth = 1) {
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur) && depth > 1) {
      return pre.concat(flattenWithDepth(cur, depth - 1))
    } else {
      return pre.concat(cur)
    }
  }, [])
}
// ❗️这里不能用depth--，否则着递归的每个分支都会在同一个深度上运行，而不是逐级减少深度

const flatArrDepth = flattenWithDepth(arr, 2)
console.log('flatArrDepth', flatArrDepth)