// FIFO

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
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    // add
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode; // adding to next
      this.last = newNode; // updating last to new node
    }
    this.length++;
    return this;
  }

  dequeue() {
    // remove from front of list
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    // const holdPointer = this.first // this is if you want to keep the first so it doesn't get deleted - optional
    this.first = this.first.next;
    this.length--;
    return this;
  }

  //isEmpty;
}

const myQueue = new Queue();

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
console.log("Peek:", myQueue.peek());

myQueue.dequeue(); // delete Joy -  the first on list
console.log(myQueue);

//Joy
//Matt
//Pavel
//Samir
