/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // 完全背包 组合
  let dp = new Array(s.length + 1).fill(false)
  dp[0] = true
  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      if (i - wordDict[j].length >= 0) {
        // if(s.slice(i - wordDict[j].length, i) === wordDict[j] && dp[i - wordDict[j].length]) {
        //     dp[i] = true
        // }
        if (s.slice(i - wordDict[j].length, i) === wordDict[j]) {
          dp[i] = dp[i - wordDict[j].length]
          console.log(wordDict[j])
          console.log('dp', dp)
        }
      }
    }
  }
  console.log(dp[s.length])
  return dp[s.length]
};

wordBreak("dogs", ["dog", "s", "gs"])