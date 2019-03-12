class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(value) {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }
    deleteHead() {
        if (!this.head) {
            return null;
        }
        const deletedHead = this.head;
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }
    toString() {
        const nodes = [];
        let currentNode = this.head;
        while(currentNode) {
            nodes.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return nodes;
    }
}
class Queue {
    constructor() {
        this.linkedList = new LinkedList();
    }
    isEmpty() {
        return !this.linkedList.head.value;
    }
    enqueue(value) {
        this.linkedList.append(value);
    }
    dequeue() {
        const removedHead = this.linkedList.deleteHead();
        return removedHead ? removedHead.value : null;
    }
    toString () {
        return this.linkedList.toString();
    }
}

const queue  = new Queue();
queue.enqueue(6);
queue.enqueue(3);
queue.enqueue(1);
queue.enqueue(7);
queue.enqueue(5);
queue.enqueue(8);
queue.enqueue(9);
queue.enqueue(2);
queue.enqueue(4);
// queue.toString();
let qq = [];

// console.log(queue.isEmpty());
// qq.push(queue.dequeue());
// queue.enqueue(queue.dequeue());
// qq.push(queue.dequeue());
// queue.enqueue(queue.dequeue());
// qq.push(queue.dequeue());
// queue.enqueue(queue.dequeue());
// qq.push(queue.dequeue());
// queue.enqueue(queue.dequeue());
// qq.push(queue.dequeue());
// queue.enqueue(queue.dequeue());
// qq.push(queue.dequeue());
// queue.enqueue(queue.dequeue());
// qq.push(queue.dequeue());
// queue.enqueue(queue.dequeue());
// qq.push(queue.dequeue());
// queue.enqueue(queue.dequeue());
// qq.push(queue.dequeue());
// queue.enqueue(queue.dequeue());
// console.log('++++',queue.linkedList.head);
// console.log('------',queue);
while(!queue.isEmpty()) {
    qq.push(queue.dequeue());
    queue.enqueue(queue.dequeue());
    // console.log(queue.linkedList.head);
}
console.log(qq);
