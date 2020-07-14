var twoSum = function (nums, target) {};
// https://leetcode.com/problems/two-sum/description/


var maxSubArray = function (nums) {};
// https://leetcode.com/problems/maximum-subarray/description/


var moveZeroes = function (nums) {};
// https://leetcode.com/problems/move-zeroes/description/


var containsDuplicate = function (nums) {};
// https://leetcode.com/problems/contains-duplicate/description/


var rotate = function (nums, k) {};
// https://leetcode.com/problems/rotate-array/description/

// Hash Table
// space O(n)
// insert, lookup, & delete O(1)
function firstRecurringCharacter(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }
  return undefined;
}
console.log(firstRecurringCharacter([2, 5, 9, 8, 2, 4, 5, 7, 9]));


// Linked List
// Prepend and append O(1)
// Lookup, insert, and delete O(n)
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
    leader.next = unwantedNode.next // leader.next overwriting unwantedNode.next. therefore unwantedNode.next is deleted
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

    newNode.previous = this.tail; // the reference
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

    const leader = this.traverseToIndex(index - 1); // grabbing 1st targeted index
    const follower = leader.next;
    leader.next = newNode;
    newNode.previous = leader;
    newNode.next = follower;
    follower.previous = newNode;
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
    const follower = unwantedNode.next;

    leader.next = follower;
    follower.previous = leader;
    this.length--;
    return this;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
console.log(myLinkedList);
