/*
 * @Author: Felicity💪
 * @Date: 2023-09-16 23:38:10
 * @LastEditTime: 2023-09-17 02:13:42
 */

// 手写发布订阅感觉还是挺多的诶

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
    const newCallbacks = callbacks.filter(fn => fn != callback && fn.initialCallback != callback /* 用于once的取消订阅 */)
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

