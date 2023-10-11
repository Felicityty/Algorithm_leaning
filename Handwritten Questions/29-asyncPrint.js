/*
 * @Author: Felicity💪
 * @Date: 2023-09-17 22:42:14
 * @LastEditTime: 2023-10-11 21:20:39
 */

const sleep = function (delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay)
  })
}

const start = async function () {
  for (let i = 0; i < 10; i++) {
    let res = await sleep(1000)
    console.log(res)
  }
}

start()