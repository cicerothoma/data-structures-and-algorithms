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

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    if (index === 0) {
      return this.head;
    } else if (index > this.length) {
      return this.tail;
    }
    while (counter < index) {
      currentNode = currentNode.next;
      counter += 1;
    }
    return currentNode;
  }

  insert(index, value) {
    //  CHECK PARAMS
    if (index === 0) {
      return this.prepend(value);
    } else if (index >= this.length) {
      return this.append(value);
    }
    // Create the node to insert
    const newNode = new Node(value);
    // Create a reference to the leading node
    const leadingNode = this.traverseToIndex(index - 1);
    // Create another reference to the node after the leading node
    const followingNode = leadingNode.next;
    // Point the leading node next value to the new Node (this breaks the link to the following node)
    leadingNode.next = newNode;
    // Point the new node next value to regain link
    newNode.next = followingNode;
    // Increase the length
    this.length += 1;

    return this.printList();
  }

  remove(index) {
    if (index === 0) {
      // Set the head to the head next value
      this.head = this.head.next;
      return this.head;
    }
    if (index < this.length) {
      // Get The Leading Node
      const leader = this.traverseToIndex(index - 1);
      // Create a reference to the unwanted node (The Node We Want To Delete)
      const unwantedNode = leader.next;
      // Create a Reference to the following node after the unwanted node
      const followingNode = unwantedNode.next;
      // Point the leading node to the following node
      // (Because the unwanted node is no longer reference, this gets garbage collected)
      leader.next = followingNode;
      //   Decrease Length
      this.length -= 1;
      return this.printList();
    }
  }

  printList() {
    const nodeArray = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      nodeArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(nodeArray);
  }
}

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(0);
// myLinkedList.printList();
// console.log(myLinkedList.traverseToIndex(3));
// myLinkedList.insert(2, 50);
// myLinkedList.remove(0);
// myLinkedList.printList();

// Convert the singly linked list above to a doubly linked list

class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new DoublyNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // Create New Node
    const newNode = new DoublyNode(value);
    // Point the next value of the current claue to equal new node
    this.tail.next = newNode;
    // Point the previous value of the new node to equal last node
    newNode.prev = this.tail;
    // Update the last node to the new node
    this.tail = newNode;
    // Increase Length
    this.length += 1;

    return this;
  }

  printList() {
    const nodeArray = [];
    let currentNode = this.head;
    let counter = 0;
    while (currentNode !== null) {
      nodeArray.push(currentNode.value);
      currentNode = currentNode.next;
      counter += 1;
    }
    console.log(nodeArray);
  }
}

const myDoublyLinkedList = new DoublyLinkedList(0);
myDoublyLinkedList.append(8);
myDoublyLinkedList.append(1);
console.log(myDoublyLinkedList);
myDoublyLinkedList.printList();
