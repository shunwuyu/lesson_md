class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
    }
    get(key) {
        // 如果缓存中存在指定键，则将其从缓存中删除并重新添加到缓存顶部，然后返回它的值
        if (this.cache.has(key)) {
          const value = this.cache.get(key);
          this.cache.delete(key);
          this.cache.set(key, value);
          return value;
        }
        // 如果缓存中不存在指定键，则返回 -1
        return -1;
    }

    set(key, value) {
        // 如果缓存中已存在指定键，则将其从缓存中删除
        if (this.cache.has(key)) {
          this.cache.delete(key);
        }
        // 将新值添加到缓存顶部，并检查缓存是否已满，如果是则删除最近最少使用的项（最后一项）
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
          const firstKey = this.cache.keys().next().value;
          this.cache.delete(firstKey);
        }
      }
}

const cache = new LRUCache(2);

// 添加键值对 key1:value1 到缓存
cache.set("key1", "value1");
// 添加键值对 key2:value2 到缓存
cache.set("key2", "value2");

// 获取 key1 的值，期望返回 “value1”，因为这是最近最少使用的项
console.log(cache.get("key1")); // 输出 "value1"

// 添加键值对 key3:value3 到缓存，这样 key2 将成为最近最少使用的项
cache.set("key3", "value3");

// 获取 key2 的值，期望返回 -1，因为它已经被删除了
console.log(cache.get("key2")); // 输出 -1

// 获取 key1 的值，期望返回 “value1”，因为它仍然在缓存中
console.log(cache.get("key1")); // 输出 "value1"

// 添加键值对 key4:value4 到缓存，这将导致 key3 成为最近最少使用的项并被删除
cache.set("key4", "value4");

// 获取 key3 的值，期望返回 -1，因为它已经被删除了
console.log(cache.get("key3")); // 输出 -1

// 获取 key1 的值，期望返回 "value1"，因为它仍然在缓存中
console.log(cache.get("key1")); // 输出 "value1"

// 获取 key4 的值，期望返回 "value4"，因为它是缓存中的最新项
console.log(cache.get("key4")); // 输出 "value4"