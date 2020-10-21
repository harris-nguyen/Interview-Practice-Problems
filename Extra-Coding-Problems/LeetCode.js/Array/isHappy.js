
// https://medium.com/javascript-in-plain-english/algorithms-101-happy-number-in-javascript-bddeb3d17035

var isHappy = function (n, counter = 0) {
  let result = false;

  let array = n
    .toString()
    .split("")
    .map((n) => n * n);
  console.log(array);
  // initialValue = 0
  let sum = array.reduce(
    (arrValues, initialValue) => arrValues + initialValue,
    0
  );

  if (sum === 1) {
    return true;
  } else {
    console.log(sum);
    isHappy(sum, counter);
  }

  return result;
};

console.log(isHappy(19));
// Explanation: 4 + 81 = 85
