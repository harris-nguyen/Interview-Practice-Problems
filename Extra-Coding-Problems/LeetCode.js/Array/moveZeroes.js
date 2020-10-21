var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.push(...nums.splice(i, 1));
    }
  }
  return nums;
};

let input = [0, 1, 0, 3, 12, 23];
console.log(moveZeroes(input));
// Output: [1, 3, 12, 0, 0]
