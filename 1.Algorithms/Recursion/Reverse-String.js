//Implement a function that reverses a string using iteration...and then recursion!

function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];
  //We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

// or

function reverseString(str) {
  var answer = "";

  for (var i = str.length - 1; i >= 0; i--) {
    answer += str[i];
  }

  return answer;
}
console.log(reverseString("yoyo master"));


reverseString("yoyo master");

// recursion
// medium.com/@sgee03/js-reverse-a-string-recursion-e442d0a056b7
function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  }
  // this order is what reverses it str.substr(1)) + str.charAt(0)
                             // ello, llo, lo, o   // h, e, l, l, o
  return reverseStringRecursive(str.substr(1)) + str.charAt(0);
}


console.log(reverseStringRecursive("hello"));

// reverseStringRecursive('hello')
// (reverseStringRecursive('ello') + 'h')
// ((reverseStringRecursive('llo') + 'e') + 'h')
// (((reverseStringRecursive('lo') + 'l') + 'e') + 'h')
// ((((reverseStringRecursive('o') + 'l') + 'l' ) + 'e') + 'h')
// (((('o') + 'l') + 'l' ) + 'e') + 'h')
// base case string has no more letters to pluck out
// return 'elloh'
