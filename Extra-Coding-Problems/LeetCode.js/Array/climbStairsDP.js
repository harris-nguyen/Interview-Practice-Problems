// from leetcode google challenge

function climbStairsDP(n) {
  // stores how many ways we can solve number of steps
  let arr = [n + 1];
  // number of ways to run 0 steps:
  arr[0] = 1;
  // number of ways to run 1 steps:
  arr[1] = 1;
  // starting at 2 bc we already have index 0, 1
  for (let i = 2; i <= n; i++) {
    // need to look at previous steps
    // console.log(arr[i - 1]);
    // console.log(arr[i - 2]);
    arr[i] = arr[i - 1] + arr[i - 2];
    // console.log(arr[i]);
  }
  console.log(arr[n]);
}
climbStairsDP(3);
