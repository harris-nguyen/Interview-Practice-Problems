// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

  let original = str.split("").join("");
  let reverseIt = str.split("").reverse().join("");
  console.log(original);
  console.log(reverseIt);

  console.log(original === reverseIt);
}

module.exports = palindrome;
