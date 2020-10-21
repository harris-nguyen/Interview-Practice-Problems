var shuffle = function (nums, n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(nums[i]);
    arr.push(nums[i + n]);
  }

  return arr;
};

let nums = [1, 2, 3, 4, 4, 3, 2, 1];
let n = 4;
console.log(shuffle(nums, n));
// Output: [1, 4, 2, 3, 3, 2, 4, 1]
