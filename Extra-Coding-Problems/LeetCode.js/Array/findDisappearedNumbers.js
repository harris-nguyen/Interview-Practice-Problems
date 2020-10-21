var findDisappearedNumbers = function (nums) {
  let arr = [];

  for (let i = 1; i < nums.length; i++) {
    if (!nums.includes(i)) {
      arr.push(i);
    }
  }
  return arr;
};

let input = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(input));
// Output: [5, 6]
