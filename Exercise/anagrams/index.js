// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const stringA1 = stringA
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    const stringB1 = stringB
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");

    for (let i = 0; i < stringA1.length; i++) {
      if (stringA1.length === stringB1.length) {
        if (stringA1[i] === stringB1[i]) {
          console.log(true);
          return true;
        } else {
          console.log(false);
          return false;
        }
      } else {
        console.log(false);
      }
    }
}

module.exports = anagrams;
