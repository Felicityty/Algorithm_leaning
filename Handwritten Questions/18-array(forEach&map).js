/*
 * @Author: Felicity💪
 * @Date: 2023-08-20 15:50:36
 * @LastEditTime: 2023-08-20 16:33:30
 */

// 手写数组方法 forEach 和 map
// 🌟 总结：
// 两个参数：fn thisArg
// 三部分内容：
// 1、判断fn
// 2、判断 + Object this
// 3、遍历 call

// -----------------------------------------

// thisArg 参数用法(forEach为例)
const person = {
  name: 'Alice',
  greet: function () {
    console.log(`Hello, I'm ${this.name}`)
  }
};

const friends = ['Bob', 'Charlie', 'David']

// 在不使用thisArg的情况下，this将指向全局对象
friends.forEach(person.greet) // 输出：Hello, I'm undefined

// 使用thisArg参数将this指向person对象
friends.forEach(person.greet, person) // 输出：Hello, I'm Alice

// -----------------------------------------

Array.prototype.myForEach = function (fn, thisArg) {
  if (typeof fn !== 'function') {
    throw new Error(`${fn}不是函数`)
  }
  if ([undefined, null].includes(this)) {
    throw new Error('this 是 undefined 或 null')
  }
  let arr = Object(this) // 非严格模式会包装成一个对象
  for (let i = 0; i < arr.length; i++) {
    fn.call(thisArg, arr[i], i, arr)
  }
}

friends.myForEach(item => console.log(item))
friends.myForEach(person.greet, person)

// -----------------------------------------

console.log('---------')

Array.prototype.myMap = function (fn, thisArg) {
  let res = []
  if (typeof fn !== 'function') {
    throw new Error(`${fn}不是函数`)
  }
  if ([undefined, null].includes(this)) {
    throw new Error('this 是 undefined 或 null')
  }
  let arr = Object(this)
  for (let i = 0; i < arr.length; i++) {
    res[i] = fn.call(thisArg, arr[i], i, arr)
  }
  return res
}

const array1 = [1, 4, 9, 16]

const map1 = array1.myMap((x) => x * 2)

console.log(map1)


// -----------------------------------------

console.log('---------')

// 好像又是哪个悲惨的人遇到过的吧 提取具体类型
console.log(Object.prototype.toString.call(function () { }).slice(8, -1))
