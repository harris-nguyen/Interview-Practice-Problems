var runningSum = function (nums) {
  let arr = [];

  for (let i = 1; i < nums.length + 1; i++) {
    arr.push(i);
  }
  return arr;
};
let nums = [1, 1, 1, 1, 1];
console.log(runningSum(nums));
// Output: [1, 2, 3, 4, 5]
