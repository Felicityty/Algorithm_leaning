/*
 * @Author: Felicity💪
 * @Date: 2023-09-17 22:54:21
 * @LastEditTime: 2023-10-11 22:39:22
 */

// 继承(组合寄生)

// es5
// function A(name) {
//   this.name = name
// }

// A.prototype.getName = function () {
//   console.log(this.name)
// }

// function B(name, age) {
//   A.call(this, name)
//   this.age = age
// }
// B.prototype = Object.create(A.prototype)
// B.prototype.constructor = B
// B.prototype.getAge = function () {
//   console.log(this.age)
// }

// let b = new B('fff', 18)
// b.getName()
// b.getAge()
// console.log(b)

// ---------------------------------------
// es6
class A {
  constructor(name) {
    this.name = name
  }
  getName() {
    console.log(this.name)
  }
}

class B extends A {
  constructor(name, age) {
    super(name)
    this.age = age
  }
  getAge() {
    console.log(this.age)
  }
}

let b = new B('ttt', 20)
b.getName()
b.getAge()
console.log(b)