/**
 * Recursive functions usuall have 3 rules
 * 1) Identify the base case or stop point
 * 2) Identify the recursive case
 * 3) There's usually two returns. One for the base case and the other for the recursive case
 */

// Write two functions that find the factorial of any number. One should use recursion and the
// other should use a for-loop

let multiplier = 1;

function findFactorialRecursively(number) {
  let answer;
  if ((number = 2)) {
    return 2;
  }
  return number * findFactorialRecursively(number - 1);
}

function findFactorialIteratively(number) {
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

console.log(findFactorialRecursively(5));
