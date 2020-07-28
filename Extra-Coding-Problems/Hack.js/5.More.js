// Write a function 'transformFirstAndLast' that takes in an array, and returns an object with: 1) the first element of the array as the object's key, and 2) the last element of the array as that key's value.

// Example input:

// ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
// Function's return value (output):

// {
//   Queen : 'Beyonce'
// }
// Do not change the input array. Assume all elements in the input array will be of type 'string'.

// Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.

// E.g. it should handle input like:

// ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']
// Function's return value (output):

// {
//   Kevin : 'Spacey'
// }

function transformFirstAndLast(array) {}

// Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

// Example input:

// [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
// Function's return value (output):

// {
//   make : 'Ford',
//   model : 'Mustang',
//   year : 1964
// }
// Do not change the input string. Assume that all elements in the array will be of type 'string'.

// Note that the input may have a different number of elements than the given sample. For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.

function fromListToObject(array) {}

// Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

// The argument will look like this:

// [
//     [
//         ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//     ],
//     [
//         ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//     ]
// ]
// Given that input, the return value should look like this:

// [
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]
// Note that the input may have a different number of rows or different keys than the given sample.

// For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

function transformEmployeeData(employeeData) {}

// Write a function called "getAllKeys" which returns an array of all the input object's keys. Example input:

// {
//   name : 'Sam',
//   age : 25,
//   hasPets : true
// }
// Function's return value (output) :

// ['name', 'age', 'hasPets']
// Do not use "Object.keys" to solve this prompt.

// Note that your function should be able to handle any object passed in it.

// E.g. it should also handle an input like:

// {
//   a : 'a',
//   number : 11,
//   hungry : true,
//   grammyWins : 1
// }
// Function's return value (output):

// ['a', 'number', 'hungry', 'grammyWins']

function getAllKeys(obj) {}

// Write a function called "listAllValues" which returns an array of all the input object's values. Example input:

// {
//   name : 'Krysten',
//   age : 33,
//   hasPets : false
// }
// Function's return value (output):

// ['Krysten', 33, false]
// Note that the input may have a different number of keys and values than the given sample. E.g. it should also handle an input like:

// {
//   a : 'a',
//   number : 11,
//   hungry : true,
//   grammyWins : 1
// }
// Function's return value (output):

// ['a', 11, true, 1]

function listAllValues(obj) {}

// Write a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:

// Argument:

// {
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// }
// Return value:

// [['name', 'Holly'], ['age', 35], ['role', 'producer']]

function convertObjectToList(obj) {
  // your code here
}
