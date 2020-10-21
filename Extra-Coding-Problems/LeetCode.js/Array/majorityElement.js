var majorityElement = function (nums) {
  let obj = {};
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }

    if (obj[nums[i]] > obj[max]) {
      max = obj[nums[i]];
    }
  }
  return max;
};
let given = [1, 1, 2, 3, 4, 1, 4, 2, 2, 3, 4, 2, 5, 2];
console.log(majorityElement(given)); // 2
