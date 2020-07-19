// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop

// O(n)
function findFactorialRecursive(number) {
  //code here
  if (number === 2) {
    // we pick 2
    // b/c 2 * 5 = 10
        // 10 * 4 = 40
          // 40 * 3 = 120
    return 2;
  }
  return number * findFactorialRecursive(number - 1); // -1 b/c you're counting down backwards
}

// loop O(n)
function findFactorialIterative(number) {
  //code here
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }

  for (let i = 2; i <= number; i++) {
    answer *= i;
  }

  return answer;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
