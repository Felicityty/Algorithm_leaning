
// 手写instanceof

// 右边变量的 prototype 在左边变量的原型链上
function myInstanceof(left, right) {
  while (true) {
    if (left === null) {
      return null
    }
    if (left.__proto__ === right.prototype) {
      return true
    }
    left = left.__proto__
  }
}

const person = {
  a: 1,
  b: 2
}

console.log(myInstanceof(person, Object))
