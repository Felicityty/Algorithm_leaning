/*
 * @Author: Felicity💪
 * @Date: 2023-08-18 18:01:07
 * @LastEditTime: 2023-08-18 18:09:41
 */
function red() {
  console.log('red')
}

function green() {
  console.log('green')
}

function yellow() {
  console.log('yellow')
}

function light(delay, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cb()
      resolve()
    }, delay)
  })
}

function step() {
  light(2000, green).then(() => {
    return light(3000, yellow)
  }).then(() => {
    return light(5000, red)
  }).then(() => {
    step()
  })
}

step()