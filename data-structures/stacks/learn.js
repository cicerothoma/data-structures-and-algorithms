// STACKS -- BIG O NOTATION
/**
 * Lookup - O(n)
 * Pop - O(1)
 * Peek O(1)
 * Push O(1)
 */

// We'll Implement our own Stack Data Structure using Linked List

class LinkedListNode {
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

  push(value) {
    // Create New Node
    const newNode = new LinkedListNode(value);
    // check if stack is empty
    if (this.top === null) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // Hold Reference to the top of the node
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.top === null) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom - null;
    }
    this.top = this.top.next;
    this.length -= 1;
    return null;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
console.log('peek', myStack.peek());
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.push('twitter');
console.log('peek', myStack.peek());
console.log(myStack.isEmpty());
