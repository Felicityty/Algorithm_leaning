/*
 * @Author: Felicity💪
 * @Date: 2023-08-21 15:17:52
 * @LastEditTime: 2023-10-05 17:28:07
 */

// 手写延迟函数执行 sleep 函数

// 1 直接
function sleep(fn, delay) {
  setTimeout(() => {
    fn()
  }, delay)
}
console.log('start')
sleep(() => console.log(111), 1000)

// 2 用async await promise - 据说这样更优雅

function sleep2(delay) {
  return new Promise((resolve => setTimeout(resolve, delay)))
}

// sleep2(1000).then(() => console.log(222))

// async function sleepFunc(delay) {
//   return await new Promise((resolve) => setTimeout(resolve, delay))
// }
// sleepFunc(1000).then(() => { console.log(111) })

async function runFunc() { // ✅
  console.log(1)
  await sleep2(2000)
  console.log(2)
}
runFunc()

// 3 new Date().getTime()

function sleep3(delay) {
  let start = (new Date()).getTime()
  while ((new Date()).getTime() - start < delay) {
    continue
  }
}
function testFunc() {
  console.log(11)
  sleep3(2000)
  console.log(22)
}
testFunc()