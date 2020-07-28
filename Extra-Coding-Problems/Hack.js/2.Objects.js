// Write a function called "getStringLength".

// Given a string, "getStringLength" returns the length of the given string.

// Notes:

// Do NOT use any native 'length' methods.
// You might consider using 'substring' or 'slice' as alternatives.
// var output = getStringLength('hello');
// console.log(output); // --> 5

function getStringLength(string) {}

// Write a function called "getProductOfAllElementsAtProperty".

// Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key.

// Notes:

// If the array is empty, it should return 0.
// If the property at the given key is not an array, it should return 0.
// If there is no property at the given key, it should return 0.
// var obj = {
//   key: [1, 2, 3, 4]
// };
// var output = getProductOfAllElementsAtProperty(obj, 'key');
// console.log(output); // --> 24

function getProductOfAllElementsAtProperty(obj, key) {}

// Write a function called "sumDigits".

// Given a number, "sumDigits" returns the sum of all its digits.

// var output = sumDigits(1148);
// console.log(output); // --> 14
// If the number is negative, the first digit should count as negative.

// var output = sumDigits(-316);
// console.log(output); // --> 4
// Notes:

// In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
// Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

function sumDigits(num) {}

// Write a function called "getSumOfAllElementsAtProperty".

// Given an object and a key, "getSumOfAllElementsAtProperty" returns the sum of all the elements in the array located at the given key.

// Notes:

// If the array is empty, it should return 0.
// If the property at the given key is not an array, it should return 0.
// If there is no property at the key, it should return 0.
// var obj = {
//   key: [4, 1, 8]
// };
// var output = getSumOfAllElementsAtProperty(obj, 'key');
// console.log(output); // --> 13

function getSumOfAllElementsAtProperty(obj, key) {}

// Write a function called "countAllCharacters".

// Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

// Notes:

// If given an empty string, countAllCharacters should return an empty object.
// var output = countAllCharacters('banana');
// console.log(output); // --> {b: 1, a: 3, n: 2}

function countAllCharacters(str) {}

// Write a function called "getOddLengthWordsAtProperty".

// Given an object and a key, "getOddLengthWordsAtProperty" returns an array containing all the odd length word elements of the array located at the given key.

// Notes:

// If the array is empty, it should return an empty array.
// If it contains no odd length elements, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the given key, it should return an empty array.
// var obj = {
//   key: ['It', 'has', 'some', 'words']
// };
// var output = getOddLengthWordsAtProperty(obj, 'key');
// console.log(output); // --> ['has', 'words']

function getOddLengthWordsAtProperty(obj, key) {}

// Write a function called "getAverageOfElementsAtProperty".

// Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key.

// Notes:

// If the array at the given key is empty, it should return 0.
// If the property at the given key is not an array, it should return 0.
// If there is no property at the given key, it should return 0.
// var obj = {
//   key: [1, 2, 3]
// };
// var output = getAverageOfElementsAtProperty(obj, 'key');
// console.log(output); // --> 2

function getAverageOfElementsAtProperty(obj, key) {}

// Write a function called "getEvenLengthWordsAtProperty".

// Given an object and a key, "getEvenLengthWordsAtProperty" returns an array containing all the even length word elements of the array located at the given key.

// Notes:

// If the array is empty, it should return an empty array.
// If it contains no even length elements, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.
// var obj = {
//   key: ['a', 'long', 'game']
// };
// var output = getEvenLengthWordsAtProperty(obj, 'key');
// console.log(output); // --> ['long', 'game']

function getEvenLengthWordsAtProperty(obj, key) {}

// Write a function called "getSquaredElementsAtProperty".

// Given an object and a key, "getSquaredElementsAtProperty" returns an array containing all the squared elements of the array located at the given key.

// Notes:

// If the array is empty, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.
// var obj = {
//   key: [2, 1, 5]
// };
// var output = getSquaredElementsAtProperty(obj, 'key');
// console.log(output); // --> [4, 1, 25]

function getSquaredElementsAtProperty(obj, key) {}

// Write a function called "getOddElementsAtProperty".

// Given an object and a key, "getOddElementsAtProperty" returns an array containing all the odd elements of the array located at the given key.

// Notes:

// If the array is empty, it should return an empty array.
// If it contains no odd elements, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.
// var obj = {
//   key: [1, 2, 3, 4, 5]
// };
// var output = getOddElementsAtProperty(obj, 'key');
// console.log(output); // --> [1, 3, 5]

function getOddElementsAtProperty(obj, key) {}

// Write a function called "getEvenElementsAtProperty".

// Given an object and a key, "getEvenElementsAtProperty" returns an array containing all the even elements of the array located at the given key.

// Notes:

// If the array is empty, it should return an empty array.
// If the array contains no even elements, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the given key, it should return an empty array.
// var obj = {
//   key: [1000, 11, 50, 17]
// };
// var output = getEvenElementsAtProperty(obj, 'key');
// console.log(output); // --> [1000, 50]

function getEvenElementsAtProperty(obj, key) {}

// Write a function called "getSmallestElementAtProperty".

// Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key.

// Notes:

// If the array is empty, it should return undefined.
// If the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.
// var obj = {
//   key: [2, 1, 5]
// };
// var output = getSmallestElementAtProperty(obj, 'key');
// console.log(output); // --> 1

function getSmallestElementAtProperty(obj, key) {}

// Write a function called "getLargestElementAtProperty".

// Given an object and a key, "getLargestElementAtProperty" returns the largest element in the array located at the given key.

// Notes:

// If the array is empty, it should return undefined.
// If the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.
// var obj = {
//   key: [1, 2, 4]
// };
// var output = getLargestElementAtProperty(obj, 'key');
// console.log(output); // --> 4

