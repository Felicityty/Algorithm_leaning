/*
 * @Author: Felicity💪
 * @Date: 2023-09-16 23:38:10
 * @LastEditTime: 2023-09-19 21:34:37
 */

// 手写发布订阅 + once函数

// 发布订阅
class EventEmitter {
  constructor() {
    this._events = {}
  }

  // 订阅
  on(eventName, callback) {
    if (this._events[eventName]) {
      // 放了一个钩子，如果其他地方想监听这个事件类的注册事件，就可以监听newListener实现
      // 新订阅者订阅时，发布者需要告诉订阅者订阅成功
      if (this.eventName !== "newListener") {
        this.emit("newListener", eventName)
      }
    }
    const callbacks = this._events[eventName] || []
    callbacks.push(callback)
    this._events[eventName] = callbacks
  }

  // 发布
  emit(eventName, ...args) {
    const callbacks = this._events[eventName] || []
    callbacks.forEach(cb => cb(...args))
  }

  // 单次订阅（第一次触发后或发生错误后立即取消订阅。一个事件仅触发一次）
  once(eventName, callback) {
    const one = (...args) => {
      callback(...args)
      this.off(eventName, one)
    }
    one.initialCallback = callback
    this.on(eventName, one)
  }

  // 取消订阅
  off(eventName, callback) {
    const callbacks = this._events[eventName] || []
    const newCallbacks = callbacks.filter(
      fn => fn != callback && fn.initialCallback != callback /* 在once执行前取消订阅 */)
    this._events[eventName] = newCallbacks
  }
}

const events = new EventEmitter()

events.on("newListener", function (eventName) {
  console.log(`eventName`, eventName)
})

events.on("hello", function () {
  console.log("hello")
})

let cb = function () {
  console.log('cb')
}
events.on("hello", cb)

events.off("hello", cb)

function once() {
  console.log("once")
}
events.once("hello", once)

events.off("hello", once)
events.emit("hello")
events.emit("hello")

// ----------------------------------

// https://blog.51cto.com/u_15524894/5057278

// once
// 需求：要求传入函数只能执行一次。且第二次及以后再调用时，仍会返回第一次执行的值
const addOnce = once(function (a, b) {
  return a + b
})

console.log(addOnce(1, 2))       // 3
console.log(addOnce(1, 2999))    // 依旧是 3

function once(fn) {
  let res
  return function (...args) {
    if (!fn) return res
    res = fn(...args)
    fn = undefined  // 第二次调用就把这里改掉了
    return res
  }
}

// 👉为啥用闭包：返回了一个绑定作用域的新函数，fn和res都是私有变量
