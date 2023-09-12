/*
 * @Author: Felicity💪
 * @Date: 2023-09-12 13:40:38
 * @LastEditTime: 2023-09-12 13:54:22
 */

function countDown() {
  let timer = null
  const startTime = new Date('2023-09-13 11:10:00')
  const curTime = new Date()
  let startDiff = parseInt((startTime.getTime() - curTime.getTime()) / 1000)
  let day = parseInt(startDiff / (24 * 60 * 60))
  let hour = parseInt(startDiff / (60 * 60) % 24)
  let minute = parseInt(startDiff / 60 % 60)
  let second = parseInt(startDiff % 60)
  console.log('startDiff', startDiff)
  if (startDiff >= 0) {
    console.log('rest', day, hour, minute, second)
    timer = setTimeout(countDown, 1000)
  } else {
    console.log('ended')
    clearTimeout(timer)
  }
}

countDown()