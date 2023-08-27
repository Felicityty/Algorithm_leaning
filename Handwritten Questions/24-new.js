/*
 * @Author: Felicity💪
 * @Date: 2023-08-26 19:17:31
 * @LastEditTime: 2023-08-26 19:41:46
 */

// 手写new

function Person(a, b) {
  this.a = a
  this.b = b
}
Person.prototype.getAB = function () {
  return `${this.a} ${this.b}`
}

const hhh = new Person('f', 'tt')
console.log('hhh', hhh.getAB())

// --------------------------------------------------

function _new(fn, ...args) {
  // 基于函数的原型去创建一个新的对象
  const obj = Object.create(fn.prototype)
  // 通过this将属性和方法添加到新创建的对象上，并获取函数执行的结果
  const res = fn.apply(obj, args)
  // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
  return res instanceof Object ? res : obj
}

const kkk = _new(Person, 'y', 'zz')
console.log('kkk', kkk.getAB())