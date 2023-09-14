/*
 * @Author: Felicity💪
 * @Date: 2023-08-21 15:17:52
 * @LastEditTime: 2023-09-14 13:47:38
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

async function sleep2(delay) {
  return await new Promise((resolve => setTimeout(resolve, delay)))
}

sleep2(1000).then(() => console.log(222))

async function sleepFunc(delay) {
  return await new Promise((resolve) => setTimeout(resolve, delay))
}
sleepFunc(1000).then(() => { console.log(111) })

// 3 new Date().getTime()