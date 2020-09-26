// Hash Table || Objects Operations -- BIG O Notation

// Search - O(1)
// Insert - O(1)
// Lookup - O(1)
// Delete - O(1)

/* One Main Problem of Hash Tables is that we have to deal with
   Hash Collisions sometimes and it slows down reading and writing 
   and the BIG O Notation for reading and writing becomes O(n)
*/

/** 
   In JavaScript Object Key can only be strings. If you pass in
    a none string value as a key it will be stringified. However we 
    can overcome this limitation and pass any data as a key by using Map. (Example Below)
    const map = new Map().
    Maps are another variation of hash tables but the different between Maps and Objects is 
    that while objects key are string and any other data type used as string will be stringified, maps 
    allow you to use any data type as string 
 **/

let user = {
  name: 'Kylie',
  age: 40,
  magic: true,
  scream() {
    console.log('ahhhhhh!');
  },
};

// Lookup
console.log(user.name); // O(1)
