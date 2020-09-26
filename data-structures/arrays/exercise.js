// EXERCISE 1

// Create a Function that reverses a String
// "Hi! My Name is Collins" should be:
// "snilloC si emaN yM !iH"

// Solution 1

function revserseString(str) {
  if (typeof str !== 'string') {
    return 'Argument Must Be String';
  }
  const strArr = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    // console.log(str[i]);
    strArr.push(str[i]);
  }
  return strArr.join('');
}
console.log('1', revserseString('Hi! My Name is Collins'));

// Solution 2

function revserseString2(str) {
  if (typeof str !== 'string') {
    return 'Argument Must Be String';
  }
  return [...str].reverse().join('');
}
console.log('2', revserseString2('Hi! My Name is Collins'));

// Solution 3

function revserseString3(str) {
  if (typeof str !== 'string') {
    return 'Argument Must Be String';
  }
  return str.split('').reverse().join('');
}
console.log('3', revserseString3('Hi! My Name is Collins'));

// Solution 4

const revserseString4 = (str) => [...String(str)].reverse().join('');
console.log('4', revserseString4(null));
