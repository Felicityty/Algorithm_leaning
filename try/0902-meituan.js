/*
 * @Author: Felicity💪
 * @Date: 2023-09-07 21:30:22
 * @LastEditTime: 2023-09-07 21:41:43
 */

const n = 4
const ans = [3, 2, 1, 0]
let a = 0;
let b = 0;
for (let i = 0; i < n - 1; i++) {
  if (ans[i] > ans[i + 1]) {
    a = i;
    b = i + 1;
    break;
  }
}
console.log('a', a)
console.log('b', b)
const res = new Array(2 * n - 1).fill(0);
const num = 2000000000 - 1;
for (let i = 0; i < n; i++) {
  if (i === b) {
    res[2 * i] = ans[i];
  } else if (i > b) {
    res[2 * i - 1] = num;
    res[2 * i] = ans[i];
  } else if (i < b) {
    res[2 * i] = num;
    res[2 * i + 1] = ans[i];
  }
}
console.log(res.length);
console.log(res.join(' '));