/*
 * @Author: Felicity💪
 * @Date: 2023-10-12 23:18:41
 * @LastEditTime: 2023-10-16 23:57:41
 */

// 一面

// 1 - 八位小写字母和数组组合的密码，并以字母开头
function getPassword() {
  let str = (Math.random() + new Date().getTime()).toString(32).slice(0, 8).toLocaleLowerCase()
  let strArr = str.split('')
  if (parseInt(strArr[0]) >= 0 && parseInt(strArr[0]) <= 9) {
    strArr[0] = String.fromCharCode((Math.random() * 27 + 97).toString())
  }
  return strArr.join('')
}
console.log(getPassword())

console.log('--------------------')

// 新奇的思路被夸了，❤️Symbol救我

// 2 - 看题输出

const promise1 = new Promise((resolve, reject) => {
  console.log('Promise1');
  resolve('Resolved!');
});
const promise2 = new Promise((resolve, reject) => {
  console.log('Promise2');
  reject('Rejected!');
});
console.log('Start');
Promise.all([promise1, promise2])
  .then(values => console.log(values))
  .catch(error => console.log(error));

// Promise1
// Promise2
// Start
// Rejected!

// promise1和promise2被创建，随即输出'Promise1'和'Promise1'
// 然后是'Start'
// 最后all立即失败，所以直接catch到error

// 没想到啊，这题败了，可惜

// 3 - 两栏布局，左边固定，右边自适应

// 说了好多种，还阔以

console.log('--------------------')

// 二面

function A() { }
A.prototype.x = 10;
var a1 = new A();
A.prototype = { x: 20, y: 30 };
var a2 = new A();
console.log(a1.x); // 10
console.log(a1.y); // undefined
console.log(a2.x); // 20
console.log(a2.y); // 30

// 这里说对了，面试官也看出了我的不确定

console.log('--------------------')

function B() { }
B.prototype.x = 10;
var b1 = new B();
B.prototype.y = 40;
var b2 = new B();
console.log(b1.x); // 10
console.log(b1.y); // 40
console.log(b2.x); // 10
console.log(b2.y); // 40

// 提示后说对了，被js继承拷打，说得畏畏缩缩，这块原理真得补补

// 一天三面的奇妙体验
// 🦙，让我许个愿叭🙏


// 补充一道Promise
new Promise(resolve => {
  resolve(new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
      console.log(2) // 同步的
    })
  }))
}).then(() => {
  console.log(5)
})
console.log(3)
setTimeout(() => {
  console.log(4)
})

// 3
// 2
// 5
// 4
