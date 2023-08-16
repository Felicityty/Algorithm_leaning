var jump = function (nums) {
  let step = 0, curCover = 0, nextCover = 0
  for (let i = 0; i < nums.length - 1; i++) {
    nextCover = Math.max(nextCover, i + nums[i])
    if (i === curCover) {
      console.log('i', i, nextCover, step + 1)
      curCover = nextCover
      step++
    }
  }
  return step
}
console.log(jump([2, 2, 1, 1, 4]))