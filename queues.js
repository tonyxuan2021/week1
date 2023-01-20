// Challenge 1: Draw and explain in a diagram of how the queue data structure works.

// Please refer to queue.drawio

// Challenge 2: Create 2 methods that are:
// • enqueue (insert a element at the end of the queue)
// • dequeue (remove a element from the start of the queue)

// 1) enqueue

class Node {
  constructor(value) {
    this.value = null;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = null;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last = this.last.next;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  dequeue() {
    if (!this.first) return null;

    let temp = this.first;

    if (this.size === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}
