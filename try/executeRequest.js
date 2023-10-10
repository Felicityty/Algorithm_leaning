/*
 * @Author: Felicity💪
 * @Date: 2023-10-09 23:17:46
 * @LastEditTime: 2023-10-09 23:38:34
 */
class ConcurrentRequestManager {
  constructor(concurrencyLimit) {
    this.concurrencyLimit = concurrencyLimit; // 最大并发请求数量
    this.runningCount = 0; // 当前运行的请求数量
    this.queue = []; // 存放待执行的请求
    this.results = []; // 存放请求结果
  }

  async executeRequests(requests) {
    for (const request of requests) {
      // 将请求加入队列
      this.queue.push(request);
      this.runNextRequest();
    }
  }

  async runNextRequest() {
    if (this.runningCount < this.concurrencyLimit && this.queue.length > 0) {
      const request = this.queue.shift(); // 取出下一个请求
      this.runningCount++;

      try {
        const result = await request();
        console.log('result', result)
        this.results.push(result);
      } catch (error) {
        console.error(`请求失败: ${error}`);
      } finally {
        this.runningCount--;
        this.runNextRequest(); // 执行下一个请求
      }
    }
  }

  async waitUntilAllRequestsComplete() {
    while (this.runningCount > 0) {
      await new Promise((resolve) => setTimeout(resolve, 100)); // 等待所有请求完成
    }
    return this.results;
  }
}

// 示例用法
const request1 = () => new Promise(resolve => setTimeout(() => resolve('Request 1 Completed'), 1000));
const request2 = () => new Promise(resolve => setTimeout(() => resolve('Request 2 Completed'), 3000));
const request3 = () => new Promise(resolve => setTimeout(() => resolve('Request 3 Completed'), 500));
const request4 = () => new Promise((resolve, reject) => setTimeout(() => reject('Request 4 Failed'), 800));

const requests = [request1, request2, request3, request4];

const concurrentRequestManager = new ConcurrentRequestManager(2); // 最大并发请求数量为2
concurrentRequestManager.executeRequests(requests);
concurrentRequestManager.waitUntilAllRequestsComplete()
  .then(results => {
    console.log('所有请求完成:');
    console.log(results);
  })
  .catch(error => {
    console.error('请求执行出错:', error);
  });