function getLargestElementAtProperty(obj, key) {}

// Write a function called "getAllButLastElementOfProperty".

// Given an object and a key, "getAllButLastElementOfProperty" returns an array containing all but the last element of the array located at the given key.

// Notes:

// If the array is empty, it should return an empty array.
// If the property at the given key is not an array, it return an empty array.
// If there is no property at the key, it should return an empty array.
// var obj = {
//   key: [1, 2, 3]
// };
// var output = getAllButLastElementOfProperty(obj, 'key');
// console.log(output); // --> [1,2]

function getAllButLastElementOfProperty(obj, key) {}

// Write a function called "getElementOfArrayProperty".

// Given an object, a key, and a numerical index, "getElementOfArrayProperty" returns the value of the element at the given index of the array located within the given object at the given key.

// Notes:

// If the array is empty, it should return undefined.
// If the given index is out of range of the array located at the given key, it should return undefined.
// If the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.
// var obj = {
//  key: ['Jamil', 'Albrey']
// };
// var output = getElementOfArrayProperty(obj, 'key', 0);
// console.log(output); // --> 'Jamil'

function getElementOfArrayProperty(obj, key, index) {}

// Write a function called "countWords".

// Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.

// Notes:

// If given an empty string, it should return an empty object.
// var output = countWords('ask a bunch get a bunch');
// console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

function countWords(str) {
  // your code here
  /* START SOLUTION */
  /* END SOLUTION */
}

// Write a function called "extend".

// Given two objects, "extend" adds properties from the 2nd object to the 1st object.

// Notes:

// Add any keys that are not in the 1st object.
// If the 1st object already has a given key, ignore it (do not overwrite the property value).
// Do not modify the 2nd object at all.
// var obj1 = {
//   a: 1,
//   b: 2
// };
// var obj2 = {
//   b: 4,
//   c: 3
// };

// extend(obj1, obj2);

// console.log(obj1); // --> {a: 1, b: 2, c: 3}
// console.log(obj2); // --> {b: 4, c: 3}

function extend(obj1, obj2) {}

// Write a function called "removeNumbersLargerThan".

// Given a number and an object, "removeNumbersLargerThan" removes any properties whose values are numbers greater than the given number.

// var obj = {
//   a: 8,
//   b: 2,
//   c: 'montana'
// }
// removeNumbersLargerThan(5, obj);
// console.log(obj); // --> { b: 2, c: 'montana' }

function removeNumbersLargerThan(num, obj) {}

// Write a function called "removeNumbersLessThan".

// Given a number and an object, "removeNumbersLessThan" removes any properties whose values are numbers less than the given number.

// var obj = {
//   a: 8,
//   b: 2,
//   c: 'montana'
// }
// removeNumbersLessThan(5, obj);
// console.log(obj); // --> { a: 8, c: 'montana' }

function removeNumbersLessThan(num, obj) {}

// Write a function called "removeStringValuesLongerThan".

// Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object whose values are strings longer than the given number.

// var obj = {
//   name: 'Montana',
//   age: 20,
//   location: 'Texas'
// };
// removeStringValuesLongerThan(6, obj);
// console.log(obj); // { age: 20, location: 'Texas' }

function removeStringValuesLongerThan(num, obj) {}

// Write a function called "removeEvenValues".

// Given an object, "removeEvenValues" removes any properties whose values are even numbers.

// Do this in place and return the original object, do not construct a cloned object that omits the properties.

// Example:

// var obj = {
//   a: 2,
//   b: 3,
//   c: 4
// };
// removeEvenValues(obj);
// console.log(obj); // --> { b: 3 }

function removeEvenValues(obj) {
  // your code here
  /* START SOLUTION */
  /* END SOLUTION */
}

// Write a function called "countNumberOfKeys".

// Given an object, "countNumberOfKeys" returns how many properties the given object has.

// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };
// var output = countNumberOfKeys(obj);
// console.log(output); // --> 3

function countNumberOfKeys(obj) {
  // your code here
  /* START SOLUTION */
  /* END SOLUTION */
}

// Write a function called "removeOddValues".

// Given an object, "removeOddValues" removes any properties whose values are odd numbers.

// var obj = {
//   a: 2,
//   b: 3,
//   c: 4
// };
// removeOddValues(obj);
// console.log(obj); // --> { a: 2, c: 4 }

function removeOddValues(obj) {
  // your code here
  /* START SOLUTION */
  /* END SOLUTION */
}

// Write a function called "removeArrayValues".

// Given an object, "removeArrayValues" removes any properties whose values are arrays.

// var obj = {
//   a: [1, 3, 4],
//   b: 2,
//   c: ['hi', 'there']
// }
// removeArrayValues(obj);
// console.log(obj); // --> { b: 2 }

function removeArrayValues(obj) {
  // your code here
  /* START SOLUTION */
  /* END SOLUTION */
}

// Write a function called "removeNumberValues".

// Given an object, "removeNumberValues" removes any properties whose values are numbers.

// var obj = {
//   a: 2,
//   b: 'remaining',
//   c: 4
// };
// removeNumberValues(obj);
// console.log(obj); // --> { b: 'remaining' }

function removeNumberValues(obj) {
  // your code here
  /* START SOLUTION */
  /* END SOLUTION */
}

// Write a function called "removeStringValues".

// Given an object, "removeStringValues" removes any properties on the given object whose values are strings.

// var obj = {
//   name: 'Sam',
//   age: 20
// }
// removeStringValues(obj);
// console.log(obj); // { age: 20 }

function removeStringValues(obj) {
  // your code here
  /* START SOLUTION */
  /* END SOLUTION */
}
