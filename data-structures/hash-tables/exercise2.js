// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2, 3, 4, 5]
// It should return undefined

// Solution 1 -- Not Recommended

function firstRecurringCharacter(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return arr[i];
        }
      }
    }
    return undefined;
  }
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));

// Solution 2 -- Using Hash Table to reduce Time Complexity
function firstRecurringCharacter2(arr) {
  const map = {};
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (map[arr[i]]) {
        return arr[i];
      } else {
        map[arr[i]] = true;
      }
    }
    return undefined;
  }
}

console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter2([2, 3, 4, 5]));
