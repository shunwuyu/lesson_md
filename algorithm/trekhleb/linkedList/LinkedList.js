const LinkedListNode = require('./LinkedListNode');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    /**
     * @param {*} value
     * @return {LinkedList}
     */
    append(value) {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        
            return this;
        }
        // Attach new node to the end of linked list.
        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }
    /**
     * @param {*} value
     * @return {LinkedList}
     */
    prepend(value) {
        // Make new node to be a head.
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        // If there is no tail yet let's make new node a tail.
        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    /**
     * @param {*} value
     * @param {number} index
     * @return {LinkedList}
     */
    insert(value, rawIndex) {
        const index = rawIndex < 0 ? 0 : rawIndex;
        if (index === 0) {
        this.prepend(value);
        } else {
            let count = 1;
            let currentNode = this.head;
            const newNode = new LinkedListNode(value);
            while (currentNode) {
                if (count === index) break;
                currentNode = currentNode.next;
                count += 1;
            }
            if (currentNode) {
                newNode.next = currentNode.next;
                currentNode.next = newNode;
            } else {
                if (this.tail) {
                    this.tail.next = newNode;
                    this.tail = newNode;
                } else {
                    this.head = newNode;
                    this.tail = newNode;
                }
            }
        }
        return this;
    }

    /**
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // If the head must be deleted then make next node that is different
    // from the head to be a new head.
    while (this.head && this.head.value == value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      // If next node must be deleted then make next node to be a next next one.
      while (currentNode.next) {
        if (currentNode.next.value == value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // Check if tail must be deleted.
    if (this.tail.value == value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }
}

module.exports = LinkedList;