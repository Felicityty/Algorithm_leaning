# 2023.7.2

[剑指 Offer 05. 替换空格](https://leetcode.cn/problems/ti-huan-kong-ge-lcof/)

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

