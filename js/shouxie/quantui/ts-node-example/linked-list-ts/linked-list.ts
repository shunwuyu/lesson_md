import { Node } from './node'
export default class LinkedList<T> {
    protected count = 0;
    protected head: Node<T> | undefined;
    constructor() {

    }
    push(element: T) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
        // catches null && undefined
            this.head = node;
        } else {
            current = this.head;
    
            while (current.next != null) {
                current = current.next;
            }
    
            current.next = node;
        }
        this.count++;
    }
    getElementAt(index: number) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    insert(element: T, index: number) {
        if (index >= 0 && index <= this.count) {
          const node = new Node(element);
    
          if (index === 0) {
            const current = this.head;
            node.next = current;
            this.head = node;
          } else {
            const previous = this.getElementAt(index - 1) 
            as Node<T>;
            node.next = previous.next;
            previous.next = node;
          }
          this.count++;
          return true;
        }
        return false;
      }
      removeAt(index: number) {
        if (index >= 0 && index < this.count) {
          let current = this.head as Node<T>;
    
          if (index === 0) {
            this.head = current.next ;
          } else {
            const previous = this.getElementAt(index - 1) 
            as any;
            current = previous.next;
            previous.next = current.next;
          }
          this.count--;
          return current.element;
        }

        return undefined;
      }

      isEmpty():boolean {
        return this.size() === 0;
      }
    
      size():number{
        return this.count;
      }
    
      getHead():Node<T> | undefined {
        return this.head;
      }
    
      clear() {
        this.head = undefined;
        this.count = 0;
      }

      toString() {
        if (this.head == null) {
          return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.size() && current != null;
         i++) {
          objString = `${objString},${current.element}`;
          current = current.next;
        }
        return objString;
      }
}