// using LINKED LIST for STACK
// FILO

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }
    // const holdingPointer = this.top
    this.top = this.top.next;
    this.length--;
    return this;
  }

  //isEmpty
}

// STACK:   // pop will delete top
// Github
// Udemy
// Google

const myStack = new Stack();

myStack.push("google"); // first on stack
myStack.push("udemy"); // second on stack
myStack.push("github"); // third on stack and will be deleted first

// console.log('before pop',myStack)

myStack.pop();

console.log("github has been popped ::", myStack);
// console.log('peeek ',myStack.peek())
