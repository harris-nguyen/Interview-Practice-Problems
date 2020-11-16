function searchMatrix(arr, target) {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    let innerArr = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (innerArr[j] === target) {
        result += innerArr[j];
      }
    }
  }

  console.log(result);
}
// Input: matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50],
// ];
// target = 3;
// Output: true;

searchMatrix(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50],
  ],
  3
);
