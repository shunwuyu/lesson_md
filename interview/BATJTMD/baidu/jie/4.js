class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
    }
    
    get(key) {
      if (!this.cache.has(key)) {
        return -1;
      }
  
      const value = this.cache.get(key);
      // 将最近使用过的 key 移到最前面
      this.cache.delete(key);
      this.cache.set(key, value);
    //   console.log(this.cache);
      return value;
    }
    
    put(key, value) {
      if (this.cache.has(key)) {
        // 如果 key 已经存在，则更新其值，并将其移到最前面
        this.cache.delete(key);
      } else if (this.cache.size >= this.capacity) {
        // 如果缓存已满，则删除最久未使用的 key
        const oldestKey = this.cache.keys().next().value;
        this.cache.delete(oldestKey);
      }
      console.log(this.cache);
      // 将新 key 插入到最前面
      this.cache.set(key, value);
    }
  }

  const lru = new LRUCache(2);
  lru.put(1,1)
//   console.log(lru.cache)
  lru.put(2, 1)
//   console.log(lru.cache)
  lru.put(3, 1)
//   console.log(lru.cache)
// iterator 
console.log(lru.cache.keys().next())
// console.log(lru.cache.keys().next().next())
// 只能拿到第一个
// 如何遍历呢
lru.cache.forEach((value, key) => {
    console.log(`${key} = ${value}`);
  })

for (let [key, value] of lru.cache) {
    console.log(`${key} = ${value}`);
}
// obj 表示你要转换为数组的对象
const obj = {
    name: 'Tom',
    age: 20,
    gender: 'male'
  };
  
  const entries = Object.entries(obj);
  
  console.log(entries);