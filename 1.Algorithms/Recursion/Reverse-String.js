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
function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  }
    // substr: starting at
    // charAt: index
    console.log(str.substr(1))
    console.log(str.charAt(0))
  return reverseStringRecursive(str.substr(1)) + str.charAt(0);
}


reverseStringRecursive("yoyo master");
