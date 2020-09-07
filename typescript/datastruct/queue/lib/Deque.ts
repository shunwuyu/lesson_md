interface DequeObj {
  [propName: number]: any;
}

/**
* 双端队列
*     队首队尾添加删除获取元素、获取队列大小、清空队列、队列判空、获取队列中的所有元素
*/
export default class Deque {
  private count: number;
  private lowestCount: number;
  private items: DequeObj;
  constructor() {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
  }

  // 队首添加元素
  addFront(item: any) {
      if (this.isEmpty()) {
          this.addBack(item);
      } else if (this.lowestCount > 0) {
          // 队首元素大于0
          this.lowestCount--;
          this.items[this.lowestCount] = item;
      } else {
          // 队首元素为0，我们需要将将队列里的0号key空出来，其他数据整体向后移动一位。
          for (let i = this.count; i > 0; i--) {
              this.items[i] = this.items[i - 1];
          }
          // 队列长度自增
          this.count++;
          // 队首元素设为0
          this.lowestCount = 0;
          // 为队首的0号key添加当前元素
          this.items[0] = item;
      }
  }

  // 队尾添加元素
  addBack(item: any) {
      this.items[this.count] = item;
      this.count++;
  }

  // 移除队首元素
  removeFront() {
      if (this.isEmpty()) {
          return undefined;
      }
      const result = this.items[this.lowestCount];
      delete this.items[this.lowestCount];
      this.lowestCount++;
      return result;
  }

  // 移除队尾元素
  removeBack() {
      if (this.isEmpty()) {
          return undefined;
      }
      this.count--;
      const result = this.items[this.count];
      delete this.items[this.count];
      return result;
  }

  // 获取队首元素
  peekFront() {
      if (this.isEmpty()) {
          return undefined;
      }
      return this.items[this.lowestCount];
  }

  // 获取队尾元素
  peekBack() {
      if (this.isEmpty()) {
          return undefined;
      }
      return this.items[this.count - 1];
  }

  // 获取队列大小
  size() {
      return this.count - this.lowestCount;
  }

  // 清空队列
  clear() {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
  }

  // 队列判空
  isEmpty() {
      return this.count - this.lowestCount === 0;
  }

  // 获取队列中的所有元素
  toString() {
      if (this.isEmpty()) {
          return "";
      }

      let objString = `${this.items[this.lowestCount]}`;
      for (let i = this.lowestCount + 1; i < this.count; i++) {
          objString = `${objString},${this.items[i]}`;
      }
      return objString;
  }
}