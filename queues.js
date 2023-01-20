// Challenge 1: Draw and explain in a diagram of how the queue data structure works.

// Please refer to queue.drawio

// Challenge 2: Create 2 methods that are:
// • enqueue (insert a element at the end of the queue)
// • dequeue (remove a element from the start of the queue)

// 1) enqueue

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
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

  // Challenge 3: Create 3 additional methods that are:
  // • peek (retrieves the element at the start of the queue, WITHOUT removing it)

  peek() {
    if (!this.first) return null;
    return this.first.value;
  }

  // • isEmpty (checks if the queue is empty – should return true or false)
  // o hint - what property of the queue can you use to build this methodJ?

  isEmpty() {
    if (!this.first) return true;
    return false;
  }

  // • printQueue (prints the elements in the queue)

  printQueue() {
    return this;
  }
}

// Testing
// let newQueue = new Queue();
// newQueue.enqueue(3);
// newQueue.enqueue(5);

// console.log(newQueue.printQueue());
