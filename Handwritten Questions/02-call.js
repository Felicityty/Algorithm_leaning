/*
 * @Author: Felicity💪
 * @Date: 2023-08-16 15:08:30
 * @LastEditTime: 2023-10-18 20:17:39
 */

let Person = {
  name: 'ffff',
  sayHi() {
    console.log('this', this)
    console.log(`hey, there. I'm ${this.name}`)
  }
}

let Person1 = {
  name: 'tttt'
}

// o~ 这里的改变this指向有点感觉😯
// 就是把调用call的函数先作为括号里的属性进行调用，之后再删掉
Person.sayHi()
Person.sayHi.call(Person1)

// TODO: arguments相关
// ...args 是把后面的参数列表的值，全部放到一个数组里去，原来的arguments是类数组
// let args = Array.prototype.slice().call(arguments)
// let args = [...arguments].slice()
Function.prototype.myCall = function (context = window, ...args) {
  // 防止直接Function.prototype.myCall()这样调用
  if (this === Function.prototype) {
    return undefined
  }
  const fn = Symbol()
  // 这里的this就是调用myCall的这个函数
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  // 这里result返回是undefined，因为sayHi这个函数没有给返回值呀，所以上面其实调用就行
  return result
}

Person.sayHi.myCall(Person1)


// 最后 万一一下 手写symbol 真严谨
function mySymbol(obj) {
  // 随机数+时间
  let unique = (Math.random() + (new Date).getTime()).toString(32).slice(0, 8)
  if (obj.hasOwnProperty(unique)) {
    return mySymbol(obj)
  } else {
    return unique
  }
}
