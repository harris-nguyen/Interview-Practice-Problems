// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

    let lowerCaseIt = str.toLowerCase();
    let splitIt = lowerCaseIt.split("");
    let count = 0;

    for (let i = 0; i < splitIt.length; i++) {
      if (
        splitIt[i] === "a" ||
        splitIt[i] === "e" ||
        splitIt[i] === "i" ||
        splitIt[i] === "o" ||
        splitIt[i] === "u"
      ) {
        count++;
      }
    }
    console.log(count);
}

module.exports = vowels;
