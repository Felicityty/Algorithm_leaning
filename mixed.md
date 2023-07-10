# 2023.7.2

[剑指 Offer 05. 替换空格](https://leetcode.cn/problems/ti-huan-kong-ge-lcof/) 【简单】

请实现一个函数，把字符串 `s` 中的每个空格替换成"%20"。

![image-20230703005609091](mixed.assets/image-20230703005609091.png)

```js
var replaceSpace = function(s) {
    s = s.split('')
    let originLen = s.length
    count = 0
    for (let i of s) {
        if(i === ' ') count++
    }
    let newLen = originLen + count*2
    for(let i=originLen-1, j=newLen-1; i>=0; i--, j--) {
        if(s[i] === ' ') {
            s[j] = '0'
            s[j-1] = '2'
            s[j-2] = '%'
            j -=2
        } else {
            s[j] = s[i]
        }
    }
    return s.join('')
};
```

```js
var replaceSpace = function(s) {
    return s.split(' ').join('%20')
};
```

```js
var replaceSpace = function(s) {
    let newS = ''
    for (let i of s) {
        if(i === ' ') {
            newS += '%20'
        } else {
            newS += i
        }
    }
    return newS
};
```



# 2023.7.3

[剑指 Offer 58 - II. 左旋转字符串](https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/) 【简单】

字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

```javascript
var reverseLeftWords = function(s, n) {
    let len = s.length
    s = s+s
    return s.slice(n, n+len)
};
```

```javascript
var reverseLeftWords = function(s, n) {
    return s.slice(n) + s.slice(0,n)
};
```



[剑指 Offer 20. 表示数值的字符串](https://leetcode.cn/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/) 【中等】

请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。

- 数值（按顺序）可以分成以下几个部分：

若干空格
一个 小数 或者 整数
（可选）一个 'e' 或 'E' ，后面跟着一个 整数
若干空格

- 小数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
下述格式之一：
至少一位数字，后面跟着一个点 '.'
至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
一个点 '.' ，后面跟着至少一位数字

- 整数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
至少一位数字

- 部分数值列举如下：

["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]

- 部分非数值列举如下：

["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]

```javascript
var isNumber = function(s) {
    let numFlag = false, dotFlag = false, eFlag = false
    s = s.trim()
    for(let i=0; i<s.length; i++) {
        if(s[i]>='0' && s[i]<='9') {
            numFlag = true
        } else if(s[i]==='.' && !dotFlag && !eFlag) {
            dotFlag = true
        } else if((s[i]==='e' || s[i]==='E') && !eFlag && numFlag) {
            eFlag = true
            numFlag = false // e后面必有数字
        } else if((s[i]==='+' || s[i]==='-') && (i===0 || s[i-1]==='e' || s[i-1]==='E')) {
            continue
        } else {
            return false
        }
    }
    return numFlag
};
```

暴力枚举



# 2023.7.4

[剑指 Offer 67. 把字符串转换成整数](https://leetcode.cn/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/) 【中等】

写一个函数 StrToInt，实现把字符串转换成整数这个功能。不能使用 atoi 或者其他类似的库函数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。

当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。

该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。

注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。

在任何情况下，若函数不能进行有效的转换时，请返回 0。

说明：

假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。

```javascript
var strToInt = function(str) {
    str = str.trim()
    let len = 0, flag = 1, start = 0, res=0
    if(str[0]==='-' || str[0]==='+') {
        start = 1
        if(str[0]==='-') {
            flag = -1
        }
    } else if(str[0]<'0' || str[0]>'9') {
        return 0
    }
    for(let i=start; i<=str.length; i++) {
        if(str[i]>='0' && str[i]<='9') {
            if(len<1 && str[i]==='0') start++
            else len++
        } else {
            break
        }
    }
    if(len>=1) res = flag*(str.slice(start,start+len))
    if(res>Math.pow(2,31)-1) return Math.pow(2,31)-1
    else if(res<-Math.pow(2,31)) return -Math.pow(2,31)
    return res
};
```

暴力枚举



[206. 反转链表](https://leetcode.cn/problems/reverse-linked-list/) 【简单】

给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。

![image-20230705010942869](mixed.assets/image-20230705010942869.png)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null || head.next === null) {
        return head
    }
    let last = reverseList(head.next)
    head.next.next = head
    head.next = null
    return last
};
```

又是你！可以



# 2023.7.5

[剑指 Offer 06. 从尾到头打印链表](https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/) 【简单】

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let res = []
    while(head!==null) {
        res.unshift(head.val)
        head = head.next
    }
    return res
};
```

唯一区别，这里需要返回的是一个数组



❗️[剑指 Offer 35. 复杂链表的复制](https://leetcode.cn/problems/fu-za-lian-biao-de-fu-zhi-lcof/) 【中等】 😱🤯我不会❗️救

请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

```javascript
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head, cachedNode=new Map()) {
    if (head === null) {
        return null;
    }
    if (!cachedNode.has(head)) {
        cachedNode.set(head, {val: head.val}), Object.assign(cachedNode.get(head), {next: copyRandomList(head.next, cachedNode), random: copyRandomList(head.random, cachedNode)})
    }
    return cachedNode.get(head)
};
```



# 2023.7.6

[剑指 Offer 03. 数组中重复的数字](https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/) 【简单】

找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

```javascript
var findRepeatNumber = function(nums) {
    let map = new Map()
    for (let i of nums) {
        if(map.has(i)) return i
        map.set(i,1)
    }
    return
};
```



[剑指 Offer 53 - I. 在排序数组中查找数字 I](https://leetcode.cn/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/) 【简单】

统计一个数字在排序数组中出现的次数。

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    function searchleftBinary(nums, target) {
        let left = 0, right = nums.length-1
        while(left<=right) {
            let mid = left+Math.floor((right-left)/2)
            if(nums[mid] === target) {
                right = mid -1
            } else if(nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return left
    }
    let left = searchleftBinary(nums, target)
    if(nums[left] === target) {
        for(let i = left; i<=nums.length; i++) {
            if(nums[i] !== target) {
            return i - left
            }
        }
    }
    return 0
};
```

也可以在定义一个找有边界的函数



[剑指 Offer 53 - II. 0～n-1中缺失的数字](https://leetcode.cn/problems/que-shi-de-shu-zi-lcof/) 【简单】

一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let left = 0, right = nums.length-1
    while (left <= right) {
        let mid = left + Math.floor((right-left)/2)
        if(nums[mid] <= mid) {
            left = mid + 1
        } else if (nums[mid] > mid) {
            right = mid - 1
        }
    }
    return left
};
```



# 2023.7.7

[剑指 Offer 04. 二维数组中的查找](https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/) 【中等】

在一个 n * m 的二维数组中，每一行都按照从左到右 非递减 的顺序排序，每一列都按照从上到下 非递减 的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true

给定 target = 20，返回 false

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    let m = matrix.length, n = matrix[0]?.length
    let x = 0, y = n - 1
    while(x<m && y>=0) {
        if(matrix[x][y] === target) {
            return true
        } else if(matrix[x][y] > target) {
            y--
        } else {
            x++
        }
    }
    return false
};
```



[剑指 Offer 11. 旋转数组的最小数字](https://leetcode.cn/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/) 【简单】

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为 1。  

注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

```javascript
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let left = 0, right = numbers.length-1
    while(left < right) {
        let mid = left + Math.floor((right - left)/2)
        if(numbers[mid] < numbers[right]) {
            right = mid
        } else if(numbers[mid] > numbers[right]) {
            left = mid + 1
        } else {
            right -= 1
        }
    }
    return numbers[left]
};
```

这题真还得想想



# 2023.7.8

[剑指 Offer 50. 第一个只出现一次的字符](https://leetcode.cn/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/) 【简单】

在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

```javascript
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    let map = new Map()
    let len = s.length
    for(let [i,ch] of Array.from(s).entries()) {
        if(map.has(ch)) {
            map.set(ch, -1)
        } else {
            map.set(ch, i)
        }
    }
    let first = len
    for(let index of map.values()) {
        if(index !== -1 && index<first) {
            first = index
        }
    }
    return first===len ? ' ' :s[first]
};
```

怎么这里还可以用lodash的呀

```javascript
var firstUniqChar = function(s) {
    const frequency = _.countBy(s);
    for (const ch of s) {
        if (frequency[ch] === 1) {
            return ch;
        }
    }
    return ' ';
};
```



[剑指 Offer 32 - I. 从上到下打印二叉树](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/) 【简单】

从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    let res  = []
    if(root === null) return res
    let queue = [root]
    while(queue.length) {
        let n = queue.length
        while(n--) {
            let cur = queue.shift()
            res.push(cur.val)
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
        }
    }
    return res
};
```

就是喜欢层次遍历



# 2023.7.9

[剑指 Offer 32 - II. 从上到下打印二叉树 II](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/) 【简单】

从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = []
    if(root === null) return res
    let queue = [root]
    while(queue.length) {
        let n = queue.length
        let level = []
        while(n--) {
            let cur = queue.shift()
            level.push(cur.val)
            cur.left && queue.push(cur.left) 
            cur.right && queue.push(cur.right) 
        }
        res.push(level)
    }
    return res
};
```



[剑指 Offer 32 - III. 从上到下打印二叉树 III](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/) 【简单】

请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = []
    let isLeft = true
    if(root === null) return res
    let queue = [root]
    while(queue.length) {
        let n = queue.length
        let level = []
        while(n--) {
            let cur = queue.shift()
            if(isLeft) {
                level.push(cur.val)
            } else {
                level.unshift(cur.val)
            }
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
        }
        res.push(level)
        isLeft = !isLeft
    }
    return res
};
```



[剑指 Offer 26. 树的子结构](https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/) 【中等】

输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if(!A || !B) return false
    function dfs(A, B) {
        if(B === null) return true
        return A ? A.val===B.val && dfs(A.left, B.left) && dfs(A.right, B.right):false
    }
    return dfs(A,B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};
```

❗️看了题解的



# 2023.7.10

[剑指 Offer 27. 二叉树的镜像](https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof/) 【简单】

请完成一个函数，输入一个二叉树，该函数输出它的镜像。

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if(root === null) return null
    let left = mirrorTree(root.left)
    let right = mirrorTree(root.right)
    root.left = right
    root.right = left
    return root
};
```



[剑指 Offer 28. 对称的二叉树](https://leetcode.cn/problems/dui-cheng-de-er-cha-shu-lcof/) 【中等】

请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return check(root, root)
    function check(left, right) {
        if(left === null && right === null) return true
        else if(left === null || right === null) return false
        return left.val===right.val && check(left.left,right.right) && check(left.right, right.left)
    }
};
```

