/*
 * @Author: Felicity💪
 * @Date: 2023-09-15 15:38:57
 * @LastEditTime: 2023-09-15 16:35:20
 */

// 1 时间转换
// const str = "2021-11-11 11:11:11"
// let res = ''

// let [dateStr, timeStr] = str.split(' ')
// let dateTemp = dateStr.split('-')
// let timeTemp = timeStr.split(':').map(Number)
// res += dateTemp[0] + '年' + dateTemp[1] + '月' + dateTemp[2] + '日 '
// res += timeTemp[0] + '时' + timeTemp[1] + '分' + timeTemp[2] + '秒'
// console.log(res)
// // 2021年11月11日 11时11分11秒

// 2 寻找数组中第k小的数字
// const [nums, k] = (await readline()).split(';')
// let temp = nums.slice(1, -1)
// let arr = temp.split(',').map(Number)
// arr.sort((a, b) => a - b)
// console.log(arr[parseInt(k) - 1])

// 3 实现一个轻量级状态管理系统
class Store {
  constructor(initialState) {
    this.state = initialState
    this.subscribes = []
  }

  getState() {
    console.log('Current state', this.state)
  }

  setState(newState) {
    console.log('newState', newState)
    Object.keys(newState).forEach(key => {
      this.subscribe(() => {
        this.state[key] = newState[key]
      })
    })
    this.notifyListeners()
    console.log('State changed:', this.state)
  }

  subscribe(listener) {
    this.subscribes.push(listener)
  }

  notifyListeners() {
    this.subscribes.forEach(item => {
      item()
    })
  }
}


const stateManager = new Store({ 'count': 0 })
stateManager.getState()
stateManager.setState({ count: 1, ooo: 3 })

