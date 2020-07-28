// https://www.tutorialsteacher.com/javascript/javascript-object
// https://medium.com/infancyit/javascript-object-manipulation-5d1145cf06ef

// object literal
var person = {
  firstName:'Steve',
  lastName:'Jobs'
};

// Constructor function
function Student(){
  this.name = "John";
  this.gender = "Male";
  this.sayHi = function(){
    alert('Hi');
  }
}
var student1 = new Student();
console.log(student1.name);
console.log(student1.gender);
student1.sayHi();



// Object Declaration:
// An empty object(empty cabinet) can be created using one of two syntaxes:

let user = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax



// Object With Constructor:
function User(name, age, mobile) {
  this.name = name;
  this.age = age;
  this.mobile = mobile;
}
var user1 = new User("Talha", 26, 8801967402131);
console.log(user1);
// answer:
// user1 = {
//   age: 26,
//   mobile: 1993,
//   name: "Talha"
// }



//Get Values from an Object: Object.values()
const user1 = {
  age: 26,
  mobile: 8801967402131,
  name: "Talha",
};
const user = Object.values(user1);
console.log(user); //[26, 8801967402131, "Talha"]



// Get Keys from an Object: Object.keys()
const user1 = {
  age: 26,
  mobile: 8801967402131,
  name: "Talha",
};
const user = Object.keys(user1);
console.log(user); //["age", "mobile", "name"]



// Merging Object with Spread:
const user1 = {
  age: 26,
  mobile: 8801967402131,
  name: "Talha",
};
const newObj = {
  ...user1,
  location: "sylhet",
};
console.log(newObj);
// answer:
// newObj = {
//   age: 26,
//   location: "Dhaka",
//   mobile: 8801967402131,
//   name: "Talha"
// }



//Combining Two Object: Object.assign()
const user1 = {
  birtYear: 1993,
  name: "Talha",
};
const user1NewVal = {
  age: 26,
};
const combineObj = Object.assign(user1, user1NewVal);
console.log(combineObj);
// answer
// {
//   age: 26,
//     birtYear: 1993,
//       name: "Talha"
// }



// Two ways of creating objects
// Object Constructor or simply creating and inputing data for an obj literal
// Object Constructor::
var person = new Object();

// Attach properties and methods to person object
person.firstName = "James";
person["lastName"] = "Bond";
person.age = 25;
person.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};
// access properties & methods
console.log(person.firstName); // James
console.log(person.lastName); // Bond
console.log(person.getFullName()); // James Bond
