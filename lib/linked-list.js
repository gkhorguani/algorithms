export class Node {
  constructor(name, next = null) {
    this.name = name;
    this.next = next;
  }

}
export class LinkedList {
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
    if (this.rootNode === null) throw new Error('there\'s no items in stack');
    const prev = this.rootNode;
    this.rootNode = this.rootNode.next;
    return prev;
  }

  traverse() {
    let next = this.rootNode;

    while (next !== null) {
      console.log(next.name);
      next = next.next;
    }
  }

}
const list = new LinkedList();
list.addANodeToFrontList('Gio');
list.addANodeToFrontList('Chaz');
list.addANodeToFrontList('Sangy');
list.traverse();