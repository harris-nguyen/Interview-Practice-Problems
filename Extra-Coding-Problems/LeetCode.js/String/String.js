var restoreString = function (s, indices) {
  let correctString = [];

  for (let i = 0; i < indices.length; i++) {
    correctString[indices[i]] = s[i];
  }
  return correctString.join("");
};

let s = "codeleet";
let indices = [4, 5, 6, 7, 0, 2, 1, 3];
console.log(restoreString(s, indices));
// Output: "leetcode"

// ------------------------------------------------------------------------
