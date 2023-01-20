class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    this.size++;
    return this;
  }
  pop() {
    if (!this.first) {
      return null;
    }
    let temp = this.first;

    if (this.size === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return temp;
  }

  peek() {
    if (!this.first) return null;
    return this.first.value;
  }

  isEmpty() {
    if (!this.first) return true;
    return false;
  }

  printStack() {
    return this;
  }
}

const newStack = new Stack();
newStack.push(3);
newStack.push(5);
console.log(newStack.printStack());
