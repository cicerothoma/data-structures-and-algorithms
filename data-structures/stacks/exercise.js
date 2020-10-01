// Create A Stack Using Arrays

class Stack {
  constructor() {
    this.data = [];
    this.length = this.data.length;
  }

  push(value) {
    this.length += 1;
    return this.data.push(value);
  }

  pop() {
    this.length -= 1;
    return this.data.pop();
  }

  peek() {
    return this.data[0];
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
console.log(myStack.peek());
console.log(myStack);
