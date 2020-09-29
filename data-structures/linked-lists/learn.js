/**
 * LINKED LISTS --- Big O Notation
 * Prepend -- O(1)
 * Append -- 0(1)
 * Lookup -- 0(n)
 * Insert -- 0(n)
 * Delete -- 0(n)
 */

// Create a linked list : 10 ---> 5 ----> 16

// Create a method that adds value to the end of the linked list created below
// Create a method that adds value at the beginning of the linked list created below
// Create a method that inserts a node at the specified index
// Create a method that deletes a node at the specified index

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// SINGLY LINKED LIST

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  // Solution (append)
  append(value) {
    const newNode = {
      value,
      next: null,
    };
    // Add the new node to the tail
    this.tail.next = newNode;

    // Update the tail to point to the new node
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  // Solution (Prepend)
  prepend(value) {
    const newNode = new Node(value);
    // Changes the next value in our new node to be a pointer to the head node
    newNode.next = this.head;
    // Change the head Node to the new node
    this.head = newNode;
    this.length += 1;

    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  insert(index, value) {
    // Check Params
    if (index >= this.length) {
      return this.append(value);
    }
    let leader = null;
    // check param
    if (index === 0) {
      return this.prepend(value);
    } else if (index > 0) {
      // Grab the leading node of the specified index
      leader = this.traversetoIndex(index - 1);
    }
    // Create new node with value
    const newNode = new Node(value);

    // Create a pointer to the node after the leader
    const holdingPointer = leader.next;
    // The Leading Node next value will now point to the newNode (This breaks the link)
    leader.next = newNode;
    // Regain the link by making the new node next value point to the node after the leading node
    newNode.next = holdingPointer;
    // Increment Lenght
    this.length += 1;
    return this.printList();
  }

  traversetoIndex(index) {
    // check param
    let counter = 0;
    let currentNode = this.head;
    while (index > 0 && counter !== index) {
      currentNode = currentNode.next;
      counter += 1;
    }

    return currentNode;
  }

  remove(index) {
    let leader = null;
    // check param
    if (index === 0) {
      this.head = this.head.next;
      return this.printList();
    } else if (index > 0) {
      // First Get the leading node
      leader = this.traversetoIndex(index - 1);
    }

    // Create a reference to the unwanted node
    const unwantedNode = leader.next;
    // Point the leading next node to equal the unwanted node next value (Because of garbage collection this automatically deletes the node)
    leader.next = unwantedNode.next;
    // Decrement the length of Node
    this.length -= 1;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
// console.log(myLinkedList.append(5));
// console.log(myLinkedList.append(16));
// console.log(myLinkedList.prepend(1));
// console.log(myLinkedList.prepend(20));
// console.log(myLinkedList.insert(200, 99));
// console.log(myLinkedList.insert(0, 99));
// console.log(myLinkedList.insert(2, 'will it work?'));
// console.log(myLinkedList.remove(2));
// console.log(myLinkedList.remove(0));
// console.log(myLinkedList.remove(0));

// DOUBLY LINKED LIST

class DoublyLinkedList {
  constructor(value) {
    this.head = new DoublyNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new DoublyNode(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;

    this.tail = newNode;
    this.length += 1;
    return this.printList();
  }

  prepend(value) {
    const newNode = new DoublyNode(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length += 1;
    return this.printList();
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    let leader = null;
    if (index === 0) {
      return this.prepend(value);
    } else if (index > 0) {
      leader = this.traversetoIndex(index - 1);
    }
    const newNode = new DoublyNode(value);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length += 1;
    return this.printList();
  }

  traversetoIndex(index) {
    // check param
    let counter = 0;
    let currentNode = this.head;
    while (index > 0 && counter !== index) {
      currentNode = currentNode.next;
      counter += 1;
    }

    return currentNode;
  }
  remove(index) {
    let leader = null;
    // check param
    if (index === 0) {
      this.head = this.head.next;
      return this.printList();
    } else if (index > 0) {
      // First Get the leading node
      leader = this.traversetoIndex(index - 1);
    }

    // Create a reference to the unwanted node
    const follower = leader.next;
    // Point the leading next node to the unwanted next node
    // (Because of Garbage Collection this gets removed from memory)
    leader.next = follower.next;
    // Point the previous value of the new next node to equal the leading node.
    follower.next.prev = leader;

    // Decrement the length of Node
    this.length -= 1;
    return this.printList();
  }
}

const myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.append(2);
myDoublyLinkedList.append(3);
myDoublyLinkedList.prepend(0);
myDoublyLinkedList.insert(1, 99);
myDoublyLinkedList.insert(3, 'lets see');
myDoublyLinkedList.remove(3);
// console.log(myLinkedList);
// myLinkedList.printList();
console.log(myDoublyLinkedList.head.next.next.next);
