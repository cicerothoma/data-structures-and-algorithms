// Array Operations - BIG O Notation
// Lookup O(1)
// Push O(1)
// Insert O(n)
// Delete O(n)
// Search O(n)

// --------------CODE BELOW----------------

const arr = ['a', 'b', 'c', 'd'];

// PUSH
arr.push('e'); // O(1)
// POP
arr.pop(); // O(1)
// UNSHIFT
arr.unshift('z'); // O(n)
// SPLICE
arr.splice(2, 0, 'added to middle'); // O(n)
// ACCESS
const thirdItemInArray = arr[2]; // O(1)
// DELETE
const deleteThirdItemInArray = arr.splice(2, 1);

// console.log(deleteThirdItemInArray);
// console.log(arr.length);

// TYPES OF ARRAY - STATIC ARRAY && DYNAMIC ARRAY
// STATIC ARRAY: Fixed in size and can't grow beyond fixed size
// DYNAMICS ARRAY: Array grows based on the size of inputs

// Building An Array From Scratch

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    //   BIG O -- O(1)
    return this.data[index];
  }

  push(item) {
    //   BIG O -- O(1)
    const index = this.length;
    this.data[index] = item;
    this.length += 1;
    return this.length;
  }

  pop() {
    //   BIG O -- O(1)
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length -= 1;
    return lastItem;
  }

  delete(index) {
    //   BIG O -- O(n)
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i += 1) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length -= 1;
  }
}

const newArray = new MyArray();
// console.log(newArray.push('one'));
// console.log(
//   newArray.push(function hello() {
//     console.log('hello world');
//   })
// );
// console.log(newArray.push(5));
// console.log(newArray);
// console.log(newArray.delete(1));
// console.log(newArray);

// Pros and Cons of Arrays

/*
PROS
> FAST LOOKUP
> FAST PUSH (Can be slow sometimes because of it's dynamic nature if using Dynamic Array)
> FAST POP
> ORDERED
*/

/* 
CONS
> SLOW INSERTS
> SLOW DELETES
> FIXED SIZE (If Using Static Array)
*/
