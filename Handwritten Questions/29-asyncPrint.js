/*
 * @Author: Felicity💪
 * @Date: 2023-09-17 22:42:14
 * @LastEditTime: 2023-09-17 22:46:44
 */

const sleep = function (delay, i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(i), delay)
  })
}

const start = async function () {
  for (let i = 0; i < 10; i++) {
    let res = await sleep(1000, i)
    console.log(res)
  }
}

start()