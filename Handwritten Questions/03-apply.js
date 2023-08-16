/*
 * @Author: Felicity💪
 * @Date: 2023-08-16 16:03:45
 * @LastEditTime: 2023-08-16 16:31:04
 */

const Person = {
  name: 'dddd',
  sayHi() {
    console.log(`Hello, I am ${this.name}`)
  },
}

Person.sayHi()

const Person1 = {
  name: 'hhhh',
}

Person.sayHi.apply(Person1)

Function.prototype.myApply = function (context = window, args = []) {
  if (this === Function.prototype) {
    return undefined
  }
  let fn = Symbol()
  context[fn] = this
  let result = context[fn](...args)
  delete context[fn]
  return result
}

Person.sayHi.myApply(Person1)