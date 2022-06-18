class Heap {
    a = []; // 数组，从下标1开始存储数据
    n = 999; // 堆可以存储的最大数据个数
    count = 0; // 堆中已经存储的数据个数
    constructor(capacity) {
        this.a = new Array(capacity);
        this.n = capacity;
        this.count = 0;
    }
    insert(data) {
        if (this.count >= this.n) return;
        ++this.count;
        this.a[this.count] = data;
        let i = this.count;
        
        // 大顶堆
        while(i / 2 > 0 && this.a[i]>this.a[Math.floor(i/2)]) {
            // this.swap(this.a, i, i/2)
            let tmp = this.a[i];
            this.a[i] = this.a[Math.floor(i/2)]
            this.a[Math.floor(i/2)] = tmp
            i = Math.floor(i / 2);
            // console.log(i, this.a[i], this.a[Math.ceil(i/2)])
        }
    }
    swap(arr, x, y) {
        let tmp = arr[y]
        arr[y] = arr[x]
        arr[x] = tmp
        // console.log(arr, '////')
    }
}

const heap = new Heap(20)
heap.insert(33)
heap.insert(17)
heap.insert(21)
heap.insert(16)
heap.insert(13)
heap.insert(15)
heap.insert(9)
heap.insert(5)
heap.insert(6)
heap.insert(7)
heap.insert(8)
heap.insert(1)
heap.insert(2)
heap.insert(22)
console.log(heap.a)
