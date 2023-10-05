/*
 * @Author: Felicity💪
 * @Date: 2023-08-22 15:49:13
 * @LastEditTime: 2023-10-05 16:56:56
 */

// 还能干啥捏 学习的尽头就是重复 重复 碎碎念 碎碎念
// 稳定 - 冒泡 归并 基数 插入
const arr = [3, 4, 2, 5, 1, 2]

// 冒泡
// 从后往前，依次往上冒
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let flag = true
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
        flag = false
      }
    }
    if (flag) break
  }
  return arr
}
console.log('bubbleSort', bubbleSort(arr))

// 选择
// 逐个比较，找到最小，一次完成对调
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}
console.log('selectionSort', selectionSort(arr))

// 插入
// 左侧有序，右边依次插入
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let target = i
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[target]) {
        [arr[j], arr[target]] = [arr[target], arr[j]]
        target = j
      } else {
        break
      }
    }
  }
  return arr
}
console.log('insertionSort', insertionSort(arr))

// 快排
// 一个target， 小往左，大往右
function quickSort(arr, left, right) {
  if (right <= left) {
    return
  }
  let l = left, target = arr[l], r = right
  while (l < r) {
    while (l < r && arr[r] >= target) {
      r--
    }
    arr[l] = arr[r]
    while (l < r && arr[l] < target) {
      l++
    }
    arr[r] = arr[l]
  }
  arr[l] = target
  quickSort(arr, left, l - 1)
  quickSort(arr, l + 1, right)
  return arr
}
console.log('quickSort', quickSort(arr, 0, 5))

// en 这里哦 得给等于target的元素一个家 得有一边有等号 其他没问题👌

// 堆排序
// 创建大顶堆 交换元素 调整成大顶堆
function heapSort(arr) {
  createHeap(arr)
  // 堆顶元素一定是最大的 把它和未排序的最后一个元素换
  for (let i = arr.length - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]
    adjustFunc(arr, 0, i)
  }
  return arr
}

function createHeap(arr) {
  // 创建大顶堆 只要把非叶子节点从后往前全遍历一遍好像就行了
  let start = Math.floor(arr.length / 2) - 1
  for (let i = start; i >= 0; i--) {
    adjustFunc(arr, i, arr.length)
  }
}

function adjustFunc(arr, targetIndex, len) {
  // 传入要调整的节点 和 此时需要调整的二叉树长度（不是arr.length了）
  for (let i = targetIndex * 2 + 1; i < len; i = i * 2 + 1) {
    if (i + 1 < len && arr[i + 1] > arr[i]) {
      i++
    }
    if (arr[i] > arr[targetIndex]) {
      [arr[i], arr[targetIndex]] = [arr[targetIndex], arr[i]]
      targetIndex = i
    } else {
      break
    }
  }
}

console.log('heapSort', heapSort(arr))