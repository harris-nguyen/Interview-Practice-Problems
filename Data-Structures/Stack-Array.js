// FILO
class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1]; // shows last on list
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

// STACK:   // pop will delete top (last in array)
// Github
// Udemy
// Google

// array: [ 'google', 'udemy', 'github' ]

const myStack = new Stack();

myStack.push("google"); // first on stack
myStack.push("udemy"); // second on stack
myStack.push("github"); // third on stack and will be deleted first

console.log("peeek ", myStack.peek());

// myStack.pop()
// array: ['google', 'udemy']

console.log("github has been popped ::", myStack);
