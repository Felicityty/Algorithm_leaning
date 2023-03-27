//导入包
var __readline = require('readline-sync')
__readline.setDefaultOptions({prompt: ''})
var read_line = __readline.prompt

// console.log('111')

var line
let getSum = (m,n) => {
    let sum = 0
    while(n) {
        sum += m
        m = Math.sqrt(m)
        n--
    }
    return sum.toFixed(2)
}

while((line = read_line()) != ''){
  let arr = line.split(' ')
  let m = parseInt(arr[0])
  let n = parseInt(arr[1])
  let sum = getSum(m, n)
  console.log('m', m)
  console.log('n', n)
  console.log('sum', sum)
}