// 好朋友三面宕机的一道题😨 可惜
// map 通过 value 获取 key

function getKeyByValue(map, value, compare = ((a, b) => a === b)) {
  return Object.keys(map).find(key => compare(map[key], value))
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