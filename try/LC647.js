/*
 * @Author: Felicity💪
 * @Date: 2023-10-10 03:08:20
 * @LastEditTime: 2023-10-10 03:26:12
 */

var countSubstrings = function (s) {
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < 2 * n - 1; ++i) {
    console.log('i', i)
    let l = i / 2, r = i / 2 + i % 2;
    console.log('l', l, 'r', r)
    // 如果是小数，charAt()采用的是Math.floor()
    while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
      --l;
      ++r;
      ++ans;
    }
    console.log('ans', ans)
    console.log('------------')

  }
  return ans;
}

console.log(countSubstrings('bccb'))