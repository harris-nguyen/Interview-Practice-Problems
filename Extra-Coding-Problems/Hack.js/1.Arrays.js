// Write a function called "findShortestWordAmongMixedElements".

// Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

// Notes:

// If there are ties, it should return the first element to appear in the given array.
// Expect the given array to have values other than strings.
// If the given array is empty, it should return an empty string.
// If the given array contains no strings, it should return an empty string.
// var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
// console.log(output); // --> 'two'

function findShortestWordAmongMixedElements(arr) {}

// Write a function called "findSmallestNumberAmongMixedElements".

// Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

// Notes:

// If the given array is empty, it should return 0.
// If the array contains no numbers, it should return 0.
// var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
// console.log(output); // --> 4

function findSmallestNumberAmongMixedElements(arr) {}

// Write a function called "getLongestWordOfMixedElements".

// Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

// Notes:

// If the array is empty, it should return an empty string ("").
// If the array contains no strings; it should return an empty string.
// var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
// console.log(output); // --> 'word'

function getLongestWordOfMixedElements(arr) {}

// Write a function called "findSmallestElement".

// Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

// Notes:

// If the given array is empty, it should return 0.
// var output = findSmallestElement([4, 1, 9, 10]);
// console.log(output); // --> 1

function findSmallestElement(arr) {}

// Write a function called "findShortestElement".

// Given an array, "findShortestElement" returns the shortest string within the given array.

// Notes:

// If there are ties, it should return the first element to appear.
// If the given array is empty, it should return an empty string.
// var output = findShortestElement(['a', 'two', 'three']);
// console.log(output); // --> 'a'

function findShortestElement(arr) {}

// Write a function called "getLargestElement".

// Given an array, "getLargestElement" returns the largest number in the given array.

// Notes:

// It should return 0 if the array is empty.
// var output = getLargestElement([5, 2, 8, 3]);
// console.log(output); // --> 8;

function getLargestElement(arr) {}

// Write a function called "computeSumOfAllElements".

// Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

// var output = computeSumOfAllElements([1, 2, 3])
// console.log(output); // --> 6

function computeSumOfAllElements(arr) {}

// Write a function called "joinArrayOfArrays".

// Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.

// var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
// console.log(output); // --> [1, 4, true, false, 'x', 'y']
// You should be familiar with the "concat" method for this problem.

function joinArrayOfArrays(arr) {}

// Write a function called "getElementsThatEqual10AtProperty".

// Given an object and a key, "getElementsThatEqual10AtProperty" returns an array containing all the elements of the array located at the given key that are equal to ten.

// Notes:

// If the array is empty, it should return an empty array.
// If the array contains no elements that are equal to 10, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.
// var obj = {
//   key: [1000, 10, 50, 10]
// };
// var output = getElementsThatEqual10AtProperty(obj, 'key');
// console.log(output); // --> [10, 10]

function getElementsThatEqual10AtProperty(obj, key) {}

// Write a function called "getElementsLessThan100AtProperty".

// Given an object and a key, "getElementsLessThan100AtProperty" returns an array containing all the elements of the array located at the given key that are less than 100.

// Notes:

// If the array is empty, it should return an empty array.
// If the array contains no elements less than 100, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.
// var obj = {
//   key: [1000, 20, 50, 500]
// };
// var output = getElementsLessThan100AtProperty(obj, 'key');
// console.log(output); // --> [20, 50]

function getElementsLessThan100AtProperty(obj, key) {}

// Write a function called "getElementsGreaterThan10AtProperty".

// Given an object and a key, "getElementsGreaterThan10AtProperty" returns an array containing the elements within the array, located at the given key, that are greater than 10.

// Notes:

// If the array is empty, it should return an empty array.
// If the array contains no elements greater than 10, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.
// var obj = {
//   key: [1, 20, 30]
// };
// var output = getElementsGreaterThan10AtProperty(obj, 'key');
// console.log(output); // --> [20, 30]

function getElementsGreaterThan10AtProperty(obj, key) {}

// Write a function called "getFirstElementOfProperty".

// Given an object and a key, "getFirstElementOfProperty" returns the first element of the array located at the given key.

// Notes:

// If the array is empty, it should return undefined.
// If the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.
// var obj = {
//   key: [1, 2, 4]
// };
// var output = getFirstElementOfProperty(obj, 'key');
// console.log(output); // --> 1

function getFirstElementOfProperty(obj, key) {}

// Write a function called "getNthElementOfProperty".

// Given an object and a key, "getNthElementOfProperty" returns the nth element of an array located at the given key.

// Notes:

// If the array is empty, it should return undefined.
// If n is out of range, it should return undefined.
// If the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.
// var obj = {
//   key: [1, 2, 6]
// };
// var output = getNthElementOfProperty(obj, 'key', 1);
// console.log(output); // --> 2

function getNthElementOfProperty(obj, key, n) {}

// Write a function called "getLastElementOfProperty".

// Given an object and a key, "getLastElementOfProperty" returns the last element of an array located at the given key.

// Notes:

// If the array is empty, it should return undefined.
// if the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.
// var obj = {
//   key: [1, 2, 5]
// };
// var output = getLastElementOfProperty(obj, 'key');
// console.log(output); // --> 5

function getLastElementOfProperty(obj, key) {}

// Write a function called "removeElement".

// Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing the items in the given array that do not match the "discarder" parameter.

// Notes:

// If all the elements match, it should return an empty array.
// If an empty array is passed in, it should return an empty array.
// var output = removeElement([1, 2, 3, 2, 1], 2);
// console.log(output); // --> [1, 3, 1]

function removeElement(array, discarder) {}

// Write a function called "keep".

// Given an array and a keeper element, "keep" returns an array containing the items that match the given keeper element.

// Notes:

// If no elements match, "keep" should return an empty array.
// var output = keep([1, 2, 3, 2, 1], 2)
// console.log(output); --> [2, 2]

function keep(array, keeper) {}

// Write a function called "computeAverageOfNumbers".

// Given an array of numbers, "computeAverageOfNumbers" returns their average.

// Notes:

// If given an empty array, it should return 0.
// var input = [1,2,3,4,5];
// var output = computeAverageOfNumbers(input);
// console.log(output); // --> 3

function computeAverageOfNumbers(nums) {}

// Write a function called "filterOddLengthWords".

// Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

// var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
// console.log(output); // --> ['there', "now']

function filterOddLengthWords(words) {}

// Write a function called "filterEvenLengthWords".

// Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

// var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
// console.log(output); // --> ['word', 'word']

function filterEvenLengthWords(words) {}

// Write a function called "getLengthOfLongestElement".

// Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

// Notes:

// It should return 0 if the array is empty.
// var output = getLengthOfLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 5

function getLengthOfLongestElement(arr) {}

// Write a function called "squareElements". Given an array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.

// var output = squareElements([1, 2, 3]);
// console.log(output); // --> [1, 4, 9]

function squareElements(arr) {}

// Write a function called "filterOddElements".

// Given an array of numbers, "filterOddElements" returns an array containing only the odd numbers of the given array.

// var output = filterOddElements([1, 2, 3, 4, 5]);
// console.log(output); // --> [1, 3, 5]

function filterOddElements(arr) {}

// Write a function called "computeProductOfAllElements".

// Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.

// Notes:

// If given array is empty, it should return 0.
// var output = computeProductOfAllElements([2, 5, 6]);
// console.log(output); // --> 60

function computeProductOfAllElements(arr) {}

// Write a function called "filterEvenElements".

// Given an array of numbers, "filterEvenElements" returns an array containing only the even numbers of the given array.

// var output = filterEvenElements([2, 3, 4, 5, 6]);
// console.log(output); // --> [2, 4, 6]

function filterEvenElements(arr) {}

// Write a function called "getLengthOfShortestElement".

// Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

// Notes:

// It should return 0 if the array is empty.
// var output = getLengthOfShortestElement(['one', 'two', 'three']);
// console.log(output); // --> 3

function getLengthOfShortestElement(arr) {}

// Write a function called "getLongestElement".

// Given an array, "getLongestElement" returns the longest string in the given array.

// Notes:

// If there are ties, it returns the first element to appear.
// If the array is empty, it should return an empty string.
// var output = getLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 'three'

function getLongestElement(arr) {}

// Write a function called "removeFromBack".

// Given an array, "removeFromBack" returns the given array with its last element removed.

// Notes:

// You should be familiar with the method 'pop'.
// var output = removeFromBack([1, 2, 3]);
// console.log(output); // --> [1, 2]

function removeFromBack(arr) {
  // your code here
  /* START SOLUTION */
  /* END SOLUTION */
}

// Write a function called "joinThreeArrays".

// Given three arrays, "joinThreeArrays" returns an array with the elements of "arr1" in order followed by the elements in "arr2" in order followed by the elements of "arr3" in order.

// var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
// console.log(output); // --> [1, 2, 3, 4, 5, 6]

function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
  /* START SOLUTION */
  /* END SOLUTION */
}

// Write a function called "addToFrontOfNew".

// Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.

// Important: It should be a NEW array instance, not the original array instance.

// var input = [1, 2];
// var output = addToFrontOfNew(input, 3);
// console.log(output); // --> [3, 1, 2];
// console.log(input); --> [1, 2]

function addToFrontOfNew(arr, element) {
  // your code here
  /* START SOLUTION */
  /* END SOLUTION */
}

// Write a function called "addToBackNew".

// Given an array and an element, "addToBackNew" returns a clone of the given array, with the given element added to the end.

// Important: It should be a NEW array instance, not the original array instance.

// var input = [1, 2];
// var output = addToBackOfNew(input, 3);
// console.log(input); // --> [1, 2]
// console.log(output); // --> [1, 2, 3]

function addToBackOfNew(arr, element) {
  // your code here
  /* START SOLUTION */
  /* END SOLUTION */
}

// Write a function called "getAllElementsButNth".

// Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

// var output = getAllElementsButNth(['a', 'b', 'c'], 1);
// console.log(output); // --> ['a', 'c']

function getAllElementsButNth(array, n) {
  // your code here
  /* START SOLUTION */
  /* END SOLUTION */
}

// Write a function called "select".

// Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array.

// Notes:

// If keys are present in the given array, but are not in the given object, it should ignore them.
// It does not modify the passed in object.
// var arr = ['a', 'c', 'e'];
// var obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// };
// var output = select(arr, obj);
// console.log(output); // --> { a: 1, c: 3 }

function select(arr, obj) {}
