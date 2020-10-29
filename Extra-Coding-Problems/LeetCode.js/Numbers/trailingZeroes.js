var trailingZeroes = function (n) {
  let multi = 1;

  for (let i = 1; i <= n; i++) {
    multi *= i;
  }

  let findingZero = multi.toString().split("");

  let count = 0;
  for (let j = 0; j < findingZero.length; j++) {
    if (Number(findingZero[j]) === 0) {
      count++;
    }
  }

  console.log(count);
};

trailingZeroes(10);
// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.
