/*
 * @Author: Felicity💪
 * @Date: 2023-08-20 14:51:45
 * @LastEditTime: 2023-08-20 15:02:41
 */
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  // 首先 这题是多次买卖 所以不用管具体啥时候买卖 跟之前一样 只要有获利就加起来
  let minPrice = prices[0], profit = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else if (prices[i] - minPrice > fee) {
      profit += prices[i] - minPrice - fee
      minPrice = prices[i] - fee
    }
  }
  return profit
};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2))