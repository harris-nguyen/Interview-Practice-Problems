// FIFO
// !! TWO solutions !!
// O(n)

// Two Arrays
class CrazyQueueOne {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }

  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue = new CrazyQueueOne();

// [ 'Joy', 'Matt', 'Pavel' ]

myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
// console.log(myQueue.peek());
// myQueue.dequeue(); // delete first which is Joy
// myQueue.dequeue();
// myQueue.dequeue();
console.log(myQueue)



// One Array

class CrazyQueueTwo {
  constructor() {
    this.array = [];
  }

  enqueue(value) {
    if (this.array.length === 0) {
      this.array.push(value);
      return this;
    } else {
      this.array = [value, ...this.array];
      return this;
    }
  }

  dequeue() {
    this.array.pop();
    return this;
  }

  peek() {
    const arrLength = this.array.length;

    let firstItem = this.array[arrLength - 1];

    if (arrLength === 0) {
      return null;
    }
    return firstItem;
  }
}

const myQueueTwo = new CrazyQueueTwo();

// [ 'Joy', 'Matt', 'Pavel' ]

myQueueTwo.enqueue("Joy");
myQueueTwo.enqueue("Matt");
myQueueTwo.enqueue("Pavel");
console.log(myQueueTwo.peek());
myQueueTwo.dequeue(); // delete first which is Joy
// myQueueTwo.dequeue();
// myQueueTwo.dequeue();
console.log(myQueueTwo);
