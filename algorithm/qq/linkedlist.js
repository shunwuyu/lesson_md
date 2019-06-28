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

const linkedList = new LinkedList();
linkedList.append(6);
linkedList.append(3);
linkedList.append(1);
linkedList.append(7);
linkedList.append(5);
linkedList.append(8);
linkedList.append(9); 
linkedList.append(2);
linkedList.append(4);
console.log(linkedList.toString().join(''));