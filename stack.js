class Node {
    constructor(name, next = null) {
        this.name = name;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.rootNode = null;
    }

    addANodeToFrontList(name) {
        const node = new Node(name);
        const prevNode = this.rootNode;
        this.rootNode = node;
        this.rootNode.next = prevNode;
    }

    removeRoot() {
        if(this.rootNode === null)
            throw new Error('there\'s no items in stack');

        const prev = this.rootNode;
        this.rootNode = this.rootNode.next;

        return prev;
    }

    traverse() {
        let next = this.rootNode;
        while(next !== null) {
            console.log(next.name)
            next = next.next
        }
    }
}

class Stack {
    constructor() {
        this.stack = new LinkedList();
    }

    push(item) {
        this.stack.addANodeToFrontList(item);
    }

    pop() {
        const item = this.stack.removeRoot();
        return item.name;
    }
}


// [ 8, 3, 5, 1, 2, 1, 4 ]
class BinaryHeap {
    constructor() {
        this.array = [];
    }

    addElement(n) {
        this.array.push(n);
        let index = this.array.length - 1;
        if(index === 0) {
            // root
            return;
        }

        while(index > -1) {
            const parent = Math.floor((index - 1) / 2);
            const parentElement = this.array[parent];
            if(n > parentElement) {
                this.array[parent] = n;
                this.array[index] = parentElement;
                index = parent;
            } else {
                break;
            }
        }
    }

    removeRoot() {
        let index = this.array.length - 1;
        this.array[0] = this.array[index];

        this.array = this.array.splice(0, this.array.length - 1)
        const newLength = this.array.length;
        console.log('new length', newLength)

        index = 0;
            
        while((index * 2) + 2 < newLength) {
            console.log('BEGIN', this.array)
            const leftIndex = (2*index) + 1;
            const rightIndex = (2*index) + 2;

            if(this.array[index] >= this.array[leftIndex] && this.array[index] >= this.array[rightIndex])
                return;

            if(leftIndex < newLength && rightIndex < newLength) {
                if(this.array[rightIndex] && this.array[leftIndex] > this.array[rightIndex]) {
                    console.log('LEFT')
                    const parent = this.array[index];
                    this.array[index] = this.array[leftIndex];
                    this.array[leftIndex] = parent;
                    index = leftIndex;
                } else {
                    const parent = this.array[index];
                    this.array[index] = this.array[rightIndex];
                    this.array[rightIndex] = parent;
                    index = rightIndex;
                }
            }
            
            console.log('LOOP', this.array)
        }
    }
}

const bh = new BinaryHeap();
bh.addElement(8)
bh.addElement(2)
bh.addElement(7)
bh.addElement(11)
bh.addElement(32)
bh.addElement(31)
bh.addElement(4)

console.log('Initial', bh.array);

bh.removeRoot()

console.log(bh.array);


// bh.addElement(55)
// console.log(bh.array);