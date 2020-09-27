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
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));

// console.log(myLinkedList);
