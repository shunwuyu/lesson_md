class ArrayQueue {
  constructor(capacity) {
    this.items = [];
    this.n = capacity;
    this.head = 0;
    this.tail = 0;
  }

  // enque(item) {
  //   if (this.tail == this.n) return false;
  //   this.items[this.tail] = item;
  //   ++this.tail;
  //   return true;
  // }

  enque(item) {
    if (this.tail == this.n) {
      if (this.head == 0) return false; //空的， 不用做
      for (let i = this.head; i < this.tail; ++i) {
        this.items[i-this.head] = this.items[i];
      }
      this.tail -= this.head;
      this.head = 0;
    }
    this.items[this.tail] = item;
    ++this.tail;
    return true;
  }

  dequeue() {
    if (this.head == this.tail) return null; //空
    let ret = this.items[this.head];
    // delete this.items[this.head];
    ++this.head;
    return ret;
  }
}

const queue = new ArrayQueue(8);
queue.enque('a');
queue.enque('b');
queue.enque('c');
queue.enque('d');

console.log(queue.items, queue.head, queue.tail);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.items, queue.head, queue.tail);
queue.enque('e');
queue.enque('f');
queue.enque('g');
queue.enque('h');
console.log(queue.items, queue.head, queue.tail);
queue.enque('i');
console.log(queue.items, queue.head, queue.tail);
