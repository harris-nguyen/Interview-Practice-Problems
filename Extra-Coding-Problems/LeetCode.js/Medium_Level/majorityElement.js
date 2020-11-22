var majorityElement = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }
  console.log(obj);
  let count = 0;
  let counter = 0;
  for (let key in obj) {
    if (obj[key] > count) {
      count = obj[key];
      counter = key;
    }
  }
  console.log(count, "times");
  console.log(counter);
};
majorityElement([2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1]);
