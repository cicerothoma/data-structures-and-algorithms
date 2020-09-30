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

  reverse() {
    //   CHECK PARAM
    if (this.length === 1) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(0);
myLinkedList.insert(2, 50);
myLinkedList.printList();
console.log(myLinkedList.reverse());

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

  prepend(value) {
    // Create new node
    const newNode = new DoublyNode(value);
    // Point the new node next value to the head node
    newNode.next = this.head;
    // Point the head previous value to the equal the next node
    this.head.prev = newNode;
    // Change the head node to the newly created node
    this.head = newNode;
    // Increase length
    this.length += 1;

    return this;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    if (index === 0) {
      return this.head;
    }
    while (counter < index) {
      currentNode = currentNode.next;
      counter += 1;
    }
    return currentNode;
  }

  insert(index, value) {
    //   CHECK PARAMS
    if (index === 0) {
      this.prepend(value);
      return this;
    } else if (index >= this.length) {
      this.append(value);
      return this;
    }

    // Create new node
    const newNode = new DoublyNode(value);
    // Get The Leading Node
    const leader = this.traverseToIndex(index - 1);
    // Get the node after the leader
    const followingNode = leader.next;
    // Insert new node (this breaks the link)
    leader.next = newNode;
    // point the new node next value to equal the node after the leader
    newNode.next = followingNode;
    // Change the following node previous value to equal new node
    followingNode.prev = newNode;
    // Change the new node previous value to equal leading node
    newNode.prev = leader;
    // Increase length
    this.length += 1;

    return this;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      return this;
    }
    if (index < this.length) {
      // Get the leading node
      let leader = this.traverseToIndex(index - 1);
      // Get the unwanted node
      let unwantedNode = leader.next;
      // Get the following node
      let followingNode = unwantedNode.next;
      // Point leading node next value to the following node
      leader.next = followingNode;
      // Point the following node previous value to the leader
      followingNode.prev = leader;
      // Decrease length
      this.length -= 1;
      return this;
    }
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

// const myDoublyLinkedList = new DoublyLinkedList(8);
// myDoublyLinkedList.append(1);
// myDoublyLinkedList.prepend(0);
// myDoublyLinkedList.insert(2, 'LOL');
// console.log('removed', myDoublyLinkedList.remove(1));
// console.log(myDoublyLinkedList.head.next);
// myDoublyLinkedList.printList();
