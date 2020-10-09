// Bubble Sort

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 287, 4, 0];

function bubbleSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
