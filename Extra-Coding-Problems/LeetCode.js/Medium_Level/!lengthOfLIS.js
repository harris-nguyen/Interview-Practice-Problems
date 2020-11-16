

var lengthOfLIS = function (nums) {
  let keepTrack = [];
  for (let i = 0; i < nums.length; i++) {
    keepTrack[i] = 1;
  }
  console.log(keepTrack);

  for (let i = 0; i < nums.length; i++) {
    let first = nums[i];
    for (let j = 1; j < nums.length; j++) {
      let second = nums[j];
      if (first > second) {
        keepTrack[i] = keepTrack[j] + 1;
      }
    }
  }
  console.log(Math.max(...keepTrack));
};
lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
lengthOfLIS([1,2,3,4,5]);
// Input: [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
