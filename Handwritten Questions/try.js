function red() {
  console.log('red')
}

function green() {
  console.log('green')
}

function yellow() {
  console.log('yellow')
}

function light(fn, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fn()
      resolve()
    }, delay)
  })
}

function step() {
  light(red, 1000)
    .then(() => {
      return light(green, 2000)
    })
    .then(() => {
      return light(yellow, 3000)
    })
    .then(() => {
      return step()
    })
}

step()