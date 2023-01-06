# JS的刷题路

## 1.1 数组&链表

### 【数组】

2022.11.30

### 1 前缀和：

🌟 **原始数组不会被修改的情况下，频繁查询某个区间的累加和**

✔ **一次把所有从一开始到本数的累加值计算出来存在一个新数组里，区间的累加值通过减法得出**

[303.区域和检索 - 数组不可变](https://leetcode.cn/problems/range-sum-query-immutable/) 【简单】

就是利用前缀和，不用让代码每一个都遍历一次，直接后减前就行

1️⃣ js在定义一个函数之后，同时也得到了一个同名的类，这里的NumArray也是作为了一个类

2️⃣ js中类的方法都存在原型中，要修改类的原型就得用通过类.prototype属性去修改

3️⃣ 方法中的this代表的是实例化后的对象

[304.⼆维区域和检索 - 矩阵不可变](https://leetcode.cn/problems/range-sum-query-2d-immutable/) 【中等】

这道题和上面那道真是一模一样，只是变成二维的了，不能简单的后减前，要通过几块的和加加减减才能出来

和上一题一样，还不是很懂this

👇 **建立初值全为0的二维数组**

`this.sums = new Array(m+1).fill(0).map(()=> new Array(n+1).fill(0));`



2022.12.1

### 2 差分数组：

🌟 **频繁对原始数组的某个区间的元素进⾏增减**

✔ **把每个数与前一个数的差值计算出来存在一个新数组里，区间的加减通过把新数组中区间开始下标的值加/减，区间结束下标对应的值减/加（反一下，因为最后每个数都是通过前一个值得出的）**

[1109.航班预订统计](https://leetcode.cn/problems/corporate-flight-bookings/)

就是先定义一个差值数组，所有加的操作先在差值数组中进行，再利用这个差值数组通过第一项，继续推出后面的所有数

[1094.拼车](https://leetcode.cn/problems/car-pooling/)

先定义一个差值数组，所有加减操作先在差值数组中进行，再利用这个差值数组通过第一项，继续推出后面的所有数，只要所有元素都比capacity小就行

1️⃣ **const**

​	const声明的变量，不可以修改

​	const声明的数组，数组的元素是可以修改的

​	const声明的对象，对象的属性也是可以修改的

2️⃣ **新建数组**

`const 数组名 = new Array(数组长度).fill(初值);`

3️⃣ **[].every(条件)**

​	返回的是boolean



### 【链表】

2022.12.2

### 1 合并两个有序链表

[21.合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/)

1 迭代

先定义一个哑结点dummy和一个和dummy相同的游标p，只要l1和l2不为空，比较l1和l2的值，较小的就拼接到结果链表的结尾，并让l1/l2指向下一节点，游标p同时也指向结果链表的结尾，以此类推…… 直到l1或l2一方为空，然后全部拼接到结果链表后面，最后返回dummy.next，意在跳过一开始的空节点

2 递归

如果l1或l2为空，就返回另外那个，如果l1小于l2，递归参数为l1.next和l2并赋给l1.next，反之同理

**🌟 哑结点dummy应用场景：**

**需要创造一条新链表（链表合并/链条分解……）**



2022.12.3

### 2 单链表的分解

[86.分隔链表](https://leetcode.cn/problems/partition-list/submissions/)

思路是先分开为两个新链表，然后再连成一个。所以先定义两个哑结点并分别对应两个游标，然后去遍历原始链表，如果小于设定值x就放到p1里面去，反之放p2，遍历完后，把p2.next置空，再把这两个链表相连，返回的是dummy1.next（因为要跳过一开始的哑结点）

🌟 **链表注意点：**

1、用 **const** 定义 **dummy** 这个哑结点，用 **let** 定义 **p** 这个游标（dummy是标记开头的，p是会往后的）

2、链表最后一定要记得**手动置空**，不然这道题有些地方会节点成环`p2.next = null`



2022.12.4/5

### 3 合并 k 个有序链表

[23.合并 k 个升序链表](https://leetcode.cn/problems/merge-k-sorted-lists/)

1 顺序合并，每次都看作合并两个有序链表，就是去遍历一遍链表数组，其余跟[21.合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/)同

2 分治合并（归并），同上，只是不是按顺序的两两合并，也用到了递归，比上一种方法在时间上会更快一些

3 暴力求解，把所有链表的值拿出来放到一个数组里去，数组升序排序，再把数组的值连成一个新的链表

4 优先队列 😭😭😭 遗留！ **❌1**

感觉和暴力求解可能差不多❓❓❓ 实在解不出来，留个小问题在这里吧



2022.12.6

### 4 单链表的倒数第 k 个节点

[19.删除链表的倒数第N个结点](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)

要求：只遍历一遍，链表有多长未知

因为没有给头结点，我们就先定义一个哑结点，作为链表的头结点。要删除倒数第n个结点，就要先找到倒数第n+1个结点x，然后再用x.next = x.next.next删掉倒数第n个。

封装一个找倒数第k个结点的函数，传入头结点和k。先定义两个指针p1和p2都指向头结点，先让p1走k步，然后p1和p2一起走，直到p1===null，即两个指针一起走了n-k步，所以p2就指向了正数第n-k+1个结点，即为倒数第k个

🌟 **链表注意点：**

1、设链表有n个结点，倒数第k个结点，就是正数第n-k+1个结点

2、链表最后都会接一个空指针



### 5 单链表的中点

[876.链表的中间结点](https://leetcode.cn/problems/middle-of-the-linked-list/)

要求：只遍历一遍，链表有多长未知

【快慢指针】：

慢指针走一步，快指针走两步，当快指针走到链表末尾时，慢指针就走到了链表的中点

👉 **注意：**

**这里可以继续前进的条件是，当前快指针和当前快指针的下一个结点都非空** -> 当有两个中间结点时，找出来的是后一个

如果题目要求在两个中间结点的时候，返回前一个中间结点，此时快指针可以前进的条件改为：**当前快指针的下一个结点和当前快指针的下下一个结点都非空**



2022.12.7

### 6 判断链表是否包含环

还是用【快慢指针】，每当慢指针 slow 前进⼀步，快指针 fast 就前进两步
**如果 fast 最终遇到空指针，说明链表中没有环；如果 fast 最终和 slow 相遇，那肯定是 fast 超过了slow ⼀圈，说明链表中含有环**

```js
boolean hasCycle(ListNode head) {
// 快慢指针初始化指向 head
    ListNode slow = head, fast = head;
    // 快指针⾛到末尾时停⽌
    while (fast != null && fast.next != null) {
        // 慢指针⾛⼀步，快指针⾛两步
        slow = slow.next;
        fast = fast.next.next;
        // 快慢指针相遇，说明含有环
        if (slow == fast) {
            return true;
        }
    }
    // 不包含环
    return false;
}
```

👇 计算环的起点

```js
ListNode detectCycle(ListNode head) {
    ListNode fast, slow;
    fast = slow = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) break;
    }
    // 上⾯的代码类似 hasCycle 函数
    // 这里有两种情况运行到这里嘛 1 break 2 指向null了
    if (fast == null || fast.next == null) {
        // fast 遇到空指针说明没有环
        return null;
    }
    // 重新指向头结点
    slow = head;
    // 快慢指针同步前进，相交点就是环起点
    while (slow != fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}
```



2022.12.8

### 7 两个链表是否相交

[160.相交链表](https://leetcode.cn/problems/intersection-of-two-linked-lists/)

先定义p1和p2两个游标。当p1和p2不相等时，p1就遍历A链表，遍历完了就遍历B链表，p2同理遍历B链表，遍历完了就遍历A链表。因为p1和p2相等的话，只有有两种情况，一是有交点，指向交点，二是无交点，都指向null。

👉 这里有两个容易混乱的点：

1️⃣ 首先，要明确不论是否有交点，遍历完一条链表后转向遍历另一条，两个游标是会以同样进度遍历到有交点处或是遍历到最后的null节点的。

- 当两个链表有交点时，最后会同时指向交点终止循环

- 当两个链表无交点时，最后会同时指向null终止循环

2️⃣ 并且，这里的循环也只会改转向另一条链表一次，不会无限地转变



### 8 反转链表

#### 1）反转整个

[206.反转链表](https://leetcode.cn/problems/reverse-linked-list/)

#### 2）反转部分

[92.反转链表 II](https://leetcode.cn/problems/reverse-linked-list-ii/)

反转部分 = 递归成反转前n个

反转前n个的逻辑比较难想，举个例子👇

![image-20230105225738910](USING JS.assets/image-20230105225738910.png)

```js
var reverseBetween = function(head, left, right) {
    // 这里很好理解哦 就是一直递归 直到变成反转前n个链表元素的情况
    if(left === 1) {
        return reverseN(head, right)
    }
    head.next = reverseBetween(head.next, left-1, right-1)
    return head
};

// successor 就是记录后驱结点的 之后就可以连起来了
let successor = null
var reverseN = function(head, n) {
    // 这里就是head已经指向3了，让successor指向4
    if(n === 1) {
        // successor后面连着的4->5->6
        // 这步不写的话，最后返回的值就没有4->5->6了
        successor = head.next
        return head
        // 这里是3->4->5->6
    }
    // 递归成以head.next为起点，反转成前n-1个结点
    let last = reverseN(head.next, n-1)
    head.next.next = head
    head.next = successor
    return last
}
```





## 1.2【双指针】

2022.12.9

### 1 快慢指针

[26.删除有序数组中的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/)

初始化快指针fast和慢指针slow

当fast指针小于数组长度时

​		判断fast指向的值和slow指向的值是否相等

​				如果相等，slow指针后移一位，并把fast指向的值给slow

​		fast的指针后移

返回的是slow+1（因为要的是数组长度）

注意：

1️⃣ 这里一定要提前判断数组是否为空，如果为空就直接返回0，如果不判断的话结果会出错返回1

2️⃣ 这道题可以这样做很大程度上是因为数组本身是有序的，可以体会一下

👉 **原地修改**

​		不要新建其他数组，在原数组上进行修改



[83.删除排序链表中的重复元素](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/)

跟第26题的思路完全一模一样，只是从数组变成了链表

这里是返回链表，所以最后要断开slow之后的连接



2022.12.11

[27.移除元素](https://leetcode.cn/problems/remove-element/)

定义一个慢指针slow和一个快指针fast

当fast小于数组长度

​		fast不等于要删除的数

​				fast的值赋给当前的slow，slow后移一个

​		fast后移一个（不管fast是否等于要删除的数）

返回的数组长度就是slow



[283.移动零](https://leetcode.cn/problems/move-zeroes/)

跟上一题一样，利用上一题的算法，默认val就是0，移除数组中的所有0，再把数组中slow指针之后的全改成0



❗❗❗ 还可以用滑动窗口做，先遗留着 **❌2**



### 2 左右指针的常用算法

**1、二分查找**

```js
int binarySearch(int[] nums, int target) {
    // ⼀左⼀右两个指针相向⽽⾏
    int left = 0, right = nums.length - 1;
    while(left <= right) {
        int mid = (right + left) / 2;
        if(nums[mid] == target)
            return mid;
        else if (nums[mid] < target)
            left = mid + 1;
        else if (nums[mid] > target)
            right = mid - 1;
    }
    return -1;
}
```



**2、两数之和**

[167.两数之和2 - 输入有序数组](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/)

两个指针一左一右

如果sum比target小，左边指针往右移

如果sum比target大，右边指针向左移

上面的right++和left-- 是要想象一下那个倒三角的搜索空间的



**3、反转数组**

[344.反转字符串](https://leetcode.cn/problems/reverse-string/)

左右两指针相向而行，前后交换，左指针右移，右指针左移，直到两指针重合



**4、回文串判断**

[5.最长回文子串](https://leetcode.cn/problems/longest-palindromic-substring/)

让左右指针从中心向两端扩展

先定义一个找回文串的函数，从中间开始判断，向两端扩展

会有两种情况：当l和r相同，回文串长度为奇数；当l和r为相邻两数，回文串长度为偶数

主函数中，定义一个变量记录最长的回文串，遍历给定的字符串的每个字符，按照两种情况都寻找，找到最长的就赋给记录变量



2022.12.26

### 3 滑动窗口

🌟 先上一个js模版：

```js
var slidingWindow = function(s) {
    const window = new Map()
    let left = 0, right = 0
    while(rigth < s.length) {
        // 拿到right的对应字符，并自增扩大窗口
        let c = s[right]
        right++
        // 对窗口的更新操作
        …………
        
        // 判断左侧窗口是否需要收缩
        while(window needs shink condition) {
            // 拿到left对应的字符，是要被移出去的，故left还需自减
            let d = s[left]
            left++
            // 对窗口的更新操作
            …………
        }
    }
}
```



[76.最小覆盖子串](https://leetcode.cn/problems/minimum-window-substring/)

1️⃣ 定义两个map对象，need用来存储字符串t每个字符的个数，window作为滑动窗口中的每个字符的个数

2️⃣ 遍历s，统计情况存储在need中

3️⃣ 定义左右指针left和right，变量valid记录几个字符达到need的数量了，start表示最优的滑动窗口开始处，len表示最优的滑动窗口的大小

4️⃣ 设置一个while循环，当右指针不到s的最后时：

​	自增窗口：

​		拿到right对应的字符，并扩大窗口

​		如果need里有该字符：

​			该字符在window中数量加1

​			如果该字符在window中的数量和在need中的数量相等：

​			valid自增，表示多一个字符达到了要求数量

​	自减窗口（当valid等于need的大小才进行以下步骤）：

​		先判断是否为此时最优解，滑动窗口大小小于len：

​			更新start和len值

​		拿到left对应的字符，并减小窗口

​		如果need中有该字符：

​			判断该字符在window中的数量和在need中的数量相等：（因为下一步就要把它的数量减少了）

​				valid自减，这遍循环结束就退出循环了

​			该字符在window中的数量减1

5️⃣ 如果len的值为初始设置的最大值，输出空字符串，否则截取最优的滑动窗口



2022.12.27

[567.字符串的排列](https://leetcode.cn/problems/permutation-in-string/)

[438.找到字符串中所有字母异位词](https://leetcode.cn/problems/find-all-anagrams-in-a-string/)

[3.无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)



2023.1.2

[392.判断子序列](https://leetcode.cn/problems/is-subsequence/) 很简单



2022.12.28

## 【二分查找】

**框架：**

```js
var binarySearch = function(nums, target) {
    let left = 0, right = ...;
    while(...) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            ...
        } else if (nums[mid] < target) {
            left = ...
        } else if (nums[mid] > target) {
            right = ...
        }
    }
    return ...;
}
```



### 1 寻找一个数

```js
var binarySearch = function(nums, target) {
    let left = 0;
    let right = nums.length - 1; // 注意
    while(left <= right) {
        let mid = left + (right - left) / 2;
        if(nums[mid] == target)
            return mid;
        else if (nums[mid] < target)
            left = mid + 1; // 注意
        else if (nums[mid] > target)
            right = mid - 1; // 注意
    }
    return -1;
}
```

[704.二分查找](https://leetcode.cn/problems/binary-search/)

1、通过right的赋值可以看出循环的搜索区间的开闭：

👉 `right = nums.length` 则说明是左闭右开，while里面就应该是<，while(left < right) 终⽌的条件是 left === right，此时搜索区间 [left, left) 为空，所以可以正确终⽌

这里应该是 left = mid + 1，right = mid。因为我们的「搜索区间」是 [left, right) 左闭右开，所以当 nums[mid] 被检测之
后，下⼀步应该去 mid 的左侧或者右侧区间搜索，即 [left, mid) 或 [mid + 1, right)

👉 `right = nums.length - 1` 则是左闭右闭，while里面就应该是<=，while(left <= right) 终⽌的条件是 left === right+1，此时搜索区间 [right+1, right) 为空，所以可以正确终⽌

这里应该是 left = mid + 1，right = mid - 1

2、怎样搜索左边界：

```js
if (nums[mid] === target)
    right = mid;
```

找到 target 时不要⽴即返回，⽽是缩⼩「搜索区间」的上界 right，在区间 [left, mid) 中继续搜索，即不断向左收缩，达到锁定左侧边界的⽬的



### 2 寻找左侧边界的二分搜索

```js
var left_bound = function(nums, target) {
    let left = 0, right = nums.length - 1;
    // 搜索区间为 [left, right]
    while (left <= right) {
        let mid = left + (right - left) / 2;
        if (nums[mid] < target) {
            // 搜索区间变为 [mid+1, right]
            left = mid + 1;
        } else if (nums[mid] > target) {
            // 搜索区间变为 [left, mid-1]
            right = mid - 1;
        } else if (nums[mid] == target) {
            // 收缩右侧边界
            right = mid - 1;
        }
    }
    // 判断 target 是否存在于 nums 中
    // 此时 target ⽐所有数都⼤，返回 -1
    if (left == nums.length) return -1;
    // 判断⼀下 nums[left] 是不是 target
    return nums[left] == target ? left : -1;
}
```



### 3 寻找右侧边界的二分搜索

```js
var right_bound = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = left + (right - left) / 2;
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
        // 这⾥改成收缩左侧边界即可
            left = mid + 1;
        }
    }
    // 最后改成返回 left - 1
    if (left - 1 < 0) return -1;
    return nums[left - 1] == target ? (left - 1) : -1;
}
```



ps：这里注意哦，寻找左右边界的循环结束条件都是`left === right+1`。寻找左边界最后返回left，就要单独判断一下是否向上越界；寻找右边界最后返回right，就要判断是否向下越界



### 1：

[704.二分查找](https://leetcode.cn/problems/binary-search/)

[852.山脉数组的封顶索引](https://leetcode.cn/problems/peak-index-in-a-mountain-array/)



### 2：

[35.搜索插入位置](https://leetcode.cn/problems/search-insert-position/)

[658.找到K个最接近的元素](https://leetcode.cn/problems/find-k-closest-elements/)

👇 这两题很像，要有敏锐的眼光看出来应该用二分。细节上有一些题意上的小差别，主要还是在f函数的定义上

[1011.在D天内送达包裹的能力](https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days/)

[875.爱吃香蕉的珂珂](https://leetcode.cn/problems/koko-eating-bananas/)



### 2+3：

[34.在排序数组中查找元素的第一个和最后一个位置](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)

[剑指offer 53-I.在排序数组中查找数字 I](https://leetcode.cn/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/) （统计出现次数）



### 3：

[剑指 Offer 53 - II. 0～n-1中缺失的数字](https://leetcode.cn/problems/que-shi-de-shu-zi-lcof/)



### 二维矩阵：

[240.搜索二维矩阵 II](https://leetcode.cn/problems/search-a-2d-matrix-ii/)

[74.搜索二维矩阵](https://leetcode.cn/problems/search-a-2d-matrix/)

74就是可以跟240一样，从右上角或者是从左下角一样开始搜索的，代码是完全一样的

74如果要用二分的话：

1️⃣ 可以转化为一个一维数组

2️⃣ 或者用两次二分，第一次找到行，第二次找





## 阶乘

[技巧](https://labuladong.github.io/algo/di-san-zha-24031/shu-xue-yu-659f1/jiang-lian-ae367/)

### 1、求阶乘后尾数0的数量

0的产生是一定是因为2*5产生的，所以就是找因数。并且，找的到因数5，必然找的到因数2与之搭配。题目转化为找因数5的个数

[172.阶乘后的零](https://leetcode.cn/problems/factorial-trailing-zeroes/)



### 2、求有几个阶乘的尾数为0的数量是k

[793.阶乘函数后K个零](https://leetcode.cn/problems/preimage-size-of-factorial-zeroes-function/)

这道题就是利用一个求阶乘尾数为0的数量的函数，再利用二分查找寻找到尾数为0的数量是k的左右边界，从而得出这样的数有多少个

`Number.MAX_VALUE` 表示 JS 中的 **最大值**



## 田忌赛马：

[870.优势洗牌](https://leetcode.cn/problems/advantage-shuffle/)

🌟 这道题有一个很巧妙的**排序下标**：

```js
const nums1 = [12, 24, 8, 32]
const n = nums1.length

let idx1 = new Array(n).fill(0)
for(let i=0; i<n; i++) {
  idx1[i] = i
}
idx1.sort((i, j) => nums1[i] - nums1[j])

console.log(idx1); // [2, 0, 1, 3]
```





---



# 遗留的---

二分+动态规划

[354.俄罗斯套娃信封问题](https://leetcode.cn/problems/russian-doll-envelopes/)

二分+链表双指针

[1201.丑数III](https://leetcode.cn/problems/ugly-number-iii/)



---





## 1.3 队列/栈

### 三道括号题

#### 1、判断有效括号

[20.有效的括号](https://leetcode.cn/problems/valid-parentheses/)

这道题的有一个很巧妙的地方，就是利用Map来判断左右括号是否匹配

遍历字符串s，如果存在右括号的键值c，根据这个键值去判断数组最后的元素是否为该键值对应的value值

因为js没有内置Stack，这里用数组模拟了一下栈的思想



#### 2、平衡括号串 I

[921.使括号有效的最少添加](https://leetcode.cn/problems/minimum-add-to-make-parentheses-valid/)

首先，千万不要思想简单，认为只要统计左右括号数，然后再计算差值的绝对值就行了。这里原字符串中的左括号一定是要在右括号之前的，否则都是需要插入的

所以思想还是栈，只是这里可以用计数来代替

以左括号为基准，计算对右括号的需求数need，并且统计不平衡时，需要插入的次数res





#### 3、平衡括号串 II

[1541.平衡括号字符串的最少插入次数](https://leetcode.cn/problems/minimum-insertions-to-balance-a-parentheses-string/)

这里基础思路跟上一题一样，以左括号为基准，计算对右括号的需求数need，遍历到一个左括号，need加2，遍历到一个右括号，need减一

但由于这道题也是一样，左括号必须在对应的两个连续右括号之前。所以当need的值为-1时，说明右括号多了，这里就需要在这个右括号之前加入一个左括号（res++），同时这里的的need值也要改为1，意思是这时还需要一个右括号

在遍历到左括号的时候，如果need为奇数，则说明这个左括号之前有一个右括号落单了，（其实也是上一段话的步骤后落下的那个右括号，没有找到第二右括号对应新添的**连续**左括号，这里的连续很重要，因为确定没有连续的了，所以必须会有要新插入的），所以这时需要插入一个右括号（res++），同时这个need的需求就没了（need--）









