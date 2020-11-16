var lengthOfLIS = function (nums) {
  let dp = [];
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1;
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = dp[j] + 1;
      }
    }
  }
  console.log(Math.max(...dp));
};
lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
lengthOfLIS([1,2,3,4,5]);
// Input: [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
