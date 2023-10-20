/*
 * @Author: Felicity💪
 * @Date: 2023-09-17 22:42:14
 * @LastEditTime: 2023-10-18 23:56:07
 */

const sleep = function (delay) {
  return new Promise((resolve, reject) => setTimeout(resolve, delay))
}

const start = async function () {
  for (let i = 0; i < 10; i++) {
    await sleep(1000)
    console.log(i)
  }
}

start()