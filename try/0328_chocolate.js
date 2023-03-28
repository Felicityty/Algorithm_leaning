var __readline = require('readline-sync')
__readline.setDefaultOptions({prompt: ''})
var read_line = __readline.prompt

let n = -1, m = -1
let chocolates = null, packages = null
var line
while((line = read_line()) !== '') {
  if(n<0) [n, m] = line.split(' ').map(i => parseInt(i))
  else if(chocolates === null) chocolates = line.split(' ').map(i => parseInt(i))
  else {
    const ans = []
    packages = line.split(' ').map(i => parseInt(i))
    const chocolates_sum = []
    chocolates.reduce((prev, curr) => {
      chocolates_sum.push(prev+curr**2)
      return prev + curr**2
    }, 0)
    console.log('chocolates_sum', chocolates_sum)

    function dichotomiaLeft(arr, target) {
      let left = 0
      let right = arr.length - 1
      let middle = Math.floor((left + right) / 2)
      while (left <= right && arr[middle] !== target) {
        if (arr[middle] < target) left = middle + 1
        else if (arr[middle] > target) right = middle - 1;
        middle = Math.floor((left + right) / 2)
      }
      return middle
    }

    for (let pacakge of packages) {
      ans.push(dichotomiaLeft(chocolates_sum, pacakge) + 1)
    }
    console.log(ans.join(' ')) 
  }
}

// 5 5
// 1 2 2 4 5
// 1 3 7 9 15