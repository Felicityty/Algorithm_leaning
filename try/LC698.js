/*
 * @Author: Felicity💪
 * @Date: 2023-09-06 15:41:42
 * @LastEditTime: 2023-09-06 16:22:29
 */

var canPartitionKSubsets = function (nums, k) {
  if (k > nums.length) return false
  nums.sort((a, b) => b - a)
  console.log(nums)
  let sum = nums.reduce((a, b) => a + b)
  if (sum % k !== 0) {
    return false
  }
  let target = sum / k
  let buckets = new Array(k).fill(0)
  function backTracking(startIndex, buckets) {
    if (startIndex === nums.length) {
      for (let bucket of buckets) {
        return bucket === target ? true : false
      }
    }
    for (let i = 0; i < k; i++) {
      if (buckets[i] + nums[startIndex] > target) continue
      buckets[i] += nums[startIndex]
      if (backTracking(startIndex + 1, buckets)) return true
      buckets[i] -= nums[startIndex]
    }
    return false
  }
  return backTracking(0, buckets)
};

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4))