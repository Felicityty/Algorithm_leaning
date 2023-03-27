var __readline = require('readline-sync')
__readline.setDefaultOptions({prompt: ''})
var read_line = __readline.prompt

let n = -1
let length = -1
let arr1 = null
let arr2 = null
var line
while((line = read_line()) != '') {
  if (n < 0) n = parseInt(line)
  else if (length < 0) length = parseInt(line)
  else if (arr1 === null) arr1 = line.split(' ').map(i => parseInt(i))
  else {
    arr2 = line.split(' ').map(i => parseInt(i))
    const s = []
    for (let i = 0, j = 0; i < arr1.length; i++) {
      s.push(arr1[i])
      while (s.length && s[s.length - 1] === arr2[j]) {
        s.pop()
        j++
      }
    }

    console.log(s.length ? 'No' : 'Yes')
    arr1 = null
    arr2 = null
    length = -1
  }
};

// 3
// 3
// 1 2 3
// 1 2 3
// Yes
// 3
// 1 2 3
// 3 2 1
// Yes
// 3
// 1 2 3
// 3 1 2
// No