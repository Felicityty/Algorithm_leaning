/*
 * @Author: Felicity💪
 * @Date: 2023-08-17 18:14:32
 * @LastEditTime: 2023-08-17 20:38:08
 */
const Person = {
  name: 'ffff',
  sayHi() {
    console.log(`Hello, I am ${this.name}`)
  },
}

Person.sayHi()

const Person1 = {
  name: 'tttt',
}

const bindFunc = Person.sayHi.bind(Person1)
bindFunc()

// const alice11 = new bindFunc()

Function.prototype.myBind = function (context = window, ...args) {
  if (this === Function.prototype) {
    return new TypeError('error')
  }
  const _this = this
  return function F(...args2) {
    // 如果这个函数是当作构造函数调用的
    if (this instanceof F) {
      return new _this(...args, ...args2)
    }
    return _this.apply(context, args.concat(args2))
  }
}

const bindFunc2 = Person.sayHi.myBind(Person1, 1, 2)
bindFunc2()


function greet(message) {
  console.log(`${this.name} says ${message}`)
}

const person = {
  name: 'Alice'
}

const boundGreet = greet.bind(person, "Hello!")

boundGreet() // 输出：Alice says Hello!

const alice = new boundGreet() // 构造函数调用
