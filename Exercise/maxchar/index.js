// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  let splitIt = str.split("");
  let obj = {};

  for (let i = 0; i < splitIt.length; i++) {
    if (!obj[splitIt[i]]) {
      obj[splitIt[i]] = 1;
    } else {
      obj[splitIt[i]]++;
    }
  }

  let max = 0;
  let index = "";
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      index = key;
    }
  }
  console.log(max);
  console.log(index);
}

module.exports = maxChar;
