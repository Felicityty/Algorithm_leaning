// 数组扁平化

const flat = (arr, initVal) => {
  let startVal = initVal || []
  console.log('---------startVal', startVal)
  return arr.reduce((preRes, item) => {
    if (Array.isArray(item)) {
      console.log('---------preRes', preRes)
      console.log('item1', item)
      return flat(item, preRes)
    } else {
      console.log('item2', item)
      return preRes.concat(item)
    }
  }, startVal)
}

const arr = [1, 2, [3, 4], [5, 6, [7, 8]]]
const flatArr = flat(arr)

console.log(flatArr) // [1, 2, 3, 4, 5, 6, 7, 8]