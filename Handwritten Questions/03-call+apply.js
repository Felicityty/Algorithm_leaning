/*
 * @Author: Felicity💪
 * @Date: 2023-08-17 15:13:57
 * @LastEditTime: 2023-09-14 12:28:05
 */
const Person = {
  name: 'ffff',
  sayHi() {
    console.log(`我是 ${this.name}`)
  }
}
const Person1 = {
  name: 'tttt'
}
Person.sayHi()
Person.sayHi.call(Person1)

// call 参数列表
Function.prototype.myCall = function (context = window, ...args) {
  if (this === Function.prototype) {
    return undefined
  }
  let fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}

Person.sayHi.myCall(Person1, 1, 2)

// apply 参数数组
Function.prototype.myApply = function (context = window, args = []) {
  if (this === Function.prototype) {
    return undefined
  }
  let fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}

Person.sayHi.myApply(Person1, [1, 2])

function mySymbol(obj) {
  let unique = (Math.random() + new Date.getTime()).toString(32).slice(0, 8)
  if (obj.hasOwnProperty(unique)) {
    return mySymbol(obj)
  } else {
    return unique
  }
}

// function(...args) {} 这样拿到的是数组
// 直接arguments拿到的是类数组

// 严谨地要给形参赋个初值