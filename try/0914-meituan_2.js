/*
 * @Author: Felicity💪
 * @Date: 2023-09-14 23:28:02
 * @LastEditTime: 2023-09-15 22:40:46
 */

// 2 假设有以下数据结构
// const enum School {
//     A = 'A',
//     B = 'B',
//     C = 'C'
// }
// const enum Grade {
//   FIRST = '1st',
//   SECOND = '2nd',
//   THIRD = '3rd'
// }
// interface Student {
//   school: School;
//   grade: Grade;
//   class: string;
//   group: number;
// }

// 实现一个函数，把相同学校（school）、相同年级（grade）的学生归为一组
// type Output = {
//     [k in School]: {
//         [k in Grade]: Student[]
//     }
// };

// const result = {
//   A: {
//     ['1st']: [
//       {},
//       {}
//     ]
//   }
// }

const students = [
  { "group": 8, "class": "y", "school": "B", "grade": "2nd" },
  { "group": 7, "class": "r", "school": "A", "grade": "3rd" },
  { "group": 2, "class": "f", "school": "B", "grade": "2nd" },
  { "group": 8, "class": "w", "school": "B", "grade": "3rd" },
  { "group": 8, "class": "o", "school": "B", "grade": "2nd" },
  { "group": 2, "class": "c", "school": "B", "grade": "2nd" },
  { "group": 4, "class": "v", "school": "C", "grade": "2nd" },
  { "group": 7, "class": "s", "school": "B", "grade": "2nd" },
  { "group": 10, "class": "q", "school": "B", "grade": "2nd" },
  { "group": 6, "class": "b", "school": "B", "grade": "2nd" },
  { "group": 6, "class": "r", "school": "B", "grade": "2nd" },
  { "group": 10, "class": "d", "school": "A", "grade": "2nd" },
  { "group": 2, "class": "u", "school": "A", "grade": "3rd" },
  { "group": 2, "class": "t", "school": "A", "grade": "1st" },
  { "group": 2, "class": "r", "school": "C", "grade": "2nd" },
  { "group": 2, "class": "x", "school": "B", "grade": "2nd" },
  { "group": 3, "class": "r", "school": "A", "grade": "2nd" },
  { "group": 7, "class": "h", "school": "A", "grade": "2nd" },
  { "group": 2, "class": "b", "school": "B", "grade": "1st" },
  { "group": 7, "class": "t", "school": "B", "grade": "3rd" }
]

const divide = (list, key) => {
  return list.reduce((memo, item) => {
    const keyValue = item[key]
    if (!memo[keyValue]) {
      memo[keyValue] = [item]
    } else {
      memo[keyValue].push(item)
    }
    return memo
  }, {})
}

const divideN = (list, keys) => {
  if (keys.length === 0) {
    return list
  }
  const [key, ...restKeys] = keys
  const divided = divide(list, key)
  for (let groupKey in divided) {
    divided[groupKey] = divideN(divided[groupKey], restKeys)
  }
  return divided
}

const result = divideN(students, ['school', 'grade'])
console.log('result', result)

// 好吧 以前没思考过 当时那点儿时间确实写不出来
// 但是 下次要说一说自己的思路！