/*
 * @Author: Felicity💪
 * @Date: 2023-08-20 16:52:27
 * @LastEditTime: 2023-08-20 20:08:53
 */

// 手写几种排序
// 稳定的：冒泡、基数、插入、归并（排序前后，两个相等的数位置不变）

// 冒泡排序
// 从后往前 两两比较 依次往上冒
function bubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let flag = true
    for (let j = len - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
        flag = false
      }
    }
    if (flag) break
  }
  return arr
}

console.log('bubbleSort', bubbleSort([3, 4, 2, 5, 1, 2]))

// --------------------------------------------------

// 选择排序
// 逐个比较，找到最小，一次完成对调
function selectionSort(arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr
}

console.log('selectionSort', selectionSort([3, 4, 2, 5, 1, 2]))

// --------------------------------------------------

// 插入排序
// 左侧有序，往左一个个找位置
function insertionSort(arr) {
  let len = arr.length
  for (let i = 1; i < len; i++) {
    let target = i
    for (let j = i - 1; j >= 0; j--) {
      if (arr[target] < arr[j]) {
        [arr[target], arr[j]] = [arr[j], arr[target]]
        target = j
      } else {
        break
      }
    }
  }
  return arr
}

console.log('insertionSort', insertionSort([3, 4, 2, 5, 1, 2]))

// --------------------------------------------------

// 快速排序
// 设置一个target，小往左，大往右
let arr = [3, 4, 2, 5, 1, 2]
function quickSort(arr, start, end) {
  if (end - start < 1) {
    return arr
  }
  let target = arr[start]
  let l = start, r = end
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
  quickSort(arr, start, l - 1)
  quickSort(arr, l + 1, end)
  return arr
}

console.log('quickSort', quickSort([3, 4, 2, 5, 1, 2], 0, 5))

// --------------------------------------------------

// 堆排序
// 构建大顶堆 -> 交换堆顶和当前最后一个 -> 对之前的进行下沉
function heapSort(arr) {
  creteHeap(arr)
  for (let i = arr.length - 1; i > 0; i--) {
    // 交换首尾 调整其他
    [arr[0], arr[i]] = [arr[i], arr[0]]
    adjust(arr, 0, i)
  }
  return arr
}

function creteHeap(arr) {
  // 构建大顶堆
  let len = arr.length
  let start = Math.floor(len / 2) - 1
  for (let i = start; i >= 0; i--) {
    adjust(arr, i, len)
  }
}

function adjust(arr, target, len) {
  // 下沉操作 从后往前 但是当非叶子节点的子节点也是非叶子节点时，从前往后再继续一遍下沉操作
  for (let i = target * 2 + 1; i < len; i = i * 2 + 1) {
    if (i + 1 < len && arr[i] < arr[i + 1]) {
      i++
    }
    if (arr[target] < arr[i]) {
      [arr[target], arr[i]] = [arr[i], arr[target]]
      target = i // 当前节点的子节点也是非叶子节点
    } else {
      break
    }
  }
}

console.log('quickSort', heapSort([3, 4, 2, 5, 1, 2]))

// 堆排序真还挺难的 重复重复叭