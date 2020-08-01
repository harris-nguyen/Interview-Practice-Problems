var runningSum = function (nums) {

  let arr = []

  for(let i = 1; i < nums.length + 1; i++){
    arr.push(i)
  }
return arr

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
let given = [1,1,2,3,4,1,4,2,2,3,4,2,5,2]
console.log(majorityElement(given)) // 2

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

// ------------------------------------------------------------------------

var isHappy = function (n) {

  let toSplit = n.toString().split('')
  let sqr
  let sum = 0

  for(let i = 0; i < toSplit.length; i++){
    sqr = toSplit[i] * toSplit[i]
    sum += sqr
  }
  return sum
};

let input = 29
console.log(isHappy(input))
// Explanation: 4 + 81 = 85

// ------------------------------------------------------------------------

var groupAnagrams = function (strs) {

  let group = {}

  for(let i = 0; i < strs.length; i++){
    let sort = strs[i].split('').sort().join('')

    if (!group[sort]){
      group[sort] = [strs[i]]
    } else {
      group[sort].push(strs[i])
    }
  }

  return Object.values(group)
};

let input = ["eta", "eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(input))
//   Output:
// [
//   ["ate", "eat", "tea"],
//   ["nat", "tan"],
//   ["bat"]
// ]

// ------------------------------------------------------------------------

var shuffle = function (nums, n) {

  let arr = []

  for (let i = 0; i < n; i++) {
    arr.push(nums[i])
    arr.push(nums[i + n])
  }

  return arr
};

let nums = [1, 2, 3, 4, 4, 3, 2, 1]
let n = 4
console.log(shuffle(nums, n))
// Output: [1, 4, 2, 3, 3, 2, 4, 1]

// ------------------------------------------------------------------------

const smallerNumbersThanCurrent = nums => {
  let result = [];
  let count = 0;

  for(let i = 0; i < nums.length;i++){
    let first = nums[i]

    for (let j = 0; j < nums.length; j++) {
      let second = nums[j]

      if(first > second){
        count++
      }
    }
    result.push(count)
    count = 0 // by setting this, you are able to restart
  }
  return result
};

let nums = [8, 1, 2, 2, 3]
console.log(smallerNumbersThanCurrent(nums))
// Output: [4, 0, 1, 1, 3]
