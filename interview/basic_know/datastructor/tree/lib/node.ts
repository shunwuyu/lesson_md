export class Node<T> {
    public left: Node<T> | undefined;
    public right: Node<T> | undefined;
    public parent: Node<T> | undefined;
    constructor(public key: T, parent?: Node<T>) {
        this.key = key;
        this.left = undefined;
        this.right = undefined;
        this.parent = parent;
    }

    toString(): string {
        return `${this.key}`;
    }
}

export enum Colors {
    RED = 0,
    BLACK = 1
}

