function miniMaxSum(arr) {
  let sum = arr.reduce((a, b) => a + b);
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return [sum - max, sum - min];
}

miniMaxSum([1, 3, 5, 7, 9]);
