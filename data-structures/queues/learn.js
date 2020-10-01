// Queues --- Big O Notation
/**
 * Lookup -- O(n)
 * Enqueue -- O(1)
 * Dequeue -- O(1)
 * Peek -- O(1)
 */

/**Unlike Stack we never want to use an array to create queues because deleting the first item
 * in an array is time consuming O(n) and queues pop method deletes the first item in the queue
 */

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /**
   * Adds to the last Item in the queue
   * @param {*} value
   * @returns {Queue}
   */
  enqueue(value) {
    // Create new node
    const newNode = new LinkedListNode(value);
    // Check if the queue is empty
    if (this.length === 0 || this.first === null) {
      // Point the last and first item to the newly created node
      this.last = newNode;
      this.first = newNode;
    } else {
      // Point the next item in the last node to equal the new node
      this.last.next = newNode;
      // Point the last Item to equal the new node
      this.last = newNode;
    }
    this.length += 1;

    return this;
  }

  /**
   * Removes the first item in the queue
   * @returns {null|LinkedListNode|Queue}
   */
  dequeue() {
    if (this.length === 0) {
      return null;
    }
    // Check if the first and last node point to the same place in memory
    if (this.first === this.last || this.length === 1) {
      this.last = null;
    }
    // If we want to keep a reference to the node that will be deleted, we can add a pointer to
    // it before removing it from the linked list
    const referenceToRemovedNode = this.first;
    // Removed the first node by making the next node the first node
    this.first = this.first.next;
    // Decrease Length
    this.length -= 1;
    // Return the deleted node or the queue
    return referenceToRemovedNode || this;
  }

  /**
   * Returns the first Item in the Queue
   */
  peek() {
    return this.first;
  }

  /**
   * Checks if the queue is empty
   */
  isEmpty() {
    if (this.first === null || this.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
console.log(myQueue);
