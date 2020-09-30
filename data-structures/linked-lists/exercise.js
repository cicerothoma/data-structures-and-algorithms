// Create A Linked List that has the values 10 --> 5 --> 16

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // Create New Node
    const newNode = new Node(value);
    // Update the head node next value to equal new node
    this.tail.next = newNode;
    // Update the tail node
    this.tail = newNode;
    // Update Length
    this.length += 1;
  }

  prepend(value) {
    // Create New Node
    const newNode = new Node(value);
    // Point the new node next value to be the head node
    newNode.next = this.head;
    // Change the head node to the new node
    this.head = newNode;
    // Update Length
    this.length += 1;
  }

  printList() {
    const nodeArray = [];
    let firstNode = this.head;
    while (firstNode !== null) {
      nodeArray.push(firstNode.value);
      firstNode = firstNode.next;
    }
    console.log(nodeArray);
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(0);
myLinkedList.printList();

function NodeFunction(value) {
  this.value = value;
  this.next = null;
}

function LinkedList2(value) {
  this.head = new NodeFunction(value);
  this.tail = this.head;
  this.length = 1;
}

LinkedList2.prototype.append = function (value) {
  const newNode = new NodeFunction(value);
  this.tail.next = newNode;
  this.tail = newNode;
  this.length += 1;
  return this;
};

const myLinkedList2 = new LinkedList2(10);
myLinkedList2.append(5);
console.log(myLinkedList2);
