/*
 * @Author: Felicity💪
 * @Date: 2023-10-22 01:11:21
 * @LastEditTime: 2023-10-22 01:11:32
 */

var a = { name: "julien" }
var b = a
// 这里的坑在于虽然b浅拷贝于a，但是下一句a换指向了，所以a和b的name没关系
a = { name: "showmebug", attribute: "company" }
b.name = "showmebug2"
console.log('a', a)
console.log('b', b)
function fn(obj) {
  // 参数传递是按值传递，这意味着在函数内部重新赋值参数并不会影响外部变量的引用
  // obj = { name: "showmebug3" }
  // 这样a的name就会改变，修改的是a和obj共同引用的那个对象的属性
  obj.name = "showmebug3"
}
fn(a)
console.log('a', a)
console.log('b', b)