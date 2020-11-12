
function numberSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
    }
  }

  console.log(arr);
}
numberSort([1, 54, 1, 2, 463, 2]); //➞ [1, 1, 2, 2, 54, 463]
