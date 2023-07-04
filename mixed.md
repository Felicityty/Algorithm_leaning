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

