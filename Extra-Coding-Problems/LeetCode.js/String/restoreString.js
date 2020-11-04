//leetcode.com/problems/shuffle-string/

var restoreString = function (s, indices) {
  let correctString = [];

  for (let i = 0; i < indices.length; i++) {
    // s[i] and indices[i] shares the same index therefore it will shuffle in the right order
    correctString[indices[i]] = s[i];
    // console.log(correctString)::
    //  [ , , , , 'c' ]
    //  [ , , , , 'c', 'o' ]
    //  [ , , , , 'c', 'o', 'd' ]
    //  [ , , , , 'c', 'o', 'd', 'e' ]
    //  [ 'l', , , , 'c', 'o', 'd', 'e' ]
    //  [ 'l', , 'e', , 'c', 'o', 'd', 'e' ]
    //  [ 'l', 'e', 'e', , 'c', 'o', 'd', 'e' ]
    //  [ 'l', 'e', 'e', 't', 'c', 'o', 'd', 'e' ]
  }
  console.log(correctString.join(""));
};

// var restoreString = function (s, indices) {
//   let result = "";
//   for (let i = 0; i < indices.length; i++) {
//     // this loops through the array and searches for index. when matched, it will return the order of index
//     result += s[indices.indexOf(i)];
//   }
//   console.log(result);
// };

// console.log(restoreString("aiohn", [3, 1, 4, 2, 0]));


let s = "codeleet";
let indices = [4, 5, 6, 7, 0, 2, 1, 3];
console.log(restoreString(s, indices));
