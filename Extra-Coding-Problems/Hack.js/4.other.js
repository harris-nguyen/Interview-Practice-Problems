// Write a function called "computeSummationToN".

// Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.

// Notes:

// If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.
// var output = computeSummationToN(6);
// console.log(output); // --> 21

function computeSummationToN(n) {}

// Write a function called "computeFactorialOfN".

// Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.

// var output = computeFactorialOfN(3);
// console.log(output); // --> 6

// var output = computeFactorialOfN(4);
// console.log(output); // --> 24

function computeFactorialOfN(n) {}

// Write a function called "getLongestOfThreeWords".

// Given 3 words, "getLongestOfThreeWords" returns the longest of three words.

// Notes:

// If there is a tie, it should return the first word in the tie.
// var output = getLongestOfThreeWords('these', 'three', 'words');
// console.log(output); // --> 'these'

function getLongestOfThreeWords(word1, word2, word3) {}

// Write a function called "findShortestOfThreeWords".

// Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

// Notes:

// If there are ties, it should return the first word in the parameters list.
// var output = findShortestOfThreeWords('a', 'two', 'three');
// console.log(output); // --> 'a'

function findShortestOfThreeWords(word1, word2, word3) {}

// Write a function called "multiply".

// Given 2 numbers, "multiply" returns their product.

// Notes:

// It should not use the multiply operator - *
// var output = multiply(4, 7);
// console.log(output); // --> 28

function multiply(num1, num2) {}

// Write a function called "isOddWithoutModulo".

// Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

// Note:

// It does so without using the modulo operator (%).
// It should work for negative numbers and zero.
// var output = isOddWithoutModulo(17);
// console.log(output); // --> true

function isOddWithoutModulo(num) {}

// Write a function called "isEvenWithoutModulo".

// Given a number, "isEvenWithoutModulo" returns whether it is even.

// Notes:

// It does so without using the modulo operator (%).
// It should work for negative numbers and zero.
// var output = isEvenWithoutModulo(8);
// console.log(output); // --> true

function isEvenWithoutModulo(num) {}

// Write a function called "multiplyBetween".

// Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.

// Notes:

// The product between 1 and 4 is 1 * 2 * 3 = 6.
// If num2 is not greater than num1, it should return 0.
// var output = multiplyBetween(2, 5);
// console.log(output); // --> 24

function multiplyBetween(num1, num2) {}

// Write a function called "computeSumBetween".

// Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beinning at num1, and excluding num2.

// Notes:

// The sum between 1 and 4 is 1 + 2 + 3 = 6.
// If num2 is not greater than num1, it should return 0.
// var output = computeSumBetween(2, 5);
// console.log(output); // --> 9

function computeSumBetween(num1, num2) {}




//
function reverseInteger(num) {
  let string = num.toString();
  let daSplit = string.split("");
  let newStr = "";

  for (var i = daSplit.length - 1; i >= 0; i--) {
    newStr += daSplit[i];
  }
  return Number(newStr);
}

let number = 12345;
console.log(reverseInteger(number));

//
function removeDoubleChar(str) {

  let obj = {}
  let count = 0

  for(let i = 0; i < str.length; i++){
    if(!obj[str[i]]){
      obj[str[i]] = count + 1
    }
  }

  let arr = []
  for(let key in obj){
    arr.push(key)
  }
  return arr.join('')
}

console.log(removeDoubleChar("SSttrriinngg")); //➞ "SSttrriinngg"
