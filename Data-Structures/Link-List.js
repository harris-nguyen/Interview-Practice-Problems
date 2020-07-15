// Linked List
// Prepend and append O(1)
// Lookup, insert, and delete O(n)
// Uses less memory compared to doubly linkedlist
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    // if (index === 0) {
    //   this.prepend(value);
    //   return this.printList();
    // }

    if (index >= this.length) {
      // if index is greater than length, add value to end of list
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };

    const leader = this.traverseToIndex(index - 1); // grabbing 1st targeted index
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0; // counting index
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;

      counter++;
    }
    return currentNode;
  }

  remove(index) {
    // not included so later, include conditional. if positive, negative, etc

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next; // leader.next overwriting unwantedNode.next. therefore unwantedNode.next is deleted
    this.length--;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
console.log(myLinkedList);

// Doubly LinkedList
// Prepend and append O(1)
// Lookup, insert, and delete O(n)
// Use this over single linkedlist when you have more memory
// Big diff compared to single list is 'previous'
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      previous: null, // added previous
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      previous: null,
    };

    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      previous: null,
      next: null,
    };

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    // if (index === 0) {
    //   this.prepend(value);
    //   return this.printList();
    // }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      previous: null,
      next: null,
    };
    // example: myLinkedList.insert(2, 99)
    // [ 1, 10, 5, 16 ]
    const leader = this.traverseToIndex(index - 1); // key of 10
    const follower = leader.next; // key of 5

    leader.next = newNode; // to insert key of 99 will overwrite key of 5
    newNode.previous = leader; // setting prev to key of 10
    newNode.next = follower; // setting null to reference key of 5
    follower.previous = newNode; // setting prev to newNode 99
    // result [ 1, 10, 99, 5, 16 ]
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0; // counting index
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;

      counter++;
    }
    return currentNode;
  }

  remove(index) {
    // not included so later, include conditional. if positive, negative, etc

    // example: myLinkedList.insert(2, 99)
    // [ 1, 10, 99, 5, 16 ]
    const leader = this.traverseToIndex(index - 1); // key of 10
    const unwantedNode = leader.next; // key of 99
    const follower = unwantedNode.next; // 5

    leader.next = follower; // key of 5 overwrites key of 99
    follower.previous = leader; // prev set to key of 10
    this.length--;
    // result [ 1, 10, 5, 16 ]
    return this;
  }

  reverse() {
    // you can also use this.length === 1
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next; // third number
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
console.log("reverse:", myLinkedList.reverse());
console.log(myLinkedList.printList());
console.log(myLinkedList);
