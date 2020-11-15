function threeConsecutiveOdds(arr) {
  let newArr = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      counter += 1;
      newArr.push(arr[i]);
    } else {
      counter = 0;
      newArr = [];
    }
    if (counter >= 3) {
      console.log(counter);
    }
  }
}
// threeConsecutiveOdds([1, 3, 4, 1]);
threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]);
