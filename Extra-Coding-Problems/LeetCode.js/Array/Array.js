var runningSum = function (nums) {
  let arr = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    arr.push(sum);
  }
  return arr;
};
let nums = [1, 1, 1, 1, 1];
console.log(runningSum(nums));
// Output: [1, 2, 3, 4, 5]

// ------------------------------------------------------------------------

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

// ------------------------------------------------------------------------

var moveZeroes = function (nums) {

  for(let i = 0; i < nums.length; i++){
    if(nums[i] === 0){
      nums.push(...nums.splice(i, 1));
    }
  }
  return nums
};

let input =  [0, 1, 0, 3, 12, 23]
console.log(moveZeroes(input))
// Output: [1, 3, 12, 0, 0]

// ------------------------------------------------------------------------

var findDisappearedNumbers = function (nums) {
  let arr = []

  for(let i = 1; i < nums.length; i++){
    if(!nums.includes(i)){
      arr.push(i)
    }
  }
  return arr
};

let input = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDisappearedNumbers(input))
// Output: [5, 6]
