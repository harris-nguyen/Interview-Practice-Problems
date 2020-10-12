// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let str = n.toString();
  let toSplitIt = str.split("");
  let reverseJoin = toSplitIt.reverse().join("");
  let ifMinus = Math.sign(n);
  let removeZero = parseInt(reverseJoin);

  console.log(ifMinus * removeZero);
}

module.exports = reverseInt;
