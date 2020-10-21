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
