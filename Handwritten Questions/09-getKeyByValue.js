/*
 * @Author: Felicity💪
 * @Date: 2023-08-16 13:29:46
 * @LastEditTime: 2023-08-29 23:35:15
 */
// 好朋友三面宕机的一道题😨 可惜
// map 通过 value 获取 key

// 感觉这里用filter更好诶，是根据value找key，value会有相同的呀，key可以有很多个

function getKeyByValue(map, value, compare = ((a, b) => a === b)) {
  return Object.keys(map).filter(key => compare(map[key], value))
}

const subjectType = {
  'LB': '劳保',
  'XW': '消委',
  'GA': '公安',
  'GT': '国土',
  'CG': '城管',
  'GJJ': '公积金',
  'ZH': '综合',
}

console.log(getKeyByValue(subjectType, '综合'))