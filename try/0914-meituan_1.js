/*
 * @Author: Felicity💪
 * @Date: 2023-09-14 20:44:32
 * @LastEditTime: 2023-09-14 20:50:03
 */
// 1 将jquery $.ajax Promise化

// ajaxRequest接受3个参数，
// data为请求参数
// 当请求成功后，会将请求返回作为参数调用successCallback
// 当请求失败后，会将错误信息作为参数调用errorCallback
const ajaxRequest = (data, successCallback, errorCallback) => {
  $.ajax({
    url: "xxx",
    method: "POST",
    data,
    success: successCallback,
    error: errorCallback,
  });
};

// Implements
const request = (data) => {
  // 👉 code here
  return new Promise((resolve, reject) => {
    $ajax({
      url: "xxx",
      method: "POST",
      data,
      success: function (value) {
        resolve(value)
      },
      error: function (reason) {
        reject(reason)
      },
    });
  });
};

// 目标
request({ a: 1 }).then((res) => console.log(res)); // 获取成功返回
request({ a: 1 }).catch((err) => console.log(err)); // 获取错误信息