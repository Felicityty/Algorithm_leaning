/*
 * @Author: Felicity💪
 * @Date: 2023-09-19 21:33:21
 * @LastEditTime: 2023-09-19 22:09:30
 */

// url 解析函数

// https://q.shanyue.tech/fe/js/436

const url = "https://shanyue.tech?name=%E5%B1%B1%E6%9C%88&a=3#hash"

console.log(parseUrl(url))

function parseUrl(url) {
  // 这里挺严谨：取出夹杂在 ? 和 # 之间的字符串
  const queryStr = url.match(/\?([^/?#:]+)#?/)?.[1]
  if (!queryStr) {
    return {}
  }
  let queryObj = queryStr.split('&').reduce((pre, cur) => {
    const [_k, _v = ''] = cur.split('=')
    const k = decodeURIComponent(_k)
    const v = decodeURIComponent(_v)
    if (pre[k] !== undefined) {
      pre[k] = [].concat(pre[k], v)
    } else {
      pre[k] = v
    }
    return pre
  }, {})
  return queryObj
}