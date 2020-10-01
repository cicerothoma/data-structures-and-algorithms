// Create A Stack Using Arrays

class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
    return this;
  }

  pop() {
    this.data.pop();
    return this;
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    if (this.length === 0 || this.top === null) {
      return true;
    } else {
      return false;
    }
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
console.log(myStack.peek());
console.log(myStack);

// Create Another Stack Data Structure Using Linked List

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack2 {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    // Create a new node with the value;
    const newNode = new LinkedListNode(value);
    // Check if stack is empty
    if (this.length === 0 || this.top === null) {
      // Make the top and bottom point to the same node in memory
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // Point the new node next value to equal the current top/head node
      newNode.next = this.top;
      // Change the new top node to the newly created node
      this.top = newNode;
    }
    // Increase Length
    this.length += 1;
    return this;
  }

  pop() {
    // Check if linked list is empty
    if (this.length === 0 || this.top === null) {
      return null;
    }

    // Check if the top node and bottom node point to the same place in memory
    if (this.top === this.bottom) {
      // Remove the bottom node
      this.bottom = null;
    }

    // If we want to keep a reference to the node that will be deleted, we can add a pointer to
    // it before removing it from the linked list
    const referenceToRemovedNode = this.top;

    // Remove the head node and make the next node the new head node
    this.top = this.top.next;
    // Decrese Length
    this.length -= 1;
    // Return deleted node or the new List
    return referenceToRemovedNode || this;
  }
}

// const myStack2 = new Stack2();
// myStack2.push(1);
// myStack2.push(2);
// myStack2.push(3);
// myStack2.pop();
// myStack2.pop();
// myStack2.pop();
// console.log(myStack2.peek());
// console.log(myStack2);
