export class Node<K> {
    next: Node<K> | undefined;

    constructor(public element: K) {
        this.element = element
    }
  
    toString() {
      return `${this.element}`;
    }
  }