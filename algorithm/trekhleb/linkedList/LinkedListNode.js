class LinkedListNode {
    // es6 默认值
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
    
    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}
module.exports = LinkedListNode 