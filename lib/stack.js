import { LinkedList, Node } from './linked-list';

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

const stack = new Stack();
stack.push('Gio');
stack.push('Chaz');
stack.push('Sangy');
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());