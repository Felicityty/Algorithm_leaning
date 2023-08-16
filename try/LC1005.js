var largestSumAfterKNegations = function (nums, k) {
  let res = 0
  // 按绝对值降序排列
  nums.sort((a, b) => Math.abs(b) - Math.abs(a))
  console.log(nums)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      console.log('i', i, nums[i])
      nums[i] *= -1
      k--
    }
    res += nums[i]
  }
  console.log(nums)
  // 把负的全变正之后 还有的多 把绝对值最小那个变成负的就行了
  if (k % 2 === 1) {
    res -= nums[nums.length - 1] * 2
  }
  return res
}

console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2))