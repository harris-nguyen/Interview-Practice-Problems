var twoSum = function (nums, target) {};
// https://leetcode.com/problems/two-sum/description/


var maxSubArray = function (nums) {};
// https://leetcode.com/problems/maximum-subarray/description/


var moveZeroes = function (nums) {};
// https://leetcode.com/problems/move-zeroes/description/


var containsDuplicate = function (nums) {};
// https://leetcode.com/problems/contains-duplicate/description/


var rotate = function (nums, k) {};
// https://leetcode.com/problems/rotate-array/description/


// O(n) and faster
function firstRecurringCharacter(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }
  return undefined;
}
console.log(firstRecurringCharacter([2, 5, 9, 8, 2, 4, 5, 7, 9]));
