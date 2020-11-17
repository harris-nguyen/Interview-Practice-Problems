// Given a square matrix (i.e. same number of rows as columns),
// its trace is the sum of the entries in the main diagonal
// (i.e. the diagonal line from the top left to the bottom right).


function trace(arr) {
  let traced = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    console.log(arr[i][i]);
    traced += arr[i][i];
  }
  console.log(traced);
}

// trace([
//   [1, 4],
//   [4, 1]
// ]) //➞ 2
// 1 + 1 = 2

trace([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]); // ➞ 15

// 1 + 5 + 9 = 15
