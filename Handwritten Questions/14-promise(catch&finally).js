/*
 * @Author: Felicity💪
 * @Date: 2023-08-18 15:34:38
 * @LastEditTime: 2023-08-18 15:46:28
 */

// 手写实现Promise.prototype.catch 和 Promise.prototype.reject
// 这俩其实就是.then的一个马甲，其实都是.then

// const promise1 = new Promise((resolve, reject) => {
//   throw new Error('Uh-oh!');
// });

// promise1.catch((error) => {
//   console.error(error);
// });

Promise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected)
}

const promise2 = new Promise((resolve, reject) => {
  reject('jiu shi cuo la')
  // throw new Error('hhhh')
})

promise2.catch((reason) => {
  console.log('reason', reason)
})

// -----------------------------------------------------

// function checkMail() {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       resolve('Mail has arrived');
//     } else {
//       reject(new Error('Failed to arrive'));
//     }
//   });
// }

// checkMail()
//   .then((mail) => {
//     console.log(mail);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     // 不论如何都会执行这里
//     console.log('Experiment completed');
//   });


Promise.prototype.finally = function (onFinally) {
  return this.then(onFinally, onFinally)
}

const promise3 = new Promise((resolve, reject) => {
  // resolve('调用一下finally呗')
  reject('调用一下finally呗')
})

promise3.finally((final) => {
  console.log('final', final)
})