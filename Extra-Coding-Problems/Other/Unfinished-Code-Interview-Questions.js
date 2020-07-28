var reverseVowels = function (str) {
  let val = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < val.length; j++) {
      if (str[i] === val[j]) {
        let test = str.replace(j, str[i]);
        console.log(test);
      }
    }
  }
};

console.log(reverseVowels("hello")); // "holle"
// console.log(reverseVowels("leetcode")) // "leotcede"


var topKFrequent = function(nums, k) {

};

let nums1 = [1, 1, 1, 2, 2, 3]
let k1 = 2

console.log(topKFrequent(nums1, k1)) // Output: [1,2]
