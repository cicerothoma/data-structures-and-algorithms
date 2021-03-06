// Implementing a Hash Table
// Create A set method which uses the _hash method provided to add the item to the hash table
// Create a get method which take the key as the argument to return the value

class HashTable {
  constructor(size = 50) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // Solution - SET
  set(key, value) {
    const address = this._hash(key);
    const bucket = [key, value];
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push(bucket);
    } else {
      this.data[address].push(bucket);
    }
    return this.data;
  }

  // Solution - GET
  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i += 1) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('watermelon', 1000);
myHashTable.set('orange', 50);
myHashTable.set('pineapple', 20);
myHashTable.set('avocado', 100);
myHashTable.set('apple', 70);
myHashTable.set('cucumber', 10);
myHashTable.set('pawpaw', 20);
console.log(myHashTable.get('watermelon'));
console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('orange'));
console.log(myHashTable.get('pawpaw'));
console.log(myHashTable.get('avocado'));
console.log(myHashTable.keys());
