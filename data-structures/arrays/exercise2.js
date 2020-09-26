// EXERCISE 2

// Given Two Arrays that are sorted: [0, 3, 4, 31] & [4, 6, 30];
// Write a function that merge two array into one sorted array
// Function should return: [0, 3, 4, 4, 6, 30, 31] based on the example above

const firstArray = [0, 3, 4, 31];
const secondArray = [4, 6, 30];

// Solution 1
function mergeSortedArrays(arr1, arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    const newArray = [...arr1, ...arr2];
    return newArray.sort((a, b) => a - b);
  }
}

// console.log(mergeSortedArrays(firstArray, secondArray));

// Solution 2
function mergeSortedArrays2(arr1, arr2) {
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  // Checks Input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  while (arr1Item || arr2Item) {
    console.log(arr1Item, arr2Item);
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i += 1;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j += 1;
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays2(firstArray, secondArray));
